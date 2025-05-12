import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallContext, type CallOptions } from "nice-grpc-common";
export declare const protobufPackage = "arrow.flight.protocol";
/**
 * The result of a cancel operation.
 *
 * This is used by CancelFlightInfoResult.status.
 */
export declare enum CancelStatus {
    /**
     * CANCEL_STATUS_UNSPECIFIED - The cancellation status is unknown. Servers should avoid using
     * this value (send a NOT_FOUND error if the requested query is
     * not known). Clients can retry the request.
     */
    CANCEL_STATUS_UNSPECIFIED = 0,
    /**
     * CANCEL_STATUS_CANCELLED - The cancellation request is complete. Subsequent requests with
     * the same payload may return CANCELLED or a NOT_FOUND error.
     */
    CANCEL_STATUS_CANCELLED = 1,
    /**
     * CANCEL_STATUS_CANCELLING - The cancellation request is in progress. The client may retry
     * the cancellation request.
     */
    CANCEL_STATUS_CANCELLING = 2,
    /**
     * CANCEL_STATUS_NOT_CANCELLABLE - The query is not cancellable. The client should not retry the
     * cancellation request.
     */
    CANCEL_STATUS_NOT_CANCELLABLE = 3,
    UNRECOGNIZED = -1
}
/** The request that a client provides to a server on handshake. */
export interface HandshakeRequest {
    /** A defined protocol version */
    protocolVersion: number;
    /** Arbitrary auth/handshake info. */
    payload: Uint8Array;
}
export interface HandshakeResponse {
    /** A defined protocol version */
    protocolVersion: number;
    /** Arbitrary auth/handshake info. */
    payload: Uint8Array;
}
/** A message for doing simple auth. */
export interface BasicAuth {
    username: string;
    password: string;
}
export interface Empty {
}
/**
 * Describes an available action, including both the name used for execution
 * along with a short description of the purpose of the action.
 */
export interface ActionType {
    type: string;
    description: string;
}
/**
 * A service specific expression that can be used to return a limited set
 * of available Arrow Flight streams.
 */
export interface Criteria {
    expression: Uint8Array;
}
/** An opaque action specific for the service. */
export interface Action {
    type: string;
    body: Uint8Array;
}
/** An opaque result returned after executing an action. */
export interface Result {
    body: Uint8Array;
}
/** Wrap the result of a getSchema call */
export interface SchemaResult {
    /**
     * The schema of the dataset in its IPC form:
     *   4 bytes - an optional IPC_CONTINUATION_TOKEN prefix
     *   4 bytes - the byte length of the payload
     *   a flatbuffer Message whose header is the Schema
     */
    schema: Uint8Array;
}
/**
 * The name or tag for a Flight. May be used as a way to retrieve or generate
 * a flight or be used to expose a set of previously defined flights.
 */
export interface FlightDescriptor {
    type: FlightDescriptor_DescriptorType;
    /**
     * Opaque value used to express a command. Should only be defined when
     * type = CMD.
     */
    cmd: Uint8Array;
    /**
     * List of strings identifying a particular dataset. Should only be defined
     * when type = PATH.
     */
    path: string[];
}
/** Describes what type of descriptor is defined. */
export declare enum FlightDescriptor_DescriptorType {
    /** UNKNOWN - Protobuf pattern, not used. */
    UNKNOWN = 0,
    /**
     * PATH - A named path that identifies a dataset. A path is composed of a string
     * or list of strings describing a particular dataset. This is conceptually
     *  similar to a path inside a filesystem.
     */
    PATH = 1,
    /** CMD - An opaque command to generate a dataset. */
    CMD = 2,
    UNRECOGNIZED = -1
}
/**
 * The access coordinates for retrieval of a dataset. With a FlightInfo, a
 * consumer is able to determine how to retrieve a dataset.
 */
