import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb'; // proto import: "google/protobuf/descriptor.proto"


export class CommandGetSqlInfo extends jspb.Message {
  getInfoList(): Array<number>;
  setInfoList(value: Array<number>): CommandGetSqlInfo;
  clearInfoList(): CommandGetSqlInfo;
  addInfo(value: number, index?: number): CommandGetSqlInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetSqlInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetSqlInfo): CommandGetSqlInfo.AsObject;
  static serializeBinaryToWriter(message: CommandGetSqlInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetSqlInfo;
  static deserializeBinaryFromReader(message: CommandGetSqlInfo, reader: jspb.BinaryReader): CommandGetSqlInfo;
}

export namespace CommandGetSqlInfo {
  export type AsObject = {
    infoList: Array<number>,
  }
}

export class CommandGetXdbcTypeInfo extends jspb.Message {
  getDataType(): number;
  setDataType(value: number): CommandGetXdbcTypeInfo;
  hasDataType(): boolean;
  clearDataType(): CommandGetXdbcTypeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetXdbcTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetXdbcTypeInfo): CommandGetXdbcTypeInfo.AsObject;
  static serializeBinaryToWriter(message: CommandGetXdbcTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetXdbcTypeInfo;
  static deserializeBinaryFromReader(message: CommandGetXdbcTypeInfo, reader: jspb.BinaryReader): CommandGetXdbcTypeInfo;
}

export namespace CommandGetXdbcTypeInfo {
  export type AsObject = {
    dataType?: number,
  }

  export enum DataTypeCase { 
    _DATA_TYPE_NOT_SET = 0,
    DATA_TYPE = 1,
  }
}

export class CommandGetCatalogs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetCatalogs.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetCatalogs): CommandGetCatalogs.AsObject;
  static serializeBinaryToWriter(message: CommandGetCatalogs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetCatalogs;
  static deserializeBinaryFromReader(message: CommandGetCatalogs, reader: jspb.BinaryReader): CommandGetCatalogs;
}

export namespace CommandGetCatalogs {
  export type AsObject = {
  }
}

export class CommandGetDbSchemas extends jspb.Message {
  getCatalog(): string;
  setCatalog(value: string): CommandGetDbSchemas;
  hasCatalog(): boolean;
  clearCatalog(): CommandGetDbSchemas;

  getDbSchemaFilterPattern(): string;
  setDbSchemaFilterPattern(value: string): CommandGetDbSchemas;
  hasDbSchemaFilterPattern(): boolean;
  clearDbSchemaFilterPattern(): CommandGetDbSchemas;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetDbSchemas.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetDbSchemas): CommandGetDbSchemas.AsObject;
  static serializeBinaryToWriter(message: CommandGetDbSchemas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetDbSchemas;
  static deserializeBinaryFromReader(message: CommandGetDbSchemas, reader: jspb.BinaryReader): CommandGetDbSchemas;
}

export namespace CommandGetDbSchemas {
  export type AsObject = {
    catalog?: string,
    dbSchemaFilterPattern?: string,
  }

  export enum CatalogCase { 
    _CATALOG_NOT_SET = 0,
    CATALOG = 1,
  }

  export enum DbSchemaFilterPatternCase { 
    _DB_SCHEMA_FILTER_PATTERN_NOT_SET = 0,
    DB_SCHEMA_FILTER_PATTERN = 2,
  }
}

export class CommandGetTables extends jspb.Message {
  getCatalog(): string;
  setCatalog(value: string): CommandGetTables;
  hasCatalog(): boolean;
  clearCatalog(): CommandGetTables;

  getDbSchemaFilterPattern(): string;
  setDbSchemaFilterPattern(value: string): CommandGetTables;
  hasDbSchemaFilterPattern(): boolean;
  clearDbSchemaFilterPattern(): CommandGetTables;

  getTableNameFilterPattern(): string;
  setTableNameFilterPattern(value: string): CommandGetTables;
  hasTableNameFilterPattern(): boolean;
  clearTableNameFilterPattern(): CommandGetTables;

  getTableTypesList(): Array<string>;
  setTableTypesList(value: Array<string>): CommandGetTables;
  clearTableTypesList(): CommandGetTables;
  addTableTypes(value: string, index?: number): CommandGetTables;

  getIncludeSchema(): boolean;
  setIncludeSchema(value: boolean): CommandGetTables;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetTables.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetTables): CommandGetTables.AsObject;
  static serializeBinaryToWriter(message: CommandGetTables, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetTables;
  static deserializeBinaryFromReader(message: CommandGetTables, reader: jspb.BinaryReader): CommandGetTables;
}

export namespace CommandGetTables {
  export type AsObject = {
    catalog?: string,
    dbSchemaFilterPattern?: string,
    tableNameFilterPattern?: string,
    tableTypesList: Array<string>,
    includeSchema: boolean,
  }

  export enum CatalogCase { 
    _CATALOG_NOT_SET = 0,
    CATALOG = 1,
  }

  export enum DbSchemaFilterPatternCase { 
    _DB_SCHEMA_FILTER_PATTERN_NOT_SET = 0,
    DB_SCHEMA_FILTER_PATTERN = 2,
  }

  export enum TableNameFilterPatternCase { 
    _TABLE_NAME_FILTER_PATTERN_NOT_SET = 0,
    TABLE_NAME_FILTER_PATTERN = 3,
  }
}

export class CommandGetTableTypes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetTableTypes.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetTableTypes): CommandGetTableTypes.AsObject;
  static serializeBinaryToWriter(message: CommandGetTableTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetTableTypes;
  static deserializeBinaryFromReader(message: CommandGetTableTypes, reader: jspb.BinaryReader): CommandGetTableTypes;
}

export namespace CommandGetTableTypes {
  export type AsObject = {
  }
}

export class CommandGetPrimaryKeys extends jspb.Message {
  getCatalog(): string;
  setCatalog(value: string): CommandGetPrimaryKeys;
  hasCatalog(): boolean;
  clearCatalog(): CommandGetPrimaryKeys;

