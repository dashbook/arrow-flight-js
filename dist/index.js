export * from "./Flight.js";
import * as sql_1 from "./FlightSql.js";
export { sql_1 as sql };
export { Any } from "./google/protobuf/any.js";
import { createChannel, createClient, Metadata } from "nice-grpc-web";
import * as flight from "./Flight.js";
import * as flightsql from "./FlightSql.js";
import { Any } from "./google/protobuf/any.js";
export class FlightSQLClient {
    constructor(endpoint, metadata) {
        this.inner = createClient(flight.FlightServiceDefinition, createChannel(endpoint));
        this.metadata = metadata || new Metadata();
    }
    setMetadata(key, value) {
        this.metadata.set(key, value);
    }
    async actionCreatePreparedStatement(query) {
        let transactionId = window.crypto.getRandomValues(new Uint8Array(16));
        const value = flightsql.ActionCreatePreparedStatementRequest.encode({ query, transactionId }).finish();
        const body = Any.encode({ typeUrl: "type.googleapis.com/arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest", value }).finish();
        const action = { type: "CreatePreparedStatement", body };
        const stream = this.inner.doAction(action, { metadata: this.metadata });
        const data = await collectResults(stream);
        const any = Any.decode(data);
        return flightsql.ActionCreatePreparedStatementResult.decode(any.value);
    }
    async commandPreparedStatementQuery(preparedStatementHandle) {
        let value = flightsql.CommandPreparedStatementQuery.encode({ preparedStatementHandle }).finish();
        let cmd = Any.encode({ typeUrl: "type.googleapis.com/arrow.flight.protocol.sql.CommandPreparedStatementQuery", value }).finish();
        let request = { type: 2, cmd, path: [] };
        return this.inner.getFlightInfo(request, { metadata: this.metadata });
    }
    doGetResult(ticket) {
        return flightToIPCStream(this.inner.doGet(ticket, { metadata: this.metadata }));
    }
}
async function collectResults(stream) {
    const chunks = [];
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
function flightToIPCStream(stream) {
    return async function* () {
        for await (const value of stream) {
            yield flightToIPCMessage(value);
        }
    }();
}
function flightToIPCMessage(value) {
    const headerLength = value.dataHeader.length;
    const padBytes = (8 - (headerLength & 7)) & 7;
    const message = new Uint8Array(8 + headerLength + padBytes + value.dataBody.length);
    // Continuation header
    message[0] = 0xff;
    message[1] = 0xff;
    message[2] = 0xff;
    message[3] = 0xff;
    new DataView(message.buffer, 4, 4).setInt32(0, headerLength, true);
    message.set(value.dataHeader, 8);
    message.fill(0, 8 + headerLength, 8 + headerLength + padBytes);
    message.set(value.dataBody, 8 + headerLength + padBytes);
    return message;
}
