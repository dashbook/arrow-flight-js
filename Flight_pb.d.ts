import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class HandshakeRequest extends jspb.Message {
  getProtocolVersion(): number;
  setProtocolVersion(value: number): HandshakeRequest;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): HandshakeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandshakeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandshakeRequest): HandshakeRequest.AsObject;
  static serializeBinaryToWriter(message: HandshakeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandshakeRequest;
  static deserializeBinaryFromReader(message: HandshakeRequest, reader: jspb.BinaryReader): HandshakeRequest;
}

export namespace HandshakeRequest {
  export type AsObject = {
    protocolVersion: number,
    payload: Uint8Array | string,
  }
}

export class HandshakeResponse extends jspb.Message {
  getProtocolVersion(): number;
  setProtocolVersion(value: number): HandshakeResponse;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): HandshakeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandshakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HandshakeResponse): HandshakeResponse.AsObject;
  static serializeBinaryToWriter(message: HandshakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandshakeResponse;
  static deserializeBinaryFromReader(message: HandshakeResponse, reader: jspb.BinaryReader): HandshakeResponse;
}

export namespace HandshakeResponse {
  export type AsObject = {
    protocolVersion: number,
    payload: Uint8Array | string,
  }
}

export class BasicAuth extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): BasicAuth;

  getPassword(): string;
  setPassword(value: string): BasicAuth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicAuth.AsObject;
  static toObject(includeInstance: boolean, msg: BasicAuth): BasicAuth.AsObject;
  static serializeBinaryToWriter(message: BasicAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicAuth;
  static deserializeBinaryFromReader(message: BasicAuth, reader: jspb.BinaryReader): BasicAuth;
}

export namespace BasicAuth {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class ActionType extends jspb.Message {
  getType(): string;
  setType(value: string): ActionType;

  getDescription(): string;
  setDescription(value: string): ActionType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionType.AsObject;
  static toObject(includeInstance: boolean, msg: ActionType): ActionType.AsObject;
  static serializeBinaryToWriter(message: ActionType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionType;
  static deserializeBinaryFromReader(message: ActionType, reader: jspb.BinaryReader): ActionType;
}

export namespace ActionType {
  export type AsObject = {
    type: string,
    description: string,
  }
}

export class Criteria extends jspb.Message {
  getExpression(): Uint8Array | string;
  getExpression_asU8(): Uint8Array;
  getExpression_asB64(): string;
  setExpression(value: Uint8Array | string): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Criteria.AsObject;
  static toObject(includeInstance: boolean, msg: Criteria): Criteria.AsObject;
  static serializeBinaryToWriter(message: Criteria, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Criteria;
  static deserializeBinaryFromReader(message: Criteria, reader: jspb.BinaryReader): Criteria;
}

export namespace Criteria {
  export type AsObject = {
    expression: Uint8Array | string,
  }
}

export class Action extends jspb.Message {
  getType(): string;
  setType(value: string): Action;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    type: string,
    body: Uint8Array | string,
  }
}

export class Result extends jspb.Message {
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    body: Uint8Array | string,
  }
}

export class SchemaResult extends jspb.Message {
  getSchema(): Uint8Array | string;
  getSchema_asU8(): Uint8Array;
  getSchema_asB64(): string;
  setSchema(value: Uint8Array | string): SchemaResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaResult.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaResult): SchemaResult.AsObject;
  static serializeBinaryToWriter(message: SchemaResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaResult;
  static deserializeBinaryFromReader(message: SchemaResult, reader: jspb.BinaryReader): SchemaResult;
}

export namespace SchemaResult {
  export type AsObject = {
    schema: Uint8Array | string,
  }
}

export class FlightDescriptor extends jspb.Message {
  getType(): FlightDescriptor.DescriptorType;
  setType(value: FlightDescriptor.DescriptorType): FlightDescriptor;

  getCmd(): Uint8Array | string;
  getCmd_asU8(): Uint8Array;
  getCmd_asB64(): string;
  setCmd(value: Uint8Array | string): FlightDescriptor;