  getDbSchema(): string;
  setDbSchema(value: string): CommandGetPrimaryKeys;
  hasDbSchema(): boolean;
  clearDbSchema(): CommandGetPrimaryKeys;

  getTable(): string;
  setTable(value: string): CommandGetPrimaryKeys;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetPrimaryKeys.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetPrimaryKeys): CommandGetPrimaryKeys.AsObject;
  static serializeBinaryToWriter(message: CommandGetPrimaryKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetPrimaryKeys;
  static deserializeBinaryFromReader(message: CommandGetPrimaryKeys, reader: jspb.BinaryReader): CommandGetPrimaryKeys;
}

export namespace CommandGetPrimaryKeys {
  export type AsObject = {
    catalog?: string,
    dbSchema?: string,
    table: string,
  }

  export enum CatalogCase { 
    _CATALOG_NOT_SET = 0,
    CATALOG = 1,
  }

  export enum DbSchemaCase { 
    _DB_SCHEMA_NOT_SET = 0,
    DB_SCHEMA = 2,
  }
}

export class CommandGetExportedKeys extends jspb.Message {
  getCatalog(): string;
  setCatalog(value: string): CommandGetExportedKeys;
  hasCatalog(): boolean;
  clearCatalog(): CommandGetExportedKeys;

  getDbSchema(): string;
  setDbSchema(value: string): CommandGetExportedKeys;
  hasDbSchema(): boolean;
  clearDbSchema(): CommandGetExportedKeys;

  getTable(): string;
  setTable(value: string): CommandGetExportedKeys;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetExportedKeys.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetExportedKeys): CommandGetExportedKeys.AsObject;
  static serializeBinaryToWriter(message: CommandGetExportedKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetExportedKeys;
  static deserializeBinaryFromReader(message: CommandGetExportedKeys, reader: jspb.BinaryReader): CommandGetExportedKeys;
}

export namespace CommandGetExportedKeys {
  export type AsObject = {
    catalog?: string,
    dbSchema?: string,
    table: string,
  }

  export enum CatalogCase { 
    _CATALOG_NOT_SET = 0,
    CATALOG = 1,
  }

  export enum DbSchemaCase { 
    _DB_SCHEMA_NOT_SET = 0,
    DB_SCHEMA = 2,
  }
}

export class CommandGetImportedKeys extends jspb.Message {
  getCatalog(): string;
  setCatalog(value: string): CommandGetImportedKeys;
  hasCatalog(): boolean;
  clearCatalog(): CommandGetImportedKeys;

  getDbSchema(): string;
  setDbSchema(value: string): CommandGetImportedKeys;
  hasDbSchema(): boolean;
  clearDbSchema(): CommandGetImportedKeys;

  getTable(): string;
  setTable(value: string): CommandGetImportedKeys;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetImportedKeys.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetImportedKeys): CommandGetImportedKeys.AsObject;
  static serializeBinaryToWriter(message: CommandGetImportedKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetImportedKeys;
  static deserializeBinaryFromReader(message: CommandGetImportedKeys, reader: jspb.BinaryReader): CommandGetImportedKeys;
}

export namespace CommandGetImportedKeys {
  export type AsObject = {
    catalog?: string,
    dbSchema?: string,
    table: string,
  }

  export enum CatalogCase { 
    _CATALOG_NOT_SET = 0,
    CATALOG = 1,
  }

  export enum DbSchemaCase { 
    _DB_SCHEMA_NOT_SET = 0,
    DB_SCHEMA = 2,
  }
}

export class CommandGetCrossReference extends jspb.Message {
  getPkCatalog(): string;
  setPkCatalog(value: string): CommandGetCrossReference;
  hasPkCatalog(): boolean;
  clearPkCatalog(): CommandGetCrossReference;

  getPkDbSchema(): string;
  setPkDbSchema(value: string): CommandGetCrossReference;
  hasPkDbSchema(): boolean;
  clearPkDbSchema(): CommandGetCrossReference;

  getPkTable(): string;
  setPkTable(value: string): CommandGetCrossReference;

  getFkCatalog(): string;
  setFkCatalog(value: string): CommandGetCrossReference;
  hasFkCatalog(): boolean;
  clearFkCatalog(): CommandGetCrossReference;

  getFkDbSchema(): string;
  setFkDbSchema(value: string): CommandGetCrossReference;
  hasFkDbSchema(): boolean;
  clearFkDbSchema(): CommandGetCrossReference;

  getFkTable(): string;
  setFkTable(value: string): CommandGetCrossReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandGetCrossReference.AsObject;
  static toObject(includeInstance: boolean, msg: CommandGetCrossReference): CommandGetCrossReference.AsObject;
  static serializeBinaryToWriter(message: CommandGetCrossReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandGetCrossReference;
  static deserializeBinaryFromReader(message: CommandGetCrossReference, reader: jspb.BinaryReader): CommandGetCrossReference;
}

export namespace CommandGetCrossReference {
  export type AsObject = {
    pkCatalog?: string,
    pkDbSchema?: string,
    pkTable: string,
    fkCatalog?: string,
    fkDbSchema?: string,
    fkTable: string,
  }

  export enum PkCatalogCase { 
    _PK_CATALOG_NOT_SET = 0,
    PK_CATALOG = 1,
  }

  export enum PkDbSchemaCase { 
    _PK_DB_SCHEMA_NOT_SET = 0,
    PK_DB_SCHEMA = 2,
  }

  export enum FkCatalogCase { 
    _FK_CATALOG_NOT_SET = 0,
    FK_CATALOG = 4,
  }

  export enum FkDbSchemaCase { 
    _FK_DB_SCHEMA_NOT_SET = 0,
    FK_DB_SCHEMA = 5,
  }
}

export class ActionCreatePreparedStatementRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): ActionCreatePreparedStatementRequest;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): ActionCreatePreparedStatementRequest;
  hasTransactionId(): boolean;
  clearTransactionId(): ActionCreatePreparedStatementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCreatePreparedStatementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCreatePreparedStatementRequest): ActionCreatePreparedStatementRequest.AsObject;
  static serializeBinaryToWriter(message: ActionCreatePreparedStatementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCreatePreparedStatementRequest;
  static deserializeBinaryFromReader(message: ActionCreatePreparedStatementRequest, reader: jspb.BinaryReader): ActionCreatePreparedStatementRequest;
}