export interface FlightInfo {
    /**
     * The schema of the dataset in its IPC form:
     *   4 bytes - an optional IPC_CONTINUATION_TOKEN prefix
     *   4 bytes - the byte length of the payload
     *   a flatbuffer Message whose header is the Schema
     */
    schema: Uint8Array;
    /** The descriptor associated with this info. */
    flightDescriptor: FlightDescriptor | undefined;
    /**
     * A list of endpoints associated with the flight. To consume the
     * whole flight, all endpoints (and hence all Tickets) must be
     * consumed. Endpoints can be consumed in any order.
     *
     * In other words, an application can use multiple endpoints to
     * represent partitioned data.
     *
     * If the returned data has an ordering, an application can use
     * "FlightInfo.ordered = true" or should return the all data in a
     * single endpoint. Otherwise, there is no ordering defined on
     * endpoints or the data within.
     *
     * A client can read ordered data by reading data from returned
     * endpoints, in order, from front to back.
     *
     * Note that a client may ignore "FlightInfo.ordered = true". If an
     * ordering is important for an application, an application must
     * choose one of them:
     *
     * * An application requires that all clients must read data in
     *   returned endpoints order.
     * * An application must return the all data in a single endpoint.
     */
    endpoint: FlightEndpoint[];
    /** Set these to -1 if unknown. */
    totalRecords: number;
    totalBytes: number;
    /** FlightEndpoints are in the same order as the data. */
    ordered: boolean;
    /**
     * Application-defined metadata.
     *
     * There is no inherent or required relationship between this
     * and the app_metadata fields in the FlightEndpoints or resulting
     * FlightData messages. Since this metadata is application-defined,
     * a given application could define there to be a relationship,
     * but there is none required by the spec.
     */
    appMetadata: Uint8Array;
}
/** The information to process a long-running query. */
export interface PollInfo {
    /**
     * The currently available results.
     *
     * If "flight_descriptor" is not specified, the query is complete
     * and "info" specifies all results. Otherwise, "info" contains
     * partial query results.
     *
     * Note that each PollInfo response contains a complete
     * FlightInfo (not just the delta between the previous and current
     * FlightInfo).
     *
     * Subsequent PollInfo responses may only append new endpoints to
     * info.
     *
     * Clients can begin fetching results via DoGet(Ticket) with the
     * ticket in the info before the query is
     * completed. FlightInfo.ordered is also valid.
     */
    info: FlightInfo | undefined;
    /**
     * The descriptor the client should use on the next try.
     * If unset, the query is complete.
     */
    flightDescriptor: FlightDescriptor | undefined;
    /**
     * Query progress. If known, must be in [0.0, 1.0] but need not be
     * monotonic or nondecreasing. If unknown, do not set.
     */
    progress?: number | undefined;
    /**
     * Expiration time for this request. After this passes, the server
     * might not accept the retry descriptor anymore (and the query may
     * be cancelled). This may be updated on a call to PollFlightInfo.
     */
    expirationTime: Date | undefined;
}
/**
 * The request of the CancelFlightInfo action.
 *
 * The request should be stored in Action.body.
 */
export interface CancelFlightInfoRequest {
    info: FlightInfo | undefined;
}
/**
 * The result of the CancelFlightInfo action.
 *
 * The result should be stored in Result.body.
 */
export interface CancelFlightInfoResult {
    status: CancelStatus;
}
/**
 * An opaque identifier that the service can use to retrieve a particular
 * portion of a stream.
 *
 * Tickets are meant to be single use. It is an error/application-defined
 * behavior to reuse a ticket.
 */
export interface Ticket {
    ticket: Uint8Array;
}
/**
 * A location where a Flight service will accept retrieval of a particular
 * stream given a ticket.
 */