  getPathList(): Array<string>;
  setPathList(value: Array<string>): FlightDescriptor;
  clearPathList(): FlightDescriptor;
  addPath(value: string, index?: number): FlightDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: FlightDescriptor): FlightDescriptor.AsObject;
  static serializeBinaryToWriter(message: FlightDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightDescriptor;
  static deserializeBinaryFromReader(message: FlightDescriptor, reader: jspb.BinaryReader): FlightDescriptor;
}

export namespace FlightDescriptor {
  export type AsObject = {
    type: FlightDescriptor.DescriptorType,
    cmd: Uint8Array | string,
    pathList: Array<string>,
  }

  export enum DescriptorType { 
    UNKNOWN = 0,
    PATH = 1,
    CMD = 2,
  }
}

export class FlightInfo extends jspb.Message {
  getSchema(): Uint8Array | string;
  getSchema_asU8(): Uint8Array;
  getSchema_asB64(): string;
  setSchema(value: Uint8Array | string): FlightInfo;

  getFlightDescriptor(): FlightDescriptor | undefined;
  setFlightDescriptor(value?: FlightDescriptor): FlightInfo;
  hasFlightDescriptor(): boolean;
  clearFlightDescriptor(): FlightInfo;

  getEndpointList(): Array<FlightEndpoint>;
  setEndpointList(value: Array<FlightEndpoint>): FlightInfo;
  clearEndpointList(): FlightInfo;
  addEndpoint(value?: FlightEndpoint, index?: number): FlightEndpoint;

  getTotalRecords(): number;
  setTotalRecords(value: number): FlightInfo;

  getTotalBytes(): number;
  setTotalBytes(value: number): FlightInfo;

  getOrdered(): boolean;
  setOrdered(value: boolean): FlightInfo;

  getAppMetadata(): Uint8Array | string;
  getAppMetadata_asU8(): Uint8Array;
  getAppMetadata_asB64(): string;
  setAppMetadata(value: Uint8Array | string): FlightInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FlightInfo): FlightInfo.AsObject;
  static serializeBinaryToWriter(message: FlightInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightInfo;
  static deserializeBinaryFromReader(message: FlightInfo, reader: jspb.BinaryReader): FlightInfo;
}

export namespace FlightInfo {
  export type AsObject = {
    schema: Uint8Array | string,
    flightDescriptor?: FlightDescriptor.AsObject,
    endpointList: Array<FlightEndpoint.AsObject>,
    totalRecords: number,
    totalBytes: number,
    ordered: boolean,
    appMetadata: Uint8Array | string,
  }
}

export class PollInfo extends jspb.Message {
  getInfo(): FlightInfo | undefined;
  setInfo(value?: FlightInfo): PollInfo;
  hasInfo(): boolean;
  clearInfo(): PollInfo;

  getFlightDescriptor(): FlightDescriptor | undefined;
  setFlightDescriptor(value?: FlightDescriptor): PollInfo;
  hasFlightDescriptor(): boolean;
  clearFlightDescriptor(): PollInfo;

  getProgress(): number;
  setProgress(value: number): PollInfo;
  hasProgress(): boolean;
  clearProgress(): PollInfo;

  getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): PollInfo;
  hasExpirationTime(): boolean;
  clearExpirationTime(): PollInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PollInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PollInfo): PollInfo.AsObject;
  static serializeBinaryToWriter(message: PollInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PollInfo;
  static deserializeBinaryFromReader(message: PollInfo, reader: jspb.BinaryReader): PollInfo;
}