export namespace ActionCreatePreparedStatementRequest {
  export type AsObject = {
    query: string,
    transactionId?: Uint8Array | string,
  }

  export enum TransactionIdCase { 
    _TRANSACTION_ID_NOT_SET = 0,
    TRANSACTION_ID = 2,
  }
}

export class SubstraitPlan extends jspb.Message {
  getPlan(): Uint8Array | string;
  getPlan_asU8(): Uint8Array;
  getPlan_asB64(): string;
  setPlan(value: Uint8Array | string): SubstraitPlan;

  getVersion(): string;
  setVersion(value: string): SubstraitPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubstraitPlan.AsObject;
  static toObject(includeInstance: boolean, msg: SubstraitPlan): SubstraitPlan.AsObject;
  static serializeBinaryToWriter(message: SubstraitPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubstraitPlan;
  static deserializeBinaryFromReader(message: SubstraitPlan, reader: jspb.BinaryReader): SubstraitPlan;
}

export namespace SubstraitPlan {
  export type AsObject = {
    plan: Uint8Array | string,
    version: string,
  }
}

export class ActionCreatePreparedSubstraitPlanRequest extends jspb.Message {
  getPlan(): SubstraitPlan | undefined;
  setPlan(value?: SubstraitPlan): ActionCreatePreparedSubstraitPlanRequest;
  hasPlan(): boolean;
  clearPlan(): ActionCreatePreparedSubstraitPlanRequest;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): ActionCreatePreparedSubstraitPlanRequest;
  hasTransactionId(): boolean;
  clearTransactionId(): ActionCreatePreparedSubstraitPlanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCreatePreparedSubstraitPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCreatePreparedSubstraitPlanRequest): ActionCreatePreparedSubstraitPlanRequest.AsObject;
  static serializeBinaryToWriter(message: ActionCreatePreparedSubstraitPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCreatePreparedSubstraitPlanRequest;
  static deserializeBinaryFromReader(message: ActionCreatePreparedSubstraitPlanRequest, reader: jspb.BinaryReader): ActionCreatePreparedSubstraitPlanRequest;
}

export namespace ActionCreatePreparedSubstraitPlanRequest {
  export type AsObject = {
    plan?: SubstraitPlan.AsObject,
    transactionId?: Uint8Array | string,
  }

  export enum TransactionIdCase { 
    _TRANSACTION_ID_NOT_SET = 0,
    TRANSACTION_ID = 2,
  }
}

export class ActionCreatePreparedStatementResult extends jspb.Message {
  getPreparedStatementHandle(): Uint8Array | string;
  getPreparedStatementHandle_asU8(): Uint8Array;
  getPreparedStatementHandle_asB64(): string;
  setPreparedStatementHandle(value: Uint8Array | string): ActionCreatePreparedStatementResult;

  getDatasetSchema(): Uint8Array | string;
  getDatasetSchema_asU8(): Uint8Array;
  getDatasetSchema_asB64(): string;
  setDatasetSchema(value: Uint8Array | string): ActionCreatePreparedStatementResult;

  getParameterSchema(): Uint8Array | string;
  getParameterSchema_asU8(): Uint8Array;
  getParameterSchema_asB64(): string;
  setParameterSchema(value: Uint8Array | string): ActionCreatePreparedStatementResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCreatePreparedStatementResult.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCreatePreparedStatementResult): ActionCreatePreparedStatementResult.AsObject;
  static serializeBinaryToWriter(message: ActionCreatePreparedStatementResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCreatePreparedStatementResult;
  static deserializeBinaryFromReader(message: ActionCreatePreparedStatementResult, reader: jspb.BinaryReader): ActionCreatePreparedStatementResult;
}

export namespace ActionCreatePreparedStatementResult {
  export type AsObject = {
    preparedStatementHandle: Uint8Array | string,
    datasetSchema: Uint8Array | string,
    parameterSchema: Uint8Array | string,
  }
}

export class ActionClosePreparedStatementRequest extends jspb.Message {
  getPreparedStatementHandle(): Uint8Array | string;
  getPreparedStatementHandle_asU8(): Uint8Array;
  getPreparedStatementHandle_asB64(): string;
  setPreparedStatementHandle(value: Uint8Array | string): ActionClosePreparedStatementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionClosePreparedStatementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionClosePreparedStatementRequest): ActionClosePreparedStatementRequest.AsObject;
  static serializeBinaryToWriter(message: ActionClosePreparedStatementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionClosePreparedStatementRequest;
  static deserializeBinaryFromReader(message: ActionClosePreparedStatementRequest, reader: jspb.BinaryReader): ActionClosePreparedStatementRequest;
}

export namespace ActionClosePreparedStatementRequest {
  export type AsObject = {
    preparedStatementHandle: Uint8Array | string,
  }
}

export class ActionBeginTransactionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionBeginTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionBeginTransactionRequest): ActionBeginTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: ActionBeginTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionBeginTransactionRequest;
  static deserializeBinaryFromReader(message: ActionBeginTransactionRequest, reader: jspb.BinaryReader): ActionBeginTransactionRequest;
}

export namespace ActionBeginTransactionRequest {
  export type AsObject = {
  }
}

export class ActionBeginSavepointRequest extends jspb.Message {
  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): ActionBeginSavepointRequest;

  getName(): string;
  setName(value: string): ActionBeginSavepointRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionBeginSavepointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionBeginSavepointRequest): ActionBeginSavepointRequest.AsObject;
  static serializeBinaryToWriter(message: ActionBeginSavepointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionBeginSavepointRequest;
  static deserializeBinaryFromReader(message: ActionBeginSavepointRequest, reader: jspb.BinaryReader): ActionBeginSavepointRequest;
}

export namespace ActionBeginSavepointRequest {
  export type AsObject = {
    transactionId: Uint8Array | string,
    name: string,
  }
}

