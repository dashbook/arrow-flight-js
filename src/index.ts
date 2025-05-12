export * from "./Flight.js"
export * as sql from "./FlightSql.js"
export { Any } from "./google/protobuf/any.js";

import { createChannel, createClient, Metadata } from "nice-grpc-web";
import * as flight from "./Flight.js";
import * as flightsql from "./FlightSql.js";
import { Any } from "./google/protobuf/any.js";

export class FlightSQLClient {
  inner: flight.FlightServiceClient
  metadata: Metadata

  constructor(endpoint: string, metadata?: Metadata) {
    this.inner = createClient(flight.FlightServiceDefinition, createChannel(endpoint));
    this.metadata = metadata || new Metadata();
  }
  
  setMetadata(key: string, value: string) {
    this.metadata.set(key, value);
  }

  async actionCreatePreparedStatement(query: string) : Promise<flightsql.ActionCreatePreparedStatementResult> {
    let transactionId = window.crypto.getRandomValues(new Uint8Array(16));

    const value = flightsql.ActionCreatePreparedStatementRequest.encode({ query, transactionId }).finish();

    const body = Any.encode({typeUrl: "type.googleapis.com/arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest", value }).finish();

    const action: flight.Action = { type: "CreatePreparedStatement", body };

    const stream = this.inner.doAction(action, { metadata: this.metadata });

    const data = await collectResults(stream);

    const any = Any.decode(data);

    return flightsql.ActionCreatePreparedStatementResult.decode(any.value);
  }

  async commandPreparedStatementQuery(preparedStatementHandle: Uint8Array ) : Promise<flight.FlightInfo> {

    let value = flightsql.CommandPreparedStatementQuery.encode({ preparedStatementHandle }).finish();

    let cmd = Any.encode({typeUrl: "type.googleapis.com/arrow.flight.protocol.sql.CommandPreparedStatementQuery", value}).finish();

    let request : flight.FlightDescriptor = { type: 2, cmd, path: [] };

    return this.inner.getFlightInfo(request, { metadata: this.metadata });
  }

  doGetResult(ticket: flight.Ticket) : AsyncIterable<Uint8Array> {

    return flightToIPCStream(this.inner.doGet(ticket, {metadata: this.metadata }));
  }

}

async function collectResults(stream: AsyncIterable<flight.Result>): Promise<Uint8Array> {
  const chunks: Uint8Array[] = [];
  for await (const data of stream) {
    chunks.push(data.body);
  }

  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.byteLength, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;

  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return result;
}

function flightToIPCStream(stream: AsyncIterable<flight.FlightData>): AsyncIterable<Uint8Array> {
  return async function* () {
    for await (const value of stream) {
      const headerLength = value.dataHeader.length;

      let buf = new ArrayBuffer(4);
      const view = new DataView(buf);
      view.setInt32(0, headerLength, true);

      const message = new Uint8Array(headerLength + value.dataBody.length + 4);
      message.set(new Uint8Array(buf), 0)
      message.set(value.dataHeader, 4);
      message.set(value.dataBody, headerLength + 4);
      yield message;
    }
  }()
}