export interface Location {
    uri: string;
}
/** A particular stream or split associated with a flight. */
export interface FlightEndpoint {
    /** Token used to retrieve this stream. */
    ticket: Ticket | undefined;
    /**
     * A list of URIs where this ticket can be redeemed via DoGet().
     *
     * If the list is empty, the expectation is that the ticket can only
     * be redeemed on the current service where the ticket was
     * generated.
     *
     * If the list is not empty, the expectation is that the ticket can be
     * redeemed at any of the locations, and that the data returned will be
     * equivalent. In this case, the ticket may only be redeemed at one of the
     * given locations, and not (necessarily) on the current service. If one
     * of the given locations is "arrow-flight-reuse-connection://?", the
     * client may redeem the ticket on the service where the ticket was
     * generated (i.e., the same as above), in addition to the other
     * locations. (This URI was chosen to maximize compatibility, as 'scheme:'
     * or 'scheme://' are not accepted by Java's java.net.URI.)
     *
     * In other words, an application can use multiple locations to
     * represent redundant and/or load balanced services.
     */
    location: Location[];
    /**
     * Expiration time of this stream. If present, clients may assume
     * they can retry DoGet requests. Otherwise, it is
     * application-defined whether DoGet requests may be retried.
     */
    expirationTime: Date | undefined;
    /**
     * Application-defined metadata.
     *
     * There is no inherent or required relationship between this
     * and the app_metadata fields in the FlightInfo or resulting
     * FlightData messages. Since this metadata is application-defined,
     * a given application could define there to be a relationship,
     * but there is none required by the spec.
     */
    appMetadata: Uint8Array;
}
/**
 * The request of the RenewFlightEndpoint action.
 *
 * The request should be stored in Action.body.
 */
export interface RenewFlightEndpointRequest {
    endpoint: FlightEndpoint | undefined;
}
/** A batch of Arrow data as part of a stream of batches. */
export interface FlightData {
    /**
     * The descriptor of the data. This is only relevant when a client is
     * starting a new DoPut stream.
     */
    flightDescriptor: FlightDescriptor | undefined;
    /** Header for message data as described in Message.fbs::Message. */
    dataHeader: Uint8Array;
    /** Application-defined metadata. */
    appMetadata: Uint8Array;
    /**
     * The actual batch of Arrow data. Preferably handled with minimal-copies
     * coming last in the definition to help with sidecar patterns (it is
     * expected that some implementations will fetch this field off the wire
     * with specialized code to avoid extra memory copies).
     */
    dataBody: Uint8Array;
}
/** The response message associated with the submission of a DoPut. */
export interface PutResult {
    appMetadata: Uint8Array;
}
/**
 * EXPERIMENTAL: Union of possible value types for a Session Option to be set to.
 *
 * By convention, an attempt to set a valueless SessionOptionValue should
 * attempt to unset or clear the named option value on the server.
 */
export interface SessionOptionValue {
    stringValue?: string | undefined;
    boolValue?: boolean | undefined;
    int64Value?: number | undefined;
    doubleValue?: number | undefined;
    stringListValue?: SessionOptionValue_StringListValue | undefined;
}
export interface SessionOptionValue_StringListValue {
    values: string[];
}
/**
 * EXPERIMENTAL: A request to set session options for an existing or new (implicit)
 * server session.
 *
 * Sessions are persisted and referenced via a transport-level state management, typically
 * RFC 6265 HTTP cookies when using an HTTP transport.  The suggested cookie name or state
 * context key is 'arrow_flight_session_id', although implementations may freely choose their
 * own name.
 *
 * Session creation (if one does not already exist) is implied by this RPC request, however
 * server implementations may choose to initiate a session that also contains client-provided
 * session options at any other time, e.g. on authentication, or when any other call is made
 * and the server wishes to use a session to persist any state (or lack thereof).
 */
export interface SetSessionOptionsRequest {
    sessionOptions: {
        [key: string]: SessionOptionValue;
    };
}
export interface SetSessionOptionsRequest_SessionOptionsEntry {
    key: string;
    value: SessionOptionValue | undefined;
}
/**
 * EXPERIMENTAL: The results (individually) of setting a set of session options.
 *
 * Option names should only be present in the response if they were not successfully
 * set on the server; that is, a response without an Error for a name provided in the
 * SetSessionOptionsRequest implies that the named option value was set successfully.
 */