export class ActionBeginTransactionResult extends jspb.Message {
  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): ActionBeginTransactionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionBeginTransactionResult.AsObject;
  static toObject(includeInstance: boolean, msg: ActionBeginTransactionResult): ActionBeginTransactionResult.AsObject;
  static serializeBinaryToWriter(message: ActionBeginTransactionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionBeginTransactionResult;
  static deserializeBinaryFromReader(message: ActionBeginTransactionResult, reader: jspb.BinaryReader): ActionBeginTransactionResult;
}

export namespace ActionBeginTransactionResult {
  export type AsObject = {
    transactionId: Uint8Array | string,
  }
}

export class ActionBeginSavepointResult extends jspb.Message {
  getSavepointId(): Uint8Array | string;
  getSavepointId_asU8(): Uint8Array;
  getSavepointId_asB64(): string;
  setSavepointId(value: Uint8Array | string): ActionBeginSavepointResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionBeginSavepointResult.AsObject;
  static toObject(includeInstance: boolean, msg: ActionBeginSavepointResult): ActionBeginSavepointResult.AsObject;
  static serializeBinaryToWriter(message: ActionBeginSavepointResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionBeginSavepointResult;
  static deserializeBinaryFromReader(message: ActionBeginSavepointResult, reader: jspb.BinaryReader): ActionBeginSavepointResult;
}

export namespace ActionBeginSavepointResult {
  export type AsObject = {
    savepointId: Uint8Array | string,
  }
}

export class ActionEndTransactionRequest extends jspb.Message {
  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): ActionEndTransactionRequest;

  getAction(): ActionEndTransactionRequest.EndTransaction;
  setAction(value: ActionEndTransactionRequest.EndTransaction): ActionEndTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionEndTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionEndTransactionRequest): ActionEndTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: ActionEndTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionEndTransactionRequest;
  static deserializeBinaryFromReader(message: ActionEndTransactionRequest, reader: jspb.BinaryReader): ActionEndTransactionRequest;
}

export namespace ActionEndTransactionRequest {
  export type AsObject = {
    transactionId: Uint8Array | string,
    action: ActionEndTransactionRequest.EndTransaction,
  }

  export enum EndTransaction { 
    END_TRANSACTION_UNSPECIFIED = 0,
    END_TRANSACTION_COMMIT = 1,
    END_TRANSACTION_ROLLBACK = 2,
  }
}

export class ActionEndSavepointRequest extends jspb.Message {
  getSavepointId(): Uint8Array | string;
  getSavepointId_asU8(): Uint8Array;
  getSavepointId_asB64(): string;
  setSavepointId(value: Uint8Array | string): ActionEndSavepointRequest;

  getAction(): ActionEndSavepointRequest.EndSavepoint;
  setAction(value: ActionEndSavepointRequest.EndSavepoint): ActionEndSavepointRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionEndSavepointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionEndSavepointRequest): ActionEndSavepointRequest.AsObject;
  static serializeBinaryToWriter(message: ActionEndSavepointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionEndSavepointRequest;
  static deserializeBinaryFromReader(message: ActionEndSavepointRequest, reader: jspb.BinaryReader): ActionEndSavepointRequest;
}

export namespace ActionEndSavepointRequest {
  export type AsObject = {
    savepointId: Uint8Array | string,
    action: ActionEndSavepointRequest.EndSavepoint,
  }

  export enum EndSavepoint { 
    END_SAVEPOINT_UNSPECIFIED = 0,
    END_SAVEPOINT_RELEASE = 1,
    END_SAVEPOINT_ROLLBACK = 2,
  }
}

export class CommandStatementQuery extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): CommandStatementQuery;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): CommandStatementQuery;
  hasTransactionId(): boolean;
  clearTransactionId(): CommandStatementQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandStatementQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CommandStatementQuery): CommandStatementQuery.AsObject;
  static serializeBinaryToWriter(message: CommandStatementQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandStatementQuery;
  static deserializeBinaryFromReader(message: CommandStatementQuery, reader: jspb.BinaryReader): CommandStatementQuery;
}

export namespace CommandStatementQuery {
  export type AsObject = {
    query: string,
    transactionId?: Uint8Array | string,
  }

  export enum TransactionIdCase { 
    _TRANSACTION_ID_NOT_SET = 0,
    TRANSACTION_ID = 2,
  }
}

export class CommandStatementSubstraitPlan extends jspb.Message {
  getPlan(): SubstraitPlan | undefined;
  setPlan(value?: SubstraitPlan): CommandStatementSubstraitPlan;
  hasPlan(): boolean;
  clearPlan(): CommandStatementSubstraitPlan;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): CommandStatementSubstraitPlan;
  hasTransactionId(): boolean;
  clearTransactionId(): CommandStatementSubstraitPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandStatementSubstraitPlan.AsObject;
  static toObject(includeInstance: boolean, msg: CommandStatementSubstraitPlan): CommandStatementSubstraitPlan.AsObject;
  static serializeBinaryToWriter(message: CommandStatementSubstraitPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandStatementSubstraitPlan;
  static deserializeBinaryFromReader(message: CommandStatementSubstraitPlan, reader: jspb.BinaryReader): CommandStatementSubstraitPlan;
}

export namespace CommandStatementSubstraitPlan {
  export type AsObject = {
    plan?: SubstraitPlan.AsObject,
    transactionId?: Uint8Array | string,
  }

  export enum TransactionIdCase { 
    _TRANSACTION_ID_NOT_SET = 0,
    TRANSACTION_ID = 2,
  }
}

export class TicketStatementQuery extends jspb.Message {
  getStatementHandle(): Uint8Array | string;
  getStatementHandle_asU8(): Uint8Array;
  getStatementHandle_asB64(): string;
  setStatementHandle(value: Uint8Array | string): TicketStatementQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketStatementQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TicketStatementQuery): TicketStatementQuery.AsObject;
  static serializeBinaryToWriter(message: TicketStatementQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketStatementQuery;
  static deserializeBinaryFromReader(message: TicketStatementQuery, reader: jspb.BinaryReader): TicketStatementQuery;
}

