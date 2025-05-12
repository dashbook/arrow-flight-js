export * from "./Flight.js";
export * as sql from "./FlightSql.js";
export { Any } from "./google/protobuf/any.js";
import { Metadata } from "nice-grpc-web";
import * as flight from "./Flight.js";
import * as flightsql from "./FlightSql.js";
export declare class FlightSQLClient {
    inner: flight.FlightServiceClient;
    metadata: Metadata;
    constructor(endpoint: string, metadata?: Metadata);
    setMetadata(key: string, value: string): void;
    actionCreatePreparedStatement(query: string): Promise<flightsql.ActionCreatePreparedStatementResult>;
    commandPreparedStatementQuery(preparedStatementHandle: Uint8Array): Promise<flight.FlightInfo>;
    doGetResult(ticket: flight.Ticket): AsyncIterable<Uint8Array>;
}