export namespace PollInfo {
  export type AsObject = {
    info?: FlightInfo.AsObject,
    flightDescriptor?: FlightDescriptor.AsObject,
    progress?: number,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ProgressCase { 
    _PROGRESS_NOT_SET = 0,
    PROGRESS = 3,
  }
}

export class CancelFlightInfoRequest extends jspb.Message {
  getInfo(): FlightInfo | undefined;
  setInfo(value?: FlightInfo): CancelFlightInfoRequest;
  hasInfo(): boolean;
  clearInfo(): CancelFlightInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelFlightInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelFlightInfoRequest): CancelFlightInfoRequest.AsObject;
  static serializeBinaryToWriter(message: CancelFlightInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelFlightInfoRequest;
  static deserializeBinaryFromReader(message: CancelFlightInfoRequest, reader: jspb.BinaryReader): CancelFlightInfoRequest;
}

export namespace CancelFlightInfoRequest {
  export type AsObject = {
    info?: FlightInfo.AsObject,
  }
}

export class CancelFlightInfoResult extends jspb.Message {
  getStatus(): CancelStatus;
  setStatus(value: CancelStatus): CancelFlightInfoResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelFlightInfoResult.AsObject;
  static toObject(includeInstance: boolean, msg: CancelFlightInfoResult): CancelFlightInfoResult.AsObject;
  static serializeBinaryToWriter(message: CancelFlightInfoResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelFlightInfoResult;
  static deserializeBinaryFromReader(message: CancelFlightInfoResult, reader: jspb.BinaryReader): CancelFlightInfoResult;
}

export namespace CancelFlightInfoResult {
  export type AsObject = {
    status: CancelStatus,
  }
}

export class Ticket extends jspb.Message {
  getTicket(): Uint8Array | string;
  getTicket_asU8(): Uint8Array;
  getTicket_asB64(): string;
  setTicket(value: Uint8Array | string): Ticket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ticket.AsObject;
  static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
  static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ticket;
  static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
  export type AsObject = {
    ticket: Uint8Array | string,
  }
}

export class Location extends jspb.Message {
  getUri(): string;
  setUri(value: string): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    uri: string,
  }
}

export class FlightEndpoint extends jspb.Message {
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): FlightEndpoint;
  hasTicket(): boolean;
  clearTicket(): FlightEndpoint;

  getLocationList(): Array<Location>;
  setLocationList(value: Array<Location>): FlightEndpoint;
  clearLocationList(): FlightEndpoint;
  addLocation(value?: Location, index?: number): Location;

  getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): FlightEndpoint;
  hasExpirationTime(): boolean;
  clearExpirationTime(): FlightEndpoint;

  getAppMetadata(): Uint8Array | string;
  getAppMetadata_asU8(): Uint8Array;
  getAppMetadata_asB64(): string;
  setAppMetadata(value: Uint8Array | string): FlightEndpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: FlightEndpoint): FlightEndpoint.AsObject;
  static serializeBinaryToWriter(message: FlightEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightEndpoint;
  static deserializeBinaryFromReader(message: FlightEndpoint, reader: jspb.BinaryReader): FlightEndpoint;
}

export namespace FlightEndpoint {
  export type AsObject = {
    ticket?: Ticket.AsObject,
    locationList: Array<Location.AsObject>,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    appMetadata: Uint8Array | string,
  }
}

export class RenewFlightEndpointRequest extends jspb.Message {
  getEndpoint(): FlightEndpoint | undefined;
  setEndpoint(value?: FlightEndpoint): RenewFlightEndpointRequest;
  hasEndpoint(): boolean;
  clearEndpoint(): RenewFlightEndpointRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenewFlightEndpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenewFlightEndpointRequest): RenewFlightEndpointRequest.AsObject;
  static serializeBinaryToWriter(message: RenewFlightEndpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenewFlightEndpointRequest;
  static deserializeBinaryFromReader(message: RenewFlightEndpointRequest, reader: jspb.BinaryReader): RenewFlightEndpointRequest;
}

export namespace RenewFlightEndpointRequest {
  export type AsObject = {
    endpoint?: FlightEndpoint.AsObject,
  }
}

export class FlightData extends jspb.Message {
  getFlightDescriptor(): FlightDescriptor | undefined;
  setFlightDescriptor(value?: FlightDescriptor): FlightData;
  hasFlightDescriptor(): boolean;
  clearFlightDescriptor(): FlightData;

  getDataHeader(): Uint8Array | string;
  getDataHeader_asU8(): Uint8Array;
  getDataHeader_asB64(): string;
  setDataHeader(value: Uint8Array | string): FlightData;