export namespace TicketStatementQuery {
  export type AsObject = {
    statementHandle: Uint8Array | string,
  }
}

export class CommandPreparedStatementQuery extends jspb.Message {
  getPreparedStatementHandle(): Uint8Array | string;
  getPreparedStatementHandle_asU8(): Uint8Array;
  getPreparedStatementHandle_asB64(): string;
  setPreparedStatementHandle(value: Uint8Array | string): CommandPreparedStatementQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandPreparedStatementQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CommandPreparedStatementQuery): CommandPreparedStatementQuery.AsObject;
  static serializeBinaryToWriter(message: CommandPreparedStatementQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandPreparedStatementQuery;
  static deserializeBinaryFromReader(message: CommandPreparedStatementQuery, reader: jspb.BinaryReader): CommandPreparedStatementQuery;
}

export namespace CommandPreparedStatementQuery {
  export type AsObject = {
    preparedStatementHandle: Uint8Array | string,
  }
}

export class CommandStatementUpdate extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): CommandStatementUpdate;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): CommandStatementUpdate;
  hasTransactionId(): boolean;
  clearTransactionId(): CommandStatementUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandStatementUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CommandStatementUpdate): CommandStatementUpdate.AsObject;
  static serializeBinaryToWriter(message: CommandStatementUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandStatementUpdate;
  static deserializeBinaryFromReader(message: CommandStatementUpdate, reader: jspb.BinaryReader): CommandStatementUpdate;
}

export namespace CommandStatementUpdate {
  export type AsObject = {
    query: string,
    transactionId?: Uint8Array | string,
  }

  export enum TransactionIdCase { 
    _TRANSACTION_ID_NOT_SET = 0,
    TRANSACTION_ID = 2,
  }
}

export class CommandPreparedStatementUpdate extends jspb.Message {
  getPreparedStatementHandle(): Uint8Array | string;
  getPreparedStatementHandle_asU8(): Uint8Array;
  getPreparedStatementHandle_asB64(): string;
  setPreparedStatementHandle(value: Uint8Array | string): CommandPreparedStatementUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandPreparedStatementUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CommandPreparedStatementUpdate): CommandPreparedStatementUpdate.AsObject;
  static serializeBinaryToWriter(message: CommandPreparedStatementUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandPreparedStatementUpdate;
  static deserializeBinaryFromReader(message: CommandPreparedStatementUpdate, reader: jspb.BinaryReader): CommandPreparedStatementUpdate;
}

export namespace CommandPreparedStatementUpdate {
  export type AsObject = {
    preparedStatementHandle: Uint8Array | string,
  }
}

export class CommandStatementIngest extends jspb.Message {
  getTableDefinitionOptions(): CommandStatementIngest.TableDefinitionOptions | undefined;
  setTableDefinitionOptions(value?: CommandStatementIngest.TableDefinitionOptions): CommandStatementIngest;
  hasTableDefinitionOptions(): boolean;
  clearTableDefinitionOptions(): CommandStatementIngest;

  getTable(): string;
  setTable(value: string): CommandStatementIngest;

  getSchema(): string;
  setSchema(value: string): CommandStatementIngest;
  hasSchema(): boolean;
  clearSchema(): CommandStatementIngest;

  getCatalog(): string;
  setCatalog(value: string): CommandStatementIngest;
  hasCatalog(): boolean;
  clearCatalog(): CommandStatementIngest;

  getTemporary(): boolean;
  setTemporary(value: boolean): CommandStatementIngest;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): CommandStatementIngest;
  hasTransactionId(): boolean;
  clearTransactionId(): CommandStatementIngest;

  getOptionsMap(): jspb.Map<string, string>;
  clearOptionsMap(): CommandStatementIngest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandStatementIngest.AsObject;
  static toObject(includeInstance: boolean, msg: CommandStatementIngest): CommandStatementIngest.AsObject;
  static serializeBinaryToWriter(message: CommandStatementIngest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandStatementIngest;
  static deserializeBinaryFromReader(message: CommandStatementIngest, reader: jspb.BinaryReader): CommandStatementIngest;
}

export namespace CommandStatementIngest {
  export type AsObject = {
    tableDefinitionOptions?: CommandStatementIngest.TableDefinitionOptions.AsObject,
    table: string,
    schema?: string,
    catalog?: string,
    temporary: boolean,
    transactionId?: Uint8Array | string,
    optionsMap: Array<[string, string]>,
  }

  export class TableDefinitionOptions extends jspb.Message {
    getIfNotExist(): CommandStatementIngest.TableDefinitionOptions.TableNotExistOption;
    setIfNotExist(value: CommandStatementIngest.TableDefinitionOptions.TableNotExistOption): TableDefinitionOptions;

    getIfExists(): CommandStatementIngest.TableDefinitionOptions.TableExistsOption;
    setIfExists(value: CommandStatementIngest.TableDefinitionOptions.TableExistsOption): TableDefinitionOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableDefinitionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: TableDefinitionOptions): TableDefinitionOptions.AsObject;
    static serializeBinaryToWriter(message: TableDefinitionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableDefinitionOptions;
    static deserializeBinaryFromReader(message: TableDefinitionOptions, reader: jspb.BinaryReader): TableDefinitionOptions;
  }

  export namespace TableDefinitionOptions {
    export type AsObject = {
      ifNotExist: CommandStatementIngest.TableDefinitionOptions.TableNotExistOption,
      ifExists: CommandStatementIngest.TableDefinitionOptions.TableExistsOption,
    }

    export enum TableNotExistOption { 
      TABLE_NOT_EXIST_OPTION_UNSPECIFIED = 0,
      TABLE_NOT_EXIST_OPTION_CREATE = 1,
      TABLE_NOT_EXIST_OPTION_FAIL = 2,
    }

    export enum TableExistsOption { 
      TABLE_EXISTS_OPTION_UNSPECIFIED = 0,
      TABLE_EXISTS_OPTION_FAIL = 1,
      TABLE_EXISTS_OPTION_APPEND = 2,
      TABLE_EXISTS_OPTION_REPLACE = 3,
    }
  }