export interface SetSessionOptionsResult {
    errors: {
        [key: string]: SetSessionOptionsResult_Error;
    };
}
export declare enum SetSessionOptionsResult_ErrorValue {
    /**
     * UNSPECIFIED - Protobuf deserialization fallback value: The status is unknown or unrecognized.
     * Servers should avoid using this value. The request may be retried by the client.
     */
    UNSPECIFIED = 0,
    /** INVALID_NAME - The given session option name is invalid. */
    INVALID_NAME = 1,
    /** INVALID_VALUE - The session option value or type is invalid. */
    INVALID_VALUE = 2,
    /** ERROR - The session option cannot be set. */
    ERROR = 3,
    UNRECOGNIZED = -1
}
export interface SetSessionOptionsResult_Error {
    value: SetSessionOptionsResult_ErrorValue;
}
export interface SetSessionOptionsResult_ErrorsEntry {
    key: string;
    value: SetSessionOptionsResult_Error | undefined;
}
/**
 * EXPERIMENTAL: A request to access the session options for the current server session.
 *
 * The existing session is referenced via a cookie header or similar (see
 * SetSessionOptionsRequest above); it is an error to make this request with a missing,
 * invalid, or expired session cookie header or other implementation-defined session
 * reference token.
 */
export interface GetSessionOptionsRequest {
}
/** EXPERIMENTAL: The result containing the current server session options. */
export interface GetSessionOptionsResult {
    sessionOptions: {
        [key: string]: SessionOptionValue;
    };
}
export interface GetSessionOptionsResult_SessionOptionsEntry {
    key: string;
    value: SessionOptionValue | undefined;
}
/**
 * Request message for the "Close Session" action.
 *
 * The exiting session is referenced via a cookie header.
 */
export interface CloseSessionRequest {
}
/** The result of closing a session. */
export interface CloseSessionResult {
    status: CloseSessionResult_Status;
}
export declare enum CloseSessionResult_Status {
    /**
     * UNSPECIFIED - Protobuf deserialization fallback value: The session close status is unknown or
     * not recognized. Servers should avoid using this value (send a NOT_FOUND error if
     * the requested session is not known or expired). Clients can retry the request.
     */
    UNSPECIFIED = 0,
    /**
     * CLOSED - The session close request is complete. Subsequent requests with
     * the same session produce a NOT_FOUND error.
     */
    CLOSED = 1,
    /**
     * CLOSING - The session close request is in progress. The client may retry
     * the close request.
     */
    CLOSING = 2,
    /**
     * NOT_CLOSEABLE - The session is not closeable. The client should not retry the
     * close request.
     */
    NOT_CLOSEABLE = 3,
    UNRECOGNIZED = -1
}
export declare const HandshakeRequest: MessageFns<HandshakeRequest>;
export declare const HandshakeResponse: MessageFns<HandshakeResponse>;
export declare const BasicAuth: MessageFns<BasicAuth>;
export declare const Empty: MessageFns<Empty>;
export declare const ActionType: MessageFns<ActionType>;
export declare const Criteria: MessageFns<Criteria>;
export declare const Action: MessageFns<Action>;
export declare const Result: MessageFns<Result>;
export declare const SchemaResult: MessageFns<SchemaResult>;
export declare const FlightDescriptor: MessageFns<FlightDescriptor>;
export declare const FlightInfo: MessageFns<FlightInfo>;
export declare const PollInfo: MessageFns<PollInfo>;
export declare const CancelFlightInfoRequest: MessageFns<CancelFlightInfoRequest>;
export declare const CancelFlightInfoResult: MessageFns<CancelFlightInfoResult>;
export declare const Ticket: MessageFns<Ticket>;
export declare const Location: MessageFns<Location>;
export declare const FlightEndpoint: MessageFns<FlightEndpoint>;
export declare const RenewFlightEndpointRequest: MessageFns<RenewFlightEndpointRequest>;
export declare const FlightData: MessageFns<FlightData>;
export declare const PutResult: MessageFns<PutResult>;
export declare const SessionOptionValue: MessageFns<SessionOptionValue>;
export declare const SessionOptionValue_StringListValue: MessageFns<SessionOptionValue_StringListValue>;
export declare const SetSessionOptionsRequest: MessageFns<SetSessionOptionsRequest>;
export declare const SetSessionOptionsRequest_SessionOptionsEntry: MessageFns<SetSessionOptionsRequest_SessionOptionsEntry>;
export declare const SetSessionOptionsResult: MessageFns<SetSessionOptionsResult>;
export declare const SetSessionOptionsResult_Error: MessageFns<SetSessionOptionsResult_Error>;
export declare const SetSessionOptionsResult_ErrorsEntry: MessageFns<SetSessionOptionsResult_ErrorsEntry>;
export declare const GetSessionOptionsRequest: MessageFns<GetSessionOptionsRequest>;
export declare const GetSessionOptionsResult: MessageFns<GetSessionOptionsResult>;
export declare const GetSessionOptionsResult_SessionOptionsEntry: MessageFns<GetSessionOptionsResult_SessionOptionsEntry>;
export declare const CloseSessionRequest: MessageFns<CloseSessionRequest>;
export declare const CloseSessionResult: MessageFns<CloseSessionResult>;
/**
 * A flight service is an endpoint for retrieving or storing Arrow data. A
 * flight service can expose one or more predefined endpoints that can be
 * accessed using the Arrow Flight Protocol. Additionally, a flight service
 * can expose a set of actions that are available.
 */