  getAppMetadata(): Uint8Array | string;
  getAppMetadata_asU8(): Uint8Array;
  getAppMetadata_asB64(): string;
  setAppMetadata(value: Uint8Array | string): FlightData;

  getDataBody(): Uint8Array | string;
  getDataBody_asU8(): Uint8Array;
  getDataBody_asB64(): string;
  setDataBody(value: Uint8Array | string): FlightData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightData.AsObject;
  static toObject(includeInstance: boolean, msg: FlightData): FlightData.AsObject;
  static serializeBinaryToWriter(message: FlightData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightData;
  static deserializeBinaryFromReader(message: FlightData, reader: jspb.BinaryReader): FlightData;
}

export namespace FlightData {
  export type AsObject = {
    flightDescriptor?: FlightDescriptor.AsObject,
    dataHeader: Uint8Array | string,
    appMetadata: Uint8Array | string,
    dataBody: Uint8Array | string,
  }
}

export class PutResult extends jspb.Message {
  getAppMetadata(): Uint8Array | string;
  getAppMetadata_asU8(): Uint8Array;
  getAppMetadata_asB64(): string;
  setAppMetadata(value: Uint8Array | string): PutResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutResult.AsObject;
  static toObject(includeInstance: boolean, msg: PutResult): PutResult.AsObject;
  static serializeBinaryToWriter(message: PutResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutResult;
  static deserializeBinaryFromReader(message: PutResult, reader: jspb.BinaryReader): PutResult;
}

export namespace PutResult {
  export type AsObject = {
    appMetadata: Uint8Array | string,
  }
}

export class SessionOptionValue extends jspb.Message {
  getStringValue(): string;
  setStringValue(value: string): SessionOptionValue;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): SessionOptionValue;

  getInt64Value(): number;
  setInt64Value(value: number): SessionOptionValue;

  getDoubleValue(): number;
  setDoubleValue(value: number): SessionOptionValue;

  getStringListValue(): SessionOptionValue.StringListValue | undefined;
  setStringListValue(value?: SessionOptionValue.StringListValue): SessionOptionValue;
  hasStringListValue(): boolean;
  clearStringListValue(): SessionOptionValue;

  getOptionValueCase(): SessionOptionValue.OptionValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionOptionValue.AsObject;
  static toObject(includeInstance: boolean, msg: SessionOptionValue): SessionOptionValue.AsObject;
  static serializeBinaryToWriter(message: SessionOptionValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionOptionValue;
  static deserializeBinaryFromReader(message: SessionOptionValue, reader: jspb.BinaryReader): SessionOptionValue;
}

export namespace SessionOptionValue {
  export type AsObject = {
    stringValue: string,
    boolValue: boolean,
    int64Value: number,
    doubleValue: number,
    stringListValue?: SessionOptionValue.StringListValue.AsObject,
  }

  export class StringListValue extends jspb.Message {
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): StringListValue;
    clearValuesList(): StringListValue;
    addValues(value: string, index?: number): StringListValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringListValue.AsObject;
    static toObject(includeInstance: boolean, msg: StringListValue): StringListValue.AsObject;
    static serializeBinaryToWriter(message: StringListValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringListValue;
    static deserializeBinaryFromReader(message: StringListValue, reader: jspb.BinaryReader): StringListValue;
  }

  export namespace StringListValue {
    export type AsObject = {
      valuesList: Array<string>,
    }
  }