  export enum SchemaCase { 
    _SCHEMA_NOT_SET = 0,
    SCHEMA = 3,
  }

  export enum CatalogCase { 
    _CATALOG_NOT_SET = 0,
    CATALOG = 4,
  }

  export enum TransactionIdCase { 
    _TRANSACTION_ID_NOT_SET = 0,
    TRANSACTION_ID = 6,
  }
}

export class DoPutUpdateResult extends jspb.Message {
  getRecordCount(): number;
  setRecordCount(value: number): DoPutUpdateResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoPutUpdateResult.AsObject;
  static toObject(includeInstance: boolean, msg: DoPutUpdateResult): DoPutUpdateResult.AsObject;
  static serializeBinaryToWriter(message: DoPutUpdateResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoPutUpdateResult;
  static deserializeBinaryFromReader(message: DoPutUpdateResult, reader: jspb.BinaryReader): DoPutUpdateResult;
}

export namespace DoPutUpdateResult {
  export type AsObject = {
    recordCount: number,
  }
}

export class DoPutPreparedStatementResult extends jspb.Message {
  getPreparedStatementHandle(): Uint8Array | string;
  getPreparedStatementHandle_asU8(): Uint8Array;
  getPreparedStatementHandle_asB64(): string;
  setPreparedStatementHandle(value: Uint8Array | string): DoPutPreparedStatementResult;
  hasPreparedStatementHandle(): boolean;
  clearPreparedStatementHandle(): DoPutPreparedStatementResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoPutPreparedStatementResult.AsObject;
  static toObject(includeInstance: boolean, msg: DoPutPreparedStatementResult): DoPutPreparedStatementResult.AsObject;
  static serializeBinaryToWriter(message: DoPutPreparedStatementResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoPutPreparedStatementResult;
  static deserializeBinaryFromReader(message: DoPutPreparedStatementResult, reader: jspb.BinaryReader): DoPutPreparedStatementResult;
}

export namespace DoPutPreparedStatementResult {
  export type AsObject = {
    preparedStatementHandle?: Uint8Array | string,
  }

  export enum PreparedStatementHandleCase { 
    _PREPARED_STATEMENT_HANDLE_NOT_SET = 0,
    PREPARED_STATEMENT_HANDLE = 1,
  }
}

export class ActionCancelQueryRequest extends jspb.Message {
  getInfo(): Uint8Array | string;
  getInfo_asU8(): Uint8Array;
  getInfo_asB64(): string;
  setInfo(value: Uint8Array | string): ActionCancelQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCancelQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCancelQueryRequest): ActionCancelQueryRequest.AsObject;
  static serializeBinaryToWriter(message: ActionCancelQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCancelQueryRequest;
  static deserializeBinaryFromReader(message: ActionCancelQueryRequest, reader: jspb.BinaryReader): ActionCancelQueryRequest;
}

export namespace ActionCancelQueryRequest {
  export type AsObject = {
    info: Uint8Array | string,
  }
}

export class ActionCancelQueryResult extends jspb.Message {
  getResult(): ActionCancelQueryResult.CancelResult;
  setResult(value: ActionCancelQueryResult.CancelResult): ActionCancelQueryResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCancelQueryResult.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCancelQueryResult): ActionCancelQueryResult.AsObject;
  static serializeBinaryToWriter(message: ActionCancelQueryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCancelQueryResult;
  static deserializeBinaryFromReader(message: ActionCancelQueryResult, reader: jspb.BinaryReader): ActionCancelQueryResult;
}

export namespace ActionCancelQueryResult {
  export type AsObject = {
    result: ActionCancelQueryResult.CancelResult,
  }

