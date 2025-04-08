/**
 * @fileoverview gRPC-Web generated client stub for arrow.flight.protocol
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.15.6
// source: arrow-flight/Flight.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as arrow$flight_Flight_pb from '../arrow-flight/Flight_pb'; // proto import: "arrow-flight/Flight.proto"


export class FlightServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListFlights = new grpcWeb.MethodDescriptor(
    '/arrow.flight.protocol.FlightService/ListFlights',
    grpcWeb.MethodType.SERVER_STREAMING,
    arrow$flight_Flight_pb.Criteria,
    arrow$flight_Flight_pb.FlightInfo,
    (request: arrow$flight_Flight_pb.Criteria) => {
      return request.serializeBinary();
    },
    arrow$flight_Flight_pb.FlightInfo.deserializeBinary
  );

  listFlights(
    request: arrow$flight_Flight_pb.Criteria,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<arrow$flight_Flight_pb.FlightInfo> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/arrow.flight.protocol.FlightService/ListFlights',
      request,
      metadata || {},
      this.methodDescriptorListFlights);
  }

  methodDescriptorGetFlightInfo = new grpcWeb.MethodDescriptor(
    '/arrow.flight.protocol.FlightService/GetFlightInfo',
    grpcWeb.MethodType.UNARY,
    arrow$flight_Flight_pb.FlightDescriptor,
    arrow$flight_Flight_pb.FlightInfo,
    (request: arrow$flight_Flight_pb.FlightDescriptor) => {
      return request.serializeBinary();
    },
    arrow$flight_Flight_pb.FlightInfo.deserializeBinary
  );

  getFlightInfo(
    request: arrow$flight_Flight_pb.FlightDescriptor,
    metadata?: grpcWeb.Metadata | null): Promise<arrow$flight_Flight_pb.FlightInfo>;

  getFlightInfo(
    request: arrow$flight_Flight_pb.FlightDescriptor,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arrow$flight_Flight_pb.FlightInfo) => void): grpcWeb.ClientReadableStream<arrow$flight_Flight_pb.FlightInfo>;

  getFlightInfo(
    request: arrow$flight_Flight_pb.FlightDescriptor,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arrow$flight_Flight_pb.FlightInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/arrow.flight.protocol.FlightService/GetFlightInfo',
        request,
        metadata || {},
        this.methodDescriptorGetFlightInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/arrow.flight.protocol.FlightService/GetFlightInfo',
    request,
    metadata || {},
    this.methodDescriptorGetFlightInfo);
  }

  methodDescriptorPollFlightInfo = new grpcWeb.MethodDescriptor(
    '/arrow.flight.protocol.FlightService/PollFlightInfo',
    grpcWeb.MethodType.UNARY,
    arrow$flight_Flight_pb.FlightDescriptor,
    arrow$flight_Flight_pb.PollInfo,
    (request: arrow$flight_Flight_pb.FlightDescriptor) => {
      return request.serializeBinary();
    },
    arrow$flight_Flight_pb.PollInfo.deserializeBinary
  );

  pollFlightInfo(
    request: arrow$flight_Flight_pb.FlightDescriptor,
    metadata?: grpcWeb.Metadata | null): Promise<arrow$flight_Flight_pb.PollInfo>;

  pollFlightInfo(
    request: arrow$flight_Flight_pb.FlightDescriptor,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arrow$flight_Flight_pb.PollInfo) => void): grpcWeb.ClientReadableStream<arrow$flight_Flight_pb.PollInfo>;

  pollFlightInfo(
    request: arrow$flight_Flight_pb.FlightDescriptor,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arrow$flight_Flight_pb.PollInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/arrow.flight.protocol.FlightService/PollFlightInfo',
        request,
        metadata || {},
        this.methodDescriptorPollFlightInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/arrow.flight.protocol.FlightService/PollFlightInfo',
    request,
    metadata || {},
    this.methodDescriptorPollFlightInfo);
  }

  methodDescriptorGetSchema = new grpcWeb.MethodDescriptor(
    '/arrow.flight.protocol.FlightService/GetSchema',
    grpcWeb.MethodType.UNARY,
    arrow$flight_Flight_pb.FlightDescriptor,
    arrow$flight_Flight_pb.SchemaResult,
    (request: arrow$flight_Flight_pb.FlightDescriptor) => {
      return request.serializeBinary();
    },
    arrow$flight_Flight_pb.SchemaResult.deserializeBinary
  );

  getSchema(
    request: arrow$flight_Flight_pb.FlightDescriptor,
    metadata?: grpcWeb.Metadata | null): Promise<arrow$flight_Flight_pb.SchemaResult>;

  getSchema(
    request: arrow$flight_Flight_pb.FlightDescriptor,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arrow$flight_Flight_pb.SchemaResult) => void): grpcWeb.ClientReadableStream<arrow$flight_Flight_pb.SchemaResult>;

  getSchema(
    request: arrow$flight_Flight_pb.FlightDescriptor,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arrow$flight_Flight_pb.SchemaResult) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/arrow.flight.protocol.FlightService/GetSchema',
        request,
        metadata || {},
        this.methodDescriptorGetSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/arrow.flight.protocol.FlightService/GetSchema',
    request,
    metadata || {},
    this.methodDescriptorGetSchema);
  }

  methodDescriptorDoGet = new grpcWeb.MethodDescriptor(
    '/arrow.flight.protocol.FlightService/DoGet',
    grpcWeb.MethodType.SERVER_STREAMING,
    arrow$flight_Flight_pb.Ticket,
    arrow$flight_Flight_pb.FlightData,
    (request: arrow$flight_Flight_pb.Ticket) => {
      return request.serializeBinary();
    },
    arrow$flight_Flight_pb.FlightData.deserializeBinary
  );

  doGet(
    request: arrow$flight_Flight_pb.Ticket,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<arrow$flight_Flight_pb.FlightData> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/arrow.flight.protocol.FlightService/DoGet',
      request,
      metadata || {},
      this.methodDescriptorDoGet);
  }

  methodDescriptorDoAction = new grpcWeb.MethodDescriptor(
    '/arrow.flight.protocol.FlightService/DoAction',
    grpcWeb.MethodType.SERVER_STREAMING,
    arrow$flight_Flight_pb.Action,
    arrow$flight_Flight_pb.Result,
    (request: arrow$flight_Flight_pb.Action) => {
      return request.serializeBinary();
    },
    arrow$flight_Flight_pb.Result.deserializeBinary
  );

  doAction(
    request: arrow$flight_Flight_pb.Action,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<arrow$flight_Flight_pb.Result> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/arrow.flight.protocol.FlightService/DoAction',
      request,
      metadata || {},
      this.methodDescriptorDoAction);
  }

  methodDescriptorListActions = new grpcWeb.MethodDescriptor(
    '/arrow.flight.protocol.FlightService/ListActions',
    grpcWeb.MethodType.SERVER_STREAMING,
    arrow$flight_Flight_pb.Empty,
    arrow$flight_Flight_pb.ActionType,
    (request: arrow$flight_Flight_pb.Empty) => {
      return request.serializeBinary();
    },
    arrow$flight_Flight_pb.ActionType.deserializeBinary
  );

  listActions(
    request: arrow$flight_Flight_pb.Empty,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<arrow$flight_Flight_pb.ActionType> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/arrow.flight.protocol.FlightService/ListActions',
      request,
      metadata || {},
      this.methodDescriptorListActions);
  }

}