  export enum OptionValueCase { 
    OPTION_VALUE_NOT_SET = 0,
    STRING_VALUE = 1,
    BOOL_VALUE = 2,
    INT64_VALUE = 3,
    DOUBLE_VALUE = 4,
    STRING_LIST_VALUE = 5,
  }
}

export class SetSessionOptionsRequest extends jspb.Message {
  getSessionOptionsMap(): jspb.Map<string, SessionOptionValue>;
  clearSessionOptionsMap(): SetSessionOptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSessionOptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSessionOptionsRequest): SetSessionOptionsRequest.AsObject;
  static serializeBinaryToWriter(message: SetSessionOptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSessionOptionsRequest;
  static deserializeBinaryFromReader(message: SetSessionOptionsRequest, reader: jspb.BinaryReader): SetSessionOptionsRequest;
}

export namespace SetSessionOptionsRequest {
  export type AsObject = {
    sessionOptionsMap: Array<[string, SessionOptionValue.AsObject]>,
  }
}

export class SetSessionOptionsResult extends jspb.Message {
  getErrorsMap(): jspb.Map<string, SetSessionOptionsResult.Error>;
  clearErrorsMap(): SetSessionOptionsResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSessionOptionsResult.AsObject;
  static toObject(includeInstance: boolean, msg: SetSessionOptionsResult): SetSessionOptionsResult.AsObject;
  static serializeBinaryToWriter(message: SetSessionOptionsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSessionOptionsResult;
  static deserializeBinaryFromReader(message: SetSessionOptionsResult, reader: jspb.BinaryReader): SetSessionOptionsResult;
}

export namespace SetSessionOptionsResult {
  export type AsObject = {
    errorsMap: Array<[string, SetSessionOptionsResult.Error.AsObject]>,
  }

  export class Error extends jspb.Message {
    getValue(): SetSessionOptionsResult.ErrorValue;
    setValue(value: SetSessionOptionsResult.ErrorValue): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      value: SetSessionOptionsResult.ErrorValue,
    }
  }


  export enum ErrorValue { 
    UNSPECIFIED = 0,
    INVALID_NAME = 1,
    INVALID_VALUE = 2,
    ERROR = 3,
  }
}

export class GetSessionOptionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionOptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionOptionsRequest): GetSessionOptionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSessionOptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionOptionsRequest;
  static deserializeBinaryFromReader(message: GetSessionOptionsRequest, reader: jspb.BinaryReader): GetSessionOptionsRequest;
}

export namespace GetSessionOptionsRequest {
  export type AsObject = {
  }
}

export class GetSessionOptionsResult extends jspb.Message {
  getSessionOptionsMap(): jspb.Map<string, SessionOptionValue>;
  clearSessionOptionsMap(): GetSessionOptionsResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionOptionsResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionOptionsResult): GetSessionOptionsResult.AsObject;
  static serializeBinaryToWriter(message: GetSessionOptionsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionOptionsResult;
  static deserializeBinaryFromReader(message: GetSessionOptionsResult, reader: jspb.BinaryReader): GetSessionOptionsResult;
}

export namespace GetSessionOptionsResult {
  export type AsObject = {
    sessionOptionsMap: Array<[string, SessionOptionValue.AsObject]>,
  }
}

export class CloseSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseSessionRequest): CloseSessionRequest.AsObject;
  static serializeBinaryToWriter(message: CloseSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseSessionRequest;
  static deserializeBinaryFromReader(message: CloseSessionRequest, reader: jspb.BinaryReader): CloseSessionRequest;
}

export namespace CloseSessionRequest {
  export type AsObject = {
  }
}

export class CloseSessionResult extends jspb.Message {
  getStatus(): CloseSessionResult.Status;
  setStatus(value: CloseSessionResult.Status): CloseSessionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseSessionResult.AsObject;
  static toObject(includeInstance: boolean, msg: CloseSessionResult): CloseSessionResult.AsObject;
  static serializeBinaryToWriter(message: CloseSessionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseSessionResult;
  static deserializeBinaryFromReader(message: CloseSessionResult, reader: jspb.BinaryReader): CloseSessionResult;
}

export namespace CloseSessionResult {
  export type AsObject = {
    status: CloseSessionResult.Status,
  }

  export enum Status { 
    UNSPECIFIED = 0,
    CLOSED = 1,
    CLOSING = 2,
    NOT_CLOSEABLE = 3,
  }
}

export enum CancelStatus { 
  CANCEL_STATUS_UNSPECIFIED = 0,
  CANCEL_STATUS_CANCELLED = 1,
  CANCEL_STATUS_CANCELLING = 2,
  CANCEL_STATUS_NOT_CANCELLABLE = 3,
}