export type FlightServiceDefinition = typeof FlightServiceDefinition;
export declare const FlightServiceDefinition: {
    readonly name: "FlightService";
    readonly fullName: "arrow.flight.protocol.FlightService";
    readonly methods: {
        /**
         * Handshake between client and server. Depending on the server, the
         * handshake may be required to determine the token that should be used for
         * future operations. Both request and response are streams to allow multiple
         * round-trips depending on auth mechanism.
         */
        readonly handshake: {
            readonly name: "Handshake";
            readonly requestType: MessageFns<HandshakeRequest>;
            readonly requestStream: true;
            readonly responseType: MessageFns<HandshakeResponse>;
            readonly responseStream: true;
            readonly options: {};
        };
        /**
         * Get a list of available streams given a particular criteria. Most flight
         * services will expose one or more streams that are readily available for
         * retrieval. This api allows listing the streams available for
         * consumption. A user can also provide a criteria. The criteria can limit
         * the subset of streams that can be listed via this interface. Each flight
         * service allows its own definition of how to consume criteria.
         */
        readonly listFlights: {
            readonly name: "ListFlights";
            readonly requestType: MessageFns<Criteria>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FlightInfo>;
            readonly responseStream: true;
            readonly options: {};
        };
        /**
         * For a given FlightDescriptor, get information about how the flight can be
         * consumed. This is a useful interface if the consumer of the interface
         * already can identify the specific flight to consume. This interface can
         * also allow a consumer to generate a flight stream through a specified
         * descriptor. For example, a flight descriptor might be something that
         * includes a SQL statement or a Pickled Python operation that will be
         * executed. In those cases, the descriptor will not be previously available
         * within the list of available streams provided by ListFlights but will be
         * available for consumption for the duration defined by the specific flight
         * service.
         */
        readonly getFlightInfo: {
            readonly name: "GetFlightInfo";
            readonly requestType: MessageFns<FlightDescriptor>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FlightInfo>;
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * For a given FlightDescriptor, start a query and get information
         * to poll its execution status. This is a useful interface if the
         * query may be a long-running query. The first PollFlightInfo call
         * should return as quickly as possible. (GetFlightInfo doesn't
         * return until the query is complete.)
         *
         * A client can consume any available results before
         * the query is completed. See PollInfo.info for details.
         *
         * A client can poll the updated query status by calling
         * PollFlightInfo() with PollInfo.flight_descriptor. A server
         * should not respond until the result would be different from last
         * time. That way, the client can "long poll" for updates
         * without constantly making requests. Clients can set a short timeout
         * to avoid blocking calls if desired.
         *
         * A client can't use PollInfo.flight_descriptor after
         * PollInfo.expiration_time passes. A server might not accept the
         * retry descriptor anymore and the query may be cancelled.
         *
         * A client may use the CancelFlightInfo action with
         * PollInfo.info to cancel the running query.
         */
        readonly pollFlightInfo: {
            readonly name: "PollFlightInfo";
            readonly requestType: MessageFns<FlightDescriptor>;
            readonly requestStream: false;
            readonly responseType: MessageFns<PollInfo>;
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * For a given FlightDescriptor, get the Schema as described in Schema.fbs::Schema
         * This is used when a consumer needs the Schema of flight stream. Similar to
         * GetFlightInfo this interface may generate a new flight that was not previously
         * available in ListFlights.
         */
        readonly getSchema: {
            readonly name: "GetSchema";
            readonly requestType: MessageFns<FlightDescriptor>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SchemaResult>;
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Retrieve a single stream associated with a particular descriptor
         * associated with the referenced ticket. A Flight can be composed of one or
         * more streams where each stream can be retrieved using a separate opaque
         * ticket that the flight service uses for managing a collection of streams.
         */
        readonly doGet: {
            readonly name: "DoGet";
            readonly requestType: MessageFns<Ticket>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FlightData>;
            readonly responseStream: true;
            readonly options: {};
        };
        /**
         * Push a stream to the flight service associated with a particular
         * flight stream. This allows a client of a flight service to upload a stream
         * of data. Depending on the particular flight service, a client consumer
         * could be allowed to upload a single stream per descriptor or an unlimited
         * number. In the latter, the service might implement a 'seal' action that
         * can be applied to a descriptor once all streams are uploaded.
         */
        readonly doPut: {
            readonly name: "DoPut";
            readonly requestType: MessageFns<FlightData>;
            readonly requestStream: true;
            readonly responseType: MessageFns<PutResult>;
            readonly responseStream: true;
            readonly options: {};
        };
        /**
         * Open a bidirectional data channel for a given descriptor. This
         * allows clients to send and receive arbitrary Arrow data and
         * application-specific metadata in a single logical stream. In
         * contrast to DoGet/DoPut, this is more suited for clients
         * offloading computation (rather than storage) to a Flight service.
         */
        readonly doExchange: {
            readonly name: "DoExchange";
            readonly requestType: MessageFns<FlightData>;
            readonly requestStream: true;
            readonly responseType: MessageFns<FlightData>;
            readonly responseStream: true;
            readonly options: {};
        };
        /**
         * Flight services can support an arbitrary number of simple actions in
         * addition to the possible ListFlights, GetFlightInfo, DoGet, DoPut
         * operations that are potentially available. DoAction allows a flight client
         * to do a specific action against a flight service. An action includes
         * opaque request and response objects that are specific to the type action
         * being undertaken.
         */
        readonly doAction: {
            readonly name: "DoAction";
            readonly requestType: MessageFns<Action>;
            readonly requestStream: false;
            readonly responseType: MessageFns<Result>;
            readonly responseStream: true;
            readonly options: {};
        };
        /**
         * A flight service exposes all of the available action types that it has
         * along with descriptions. This allows different flight consumers to
         * understand the capabilities of the flight service.
         */
        readonly listActions: {
            readonly name: "ListActions";
            readonly requestType: MessageFns<Empty>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActionType>;
            readonly responseStream: true;
            readonly options: {};
        };
    };
};
export interface FlightServiceImplementation<CallContextExt = {}> {
    /**
     * Handshake between client and server. Depending on the server, the
     * handshake may be required to determine the token that should be used for
     * future operations. Both request and response are streams to allow multiple
     * round-trips depending on auth mechanism.
     */
    handshake(request: AsyncIterable<HandshakeRequest>, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<HandshakeResponse>>;
    /**
     * Get a list of available streams given a particular criteria. Most flight
     * services will expose one or more streams that are readily available for
     * retrieval. This api allows listing the streams available for
     * consumption. A user can also provide a criteria. The criteria can limit
     * the subset of streams that can be listed via this interface. Each flight
     * service allows its own definition of how to consume criteria.
     */
    listFlights(request: Criteria, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<FlightInfo>>;
    /**
     * For a given FlightDescriptor, get information about how the flight can be
     * consumed. This is a useful interface if the consumer of the interface
     * already can identify the specific flight to consume. This interface can
     * also allow a consumer to generate a flight stream through a specified
     * descriptor. For example, a flight descriptor might be something that
     * includes a SQL statement or a Pickled Python operation that will be
     * executed. In those cases, the descriptor will not be previously available
     * within the list of available streams provided by ListFlights but will be
     * available for consumption for the duration defined by the specific flight
     * service.
     */
    getFlightInfo(request: FlightDescriptor, context: CallContext & CallContextExt): Promise<DeepPartial<FlightInfo>>;
    /**
     * For a given FlightDescriptor, start a query and get information
     * to poll its execution status. This is a useful interface if the
     * query may be a long-running query. The first PollFlightInfo call
     * should return as quickly as possible. (GetFlightInfo doesn't
     * return until the query is complete.)
     *
     * A client can consume any available results before
     * the query is completed. See PollInfo.info for details.
     *
     * A client can poll the updated query status by calling
     * PollFlightInfo() with PollInfo.flight_descriptor. A server
     * should not respond until the result would be different from last
     * time. That way, the client can "long poll" for updates
     * without constantly making requests. Clients can set a short timeout
     * to avoid blocking calls if desired.
     *
     * A client can't use PollInfo.flight_descriptor after
     * PollInfo.expiration_time passes. A server might not accept the
     * retry descriptor anymore and the query may be cancelled.
     *
     * A client may use the CancelFlightInfo action with
     * PollInfo.info to cancel the running query.
     */
    pollFlightInfo(request: FlightDescriptor, context: CallContext & CallContextExt): Promise<DeepPartial<PollInfo>>;
    /**
     * For a given FlightDescriptor, get the Schema as described in Schema.fbs::Schema
     * This is used when a consumer needs the Schema of flight stream. Similar to
     * GetFlightInfo this interface may generate a new flight that was not previously
     * available in ListFlights.
     */
    getSchema(request: FlightDescriptor, context: CallContext & CallContextExt): Promise<DeepPartial<SchemaResult>>;
    /**
     * Retrieve a single stream associated with a particular descriptor
     * associated with the referenced ticket. A Flight can be composed of one or
     * more streams where each stream can be retrieved using a separate opaque
     * ticket that the flight service uses for managing a collection of streams.
     */
    doGet(request: Ticket, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<FlightData>>;
    /**
     * Push a stream to the flight service associated with a particular
     * flight stream. This allows a client of a flight service to upload a stream
     * of data. Depending on the particular flight service, a client consumer
     * could be allowed to upload a single stream per descriptor or an unlimited
     * number. In the latter, the service might implement a 'seal' action that
     * can be applied to a descriptor once all streams are uploaded.
     */
    doPut(request: AsyncIterable<FlightData>, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<PutResult>>;
    /**
     * Open a bidirectional data channel for a given descriptor. This
     * allows clients to send and receive arbitrary Arrow data and
     * application-specific metadata in a single logical stream. In
     * contrast to DoGet/DoPut, this is more suited for clients
     * offloading computation (rather than storage) to a Flight service.
     */
    doExchange(request: AsyncIterable<FlightData>, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<FlightData>>;
    /**
     * Flight services can support an arbitrary number of simple actions in
     * addition to the possible ListFlights, GetFlightInfo, DoGet, DoPut
     * operations that are potentially available. DoAction allows a flight client
     * to do a specific action against a flight service. An action includes
     * opaque request and response objects that are specific to the type action
     * being undertaken.
     */
    doAction(request: Action, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<Result>>;
    /**
     * A flight service exposes all of the available action types that it has
     * along with descriptions. This allows different flight consumers to
     * understand the capabilities of the flight service.
     */
    listActions(request: Empty, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<ActionType>>;
}
export interface FlightServiceClient<CallOptionsExt = {}> {
    /**
     * Handshake between client and server. Depending on the server, the
     * handshake may be required to determine the token that should be used for
     * future operations. Both request and response are streams to allow multiple
     * round-trips depending on auth mechanism.
     */
    handshake(request: AsyncIterable<DeepPartial<HandshakeRequest>>, options?: CallOptions & CallOptionsExt): AsyncIterable<HandshakeResponse>;
    /**
     * Get a list of available streams given a particular criteria. Most flight
     * services will expose one or more streams that are readily available for
     * retrieval. This api allows listing the streams available for
     * consumption. A user can also provide a criteria. The criteria can limit
     * the subset of streams that can be listed via this interface. Each flight
     * service allows its own definition of how to consume criteria.
     */
    listFlights(request: DeepPartial<Criteria>, options?: CallOptions & CallOptionsExt): AsyncIterable<FlightInfo>;
    /**
     * For a given FlightDescriptor, get information about how the flight can be
     * consumed. This is a useful interface if the consumer of the interface
     * already can identify the specific flight to consume. This interface can
     * also allow a consumer to generate a flight stream through a specified
     * descriptor. For example, a flight descriptor might be something that
     * includes a SQL statement or a Pickled Python operation that will be
     * executed. In those cases, the descriptor will not be previously available
     * within the list of available streams provided by ListFlights but will be
     * available for consumption for the duration defined by the specific flight
     * service.
     */
    getFlightInfo(request: DeepPartial<FlightDescriptor>, options?: CallOptions & CallOptionsExt): Promise<FlightInfo>;
    /**
     * For a given FlightDescriptor, start a query and get information
     * to poll its execution status. This is a useful interface if the
     * query may be a long-running query. The first PollFlightInfo call
     * should return as quickly as possible. (GetFlightInfo doesn't
     * return until the query is complete.)
     *
     * A client can consume any available results before
     * the query is completed. See PollInfo.info for details.
     *
     * A client can poll the updated query status by calling
     * PollFlightInfo() with PollInfo.flight_descriptor. A server
     * should not respond until the result would be different from last
     * time. That way, the client can "long poll" for updates
     * without constantly making requests. Clients can set a short timeout
     * to avoid blocking calls if desired.
     *
     * A client can't use PollInfo.flight_descriptor after
     * PollInfo.expiration_time passes. A server might not accept the
     * retry descriptor anymore and the query may be cancelled.
     *
     * A client may use the CancelFlightInfo action with
     * PollInfo.info to cancel the running query.
     */
    pollFlightInfo(request: DeepPartial<FlightDescriptor>, options?: CallOptions & CallOptionsExt): Promise<PollInfo>;
    /**
     * For a given FlightDescriptor, get the Schema as described in Schema.fbs::Schema
     * This is used when a consumer needs the Schema of flight stream. Similar to
     * GetFlightInfo this interface may generate a new flight that was not previously
     * available in ListFlights.
     */
    getSchema(request: DeepPartial<FlightDescriptor>, options?: CallOptions & CallOptionsExt): Promise<SchemaResult>;
    /**
     * Retrieve a single stream associated with a particular descriptor
     * associated with the referenced ticket. A Flight can be composed of one or
     * more streams where each stream can be retrieved using a separate opaque
     * ticket that the flight service uses for managing a collection of streams.
     */
    doGet(request: DeepPartial<Ticket>, options?: CallOptions & CallOptionsExt): AsyncIterable<FlightData>;
    /**
     * Push a stream to the flight service associated with a particular
     * flight stream. This allows a client of a flight service to upload a stream
     * of data. Depending on the particular flight service, a client consumer
     * could be allowed to upload a single stream per descriptor or an unlimited
     * number. In the latter, the service might implement a 'seal' action that
     * can be applied to a descriptor once all streams are uploaded.
     */
    doPut(request: AsyncIterable<DeepPartial<FlightData>>, options?: CallOptions & CallOptionsExt): AsyncIterable<PutResult>;
    /**
     * Open a bidirectional data channel for a given descriptor. This
     * allows clients to send and receive arbitrary Arrow data and
     * application-specific metadata in a single logical stream. In
     * contrast to DoGet/DoPut, this is more suited for clients
     * offloading computation (rather than storage) to a Flight service.
     */
    doExchange(request: AsyncIterable<DeepPartial<FlightData>>, options?: CallOptions & CallOptionsExt): AsyncIterable<FlightData>;
    /**
     * Flight services can support an arbitrary number of simple actions in
     * addition to the possible ListFlights, GetFlightInfo, DoGet, DoPut
     * operations that are potentially available. DoAction allows a flight client
     * to do a specific action against a flight service. An action includes
     * opaque request and response objects that are specific to the type action
     * being undertaken.
     */
    doAction(request: DeepPartial<Action>, options?: CallOptions & CallOptionsExt): AsyncIterable<Result>;
    /**
     * A flight service exposes all of the available action types that it has
     * along with descriptions. This allows different flight consumers to
     * understand the capabilities of the flight service.
     */
    listActions(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): AsyncIterable<ActionType>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export type ServerStreamingMethodResult<Response> = {
    [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