  export enum CancelResult { 
    CANCEL_RESULT_UNSPECIFIED = 0,
    CANCEL_RESULT_CANCELLED = 1,
    CANCEL_RESULT_CANCELLING = 2,
    CANCEL_RESULT_NOT_CANCELLABLE = 3,
  }
}

export enum SqlInfo { 
  FLIGHT_SQL_SERVER_NAME = 0,
  FLIGHT_SQL_SERVER_VERSION = 1,
  FLIGHT_SQL_SERVER_ARROW_VERSION = 2,
  FLIGHT_SQL_SERVER_READ_ONLY = 3,
  FLIGHT_SQL_SERVER_SQL = 4,
  FLIGHT_SQL_SERVER_SUBSTRAIT = 5,
  FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION = 6,
  FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION = 7,
  FLIGHT_SQL_SERVER_TRANSACTION = 8,
  FLIGHT_SQL_SERVER_CANCEL = 9,
  FLIGHT_SQL_SERVER_BULK_INGESTION = 10,
  FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED = 11,
  FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT = 100,
  FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT = 101,
  SQL_DDL_CATALOG = 500,
  SQL_DDL_SCHEMA = 501,
  SQL_DDL_TABLE = 502,
  SQL_IDENTIFIER_CASE = 503,
  SQL_IDENTIFIER_QUOTE_CHAR = 504,
  SQL_QUOTED_IDENTIFIER_CASE = 505,
  SQL_ALL_TABLES_ARE_SELECTABLE = 506,
  SQL_NULL_ORDERING = 507,
  SQL_KEYWORDS = 508,
  SQL_NUMERIC_FUNCTIONS = 509,
  SQL_STRING_FUNCTIONS = 510,
  SQL_SYSTEM_FUNCTIONS = 511,
  SQL_DATETIME_FUNCTIONS = 512,
  SQL_SEARCH_STRING_ESCAPE = 513,
  SQL_EXTRA_NAME_CHARACTERS = 514,
  SQL_SUPPORTS_COLUMN_ALIASING = 515,
  SQL_NULL_PLUS_NULL_IS_NULL = 516,
  SQL_SUPPORTS_CONVERT = 517,
  SQL_SUPPORTS_TABLE_CORRELATION_NAMES = 518,
  SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES = 519,
  SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY = 520,
  SQL_SUPPORTS_ORDER_BY_UNRELATED = 521,
  SQL_SUPPORTED_GROUP_BY = 522,
  SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE = 523,
  SQL_SUPPORTS_NON_NULLABLE_COLUMNS = 524,
  SQL_SUPPORTED_GRAMMAR = 525,
  SQL_ANSI92_SUPPORTED_LEVEL = 526,
  SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY = 527,
  SQL_OUTER_JOINS_SUPPORT_LEVEL = 528,
  SQL_SCHEMA_TERM = 529,
  SQL_PROCEDURE_TERM = 530,
  SQL_CATALOG_TERM = 531,
  SQL_CATALOG_AT_START = 532,
  SQL_SCHEMAS_SUPPORTED_ACTIONS = 533,
  SQL_CATALOGS_SUPPORTED_ACTIONS = 534,
  SQL_SUPPORTED_POSITIONED_COMMANDS = 535,
  SQL_SELECT_FOR_UPDATE_SUPPORTED = 536,
  SQL_STORED_PROCEDURES_SUPPORTED = 537,
  SQL_SUPPORTED_SUBQUERIES = 538,
  SQL_CORRELATED_SUBQUERIES_SUPPORTED = 539,
  SQL_SUPPORTED_UNIONS = 540,
  SQL_MAX_BINARY_LITERAL_LENGTH = 541,
  SQL_MAX_CHAR_LITERAL_LENGTH = 542,
  SQL_MAX_COLUMN_NAME_LENGTH = 543,
  SQL_MAX_COLUMNS_IN_GROUP_BY = 544,
  SQL_MAX_COLUMNS_IN_INDEX = 545,
  SQL_MAX_COLUMNS_IN_ORDER_BY = 546,
  SQL_MAX_COLUMNS_IN_SELECT = 547,
  SQL_MAX_COLUMNS_IN_TABLE = 548,
  SQL_MAX_CONNECTIONS = 549,
  SQL_MAX_CURSOR_NAME_LENGTH = 550,
  SQL_MAX_INDEX_LENGTH = 551,
  SQL_DB_SCHEMA_NAME_LENGTH = 552,
  SQL_MAX_PROCEDURE_NAME_LENGTH = 553,
  SQL_MAX_CATALOG_NAME_LENGTH = 554,
  SQL_MAX_ROW_SIZE = 555,
  SQL_MAX_ROW_SIZE_INCLUDES_BLOBS = 556,
  SQL_MAX_STATEMENT_LENGTH = 557,
  SQL_MAX_STATEMENTS = 558,
  SQL_MAX_TABLE_NAME_LENGTH = 559,
  SQL_MAX_TABLES_IN_SELECT = 560,
  SQL_MAX_USERNAME_LENGTH = 561,
  SQL_DEFAULT_TRANSACTION_ISOLATION = 562,
  SQL_TRANSACTIONS_SUPPORTED = 563,
  SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS = 564,
  SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT = 565,
  SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED = 566,
  SQL_SUPPORTED_RESULT_SET_TYPES = 567,
  SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED = 568,
  SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY = 569,
  SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE = 570,
  SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE = 571,
  SQL_BATCH_UPDATES_SUPPORTED = 572,
  SQL_SAVEPOINTS_SUPPORTED = 573,
  SQL_NAMED_PARAMETERS_SUPPORTED = 574,
  SQL_LOCATORS_UPDATE_COPY = 575,
  SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED = 576,
}
export enum SqlSupportedTransaction { 
  SQL_SUPPORTED_TRANSACTION_NONE = 0,
  SQL_SUPPORTED_TRANSACTION_TRANSACTION = 1,
  SQL_SUPPORTED_TRANSACTION_SAVEPOINT = 2,
}
export enum SqlSupportedCaseSensitivity { 
  SQL_CASE_SENSITIVITY_UNKNOWN = 0,
  SQL_CASE_SENSITIVITY_CASE_INSENSITIVE = 1,
  SQL_CASE_SENSITIVITY_UPPERCASE = 2,
  SQL_CASE_SENSITIVITY_LOWERCASE = 3,
}
export enum SqlNullOrdering { 
  SQL_NULLS_SORTED_HIGH = 0,
  SQL_NULLS_SORTED_LOW = 1,
  SQL_NULLS_SORTED_AT_START = 2,
  SQL_NULLS_SORTED_AT_END = 3,
}
export enum SupportedSqlGrammar { 
  SQL_MINIMUM_GRAMMAR = 0,
  SQL_CORE_GRAMMAR = 1,
  SQL_EXTENDED_GRAMMAR = 2,
}
export enum SupportedAnsi92SqlGrammarLevel { 
  ANSI92_ENTRY_SQL = 0,
  ANSI92_INTERMEDIATE_SQL = 1,
  ANSI92_FULL_SQL = 2,
}
export enum SqlOuterJoinsSupportLevel { 
  SQL_JOINS_UNSUPPORTED = 0,
  SQL_LIMITED_OUTER_JOINS = 1,
  SQL_FULL_OUTER_JOINS = 2,
}
export enum SqlSupportedGroupBy { 
  SQL_GROUP_BY_UNRELATED = 0,
  SQL_GROUP_BY_BEYOND_SELECT = 1,
}
export enum SqlSupportedElementActions { 
  SQL_ELEMENT_IN_PROCEDURE_CALLS = 0,
  SQL_ELEMENT_IN_INDEX_DEFINITIONS = 1,
  SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS = 2,
}
export enum SqlSupportedPositionedCommands { 
  SQL_POSITIONED_DELETE = 0,
  SQL_POSITIONED_UPDATE = 1,
}
export enum SqlSupportedSubqueries { 
  SQL_SUBQUERIES_IN_COMPARISONS = 0,
  SQL_SUBQUERIES_IN_EXISTS = 1,
  SQL_SUBQUERIES_IN_INS = 2,
  SQL_SUBQUERIES_IN_QUANTIFIEDS = 3,
}
export enum SqlSupportedUnions { 
  SQL_UNION = 0,
  SQL_UNION_ALL = 1,
}
export enum SqlTransactionIsolationLevel { 
  SQL_TRANSACTION_NONE = 0,
  SQL_TRANSACTION_READ_UNCOMMITTED = 1,
  SQL_TRANSACTION_READ_COMMITTED = 2,
  SQL_TRANSACTION_REPEATABLE_READ = 3,
  SQL_TRANSACTION_SERIALIZABLE = 4,
}
export enum SqlSupportedTransactions { 
  SQL_TRANSACTION_UNSPECIFIED = 0,
  SQL_DATA_DEFINITION_TRANSACTIONS = 1,
  SQL_DATA_MANIPULATION_TRANSACTIONS = 2,
}
export enum SqlSupportedResultSetType { 
  SQL_RESULT_SET_TYPE_UNSPECIFIED = 0,
  SQL_RESULT_SET_TYPE_FORWARD_ONLY = 1,
  SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE = 2,
  SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE = 3,
}
export enum SqlSupportedResultSetConcurrency { 
  SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED = 0,
  SQL_RESULT_SET_CONCURRENCY_READ_ONLY = 1,
  SQL_RESULT_SET_CONCURRENCY_UPDATABLE = 2,
}
export enum SqlSupportsConvert { 
  SQL_CONVERT_BIGINT = 0,
  SQL_CONVERT_BINARY = 1,
  SQL_CONVERT_BIT = 2,
  SQL_CONVERT_CHAR = 3,
  SQL_CONVERT_DATE = 4,
  SQL_CONVERT_DECIMAL = 5,
  SQL_CONVERT_FLOAT = 6,
  SQL_CONVERT_INTEGER = 7,
  SQL_CONVERT_INTERVAL_DAY_TIME = 8,
  SQL_CONVERT_INTERVAL_YEAR_MONTH = 9,
  SQL_CONVERT_LONGVARBINARY = 10,
  SQL_CONVERT_LONGVARCHAR = 11,
  SQL_CONVERT_NUMERIC = 12,
  SQL_CONVERT_REAL = 13,
  SQL_CONVERT_SMALLINT = 14,
  SQL_CONVERT_TIME = 15,
  SQL_CONVERT_TIMESTAMP = 16,
  SQL_CONVERT_TINYINT = 17,
  SQL_CONVERT_VARBINARY = 18,
  SQL_CONVERT_VARCHAR = 19,
}
export enum XdbcDataType { 
  XDBC_UNKNOWN_TYPE = 0,
  XDBC_CHAR = 1,
  XDBC_NUMERIC = 2,
  XDBC_DECIMAL = 3,
  XDBC_INTEGER = 4,
  XDBC_SMALLINT = 5,
  XDBC_FLOAT = 6,
  XDBC_REAL = 7,
  XDBC_DOUBLE = 8,
  XDBC_DATETIME = 9,
  XDBC_INTERVAL = 10,
  XDBC_VARCHAR = 12,
  XDBC_DATE = 91,
  XDBC_TIME = 92,
  XDBC_TIMESTAMP = 93,
  XDBC_LONGVARCHAR = -1,
  XDBC_BINARY = -2,
  XDBC_VARBINARY = -3,
  XDBC_LONGVARBINARY = -4,
  XDBC_BIGINT = -5,
  XDBC_TINYINT = -6,
  XDBC_BIT = -7,
  XDBC_WCHAR = -8,
  XDBC_WVARCHAR = -9,
}
export enum XdbcDatetimeSubcode { 
  XDBC_SUBCODE_UNKNOWN = 0,
  XDBC_SUBCODE_YEAR = 1,
  XDBC_SUBCODE_DATE = 1,
  XDBC_SUBCODE_TIME = 2,
  XDBC_SUBCODE_MONTH = 2,
  XDBC_SUBCODE_TIMESTAMP = 3,
  XDBC_SUBCODE_DAY = 3,
  XDBC_SUBCODE_TIME_WITH_TIMEZONE = 4,
  XDBC_SUBCODE_HOUR = 4,
  XDBC_SUBCODE_TIMESTAMP_WITH_TIMEZONE = 5,
  XDBC_SUBCODE_MINUTE = 5,
  XDBC_SUBCODE_SECOND = 6,
  XDBC_SUBCODE_YEAR_TO_MONTH = 7,
  XDBC_SUBCODE_DAY_TO_HOUR = 8,
  XDBC_SUBCODE_DAY_TO_MINUTE = 9,
  XDBC_SUBCODE_DAY_TO_SECOND = 10,
  XDBC_SUBCODE_HOUR_TO_MINUTE = 11,
  XDBC_SUBCODE_HOUR_TO_SECOND = 12,
  XDBC_SUBCODE_MINUTE_TO_SECOND = 13,
  XDBC_SUBCODE_INTERVAL_YEAR = 101,
  XDBC_SUBCODE_INTERVAL_MONTH = 102,
  XDBC_SUBCODE_INTERVAL_DAY = 103,
  XDBC_SUBCODE_INTERVAL_HOUR = 104,
  XDBC_SUBCODE_INTERVAL_MINUTE = 105,
  XDBC_SUBCODE_INTERVAL_SECOND = 106,
  XDBC_SUBCODE_INTERVAL_YEAR_TO_MONTH = 107,
  XDBC_SUBCODE_INTERVAL_DAY_TO_HOUR = 108,
  XDBC_SUBCODE_INTERVAL_DAY_TO_MINUTE = 109,
  XDBC_SUBCODE_INTERVAL_DAY_TO_SECOND = 110,
  XDBC_SUBCODE_INTERVAL_HOUR_TO_MINUTE = 111,
  XDBC_SUBCODE_INTERVAL_HOUR_TO_SECOND = 112,
  XDBC_SUBCODE_INTERVAL_MINUTE_TO_SECOND = 113,
}
export enum Nullable { 
  NULLABILITY_NO_NULLS = 0,
  NULLABILITY_NULLABLE = 1,
  NULLABILITY_UNKNOWN = 2,
}
export enum Searchable { 
  SEARCHABLE_NONE = 0,
  SEARCHABLE_CHAR = 1,
  SEARCHABLE_BASIC = 2,
  SEARCHABLE_FULL = 3,
}
export enum UpdateDeleteRules { 
  CASCADE = 0,
  RESTRICT = 1,
  SET_NULL = 2,
  NO_ACTION = 3,
  SET_DEFAULT = 4,
}
