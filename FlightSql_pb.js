// source: arrow-flight/FlightSql.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionBeginSavepointResult', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionBeginTransactionResult', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionCancelQueryRequest', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionCancelQueryResult', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionEndSavepointRequest', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionEndTransactionRequest', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetCatalogs', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetCrossReference', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetDbSchemas', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetExportedKeys', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetImportedKeys', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetSqlInfo', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetTableTypes', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetTables', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandStatementIngest', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandStatementQuery', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.CommandStatementUpdate', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.DoPutUpdateResult', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.Nullable', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.Searchable', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlInfo', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlNullOrdering', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlOuterJoinsSupportLevel', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedCaseSensitivity', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedElementActions', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedGroupBy', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedPositionedCommands', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedResultSetConcurrency', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedResultSetType', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedSubqueries', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedTransaction', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedTransactions', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportedUnions', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlSupportsConvert', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SqlTransactionIsolationLevel', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SubstraitPlan', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SupportedAnsi92SqlGrammarLevel', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.SupportedSqlGrammar', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.TicketStatementQuery', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.UpdateDeleteRules', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.XdbcDataType', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.XdbcDatetimeSubcode', null, global);
goog.exportSymbol('proto.arrow.flight.protocol.sql.experimental', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.arrow.flight.protocol.sql.CommandGetSqlInfo.repeatedFields_, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetSqlInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetSqlInfo.displayName = 'proto.arrow.flight.protocol.sql.CommandGetSqlInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.displayName = 'proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetCatalogs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetCatalogs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetCatalogs.displayName = 'proto.arrow.flight.protocol.sql.CommandGetCatalogs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetDbSchemas, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetDbSchemas.displayName = 'proto.arrow.flight.protocol.sql.CommandGetDbSchemas';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetTables = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.arrow.flight.protocol.sql.CommandGetTables.repeatedFields_, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetTables, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetTables.displayName = 'proto.arrow.flight.protocol.sql.CommandGetTables';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetTableTypes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetTableTypes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetTableTypes.displayName = 'proto.arrow.flight.protocol.sql.CommandGetTableTypes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.displayName = 'proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetExportedKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetExportedKeys.displayName = 'proto.arrow.flight.protocol.sql.CommandGetExportedKeys';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetImportedKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetImportedKeys.displayName = 'proto.arrow.flight.protocol.sql.CommandGetImportedKeys';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandGetCrossReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandGetCrossReference.displayName = 'proto.arrow.flight.protocol.sql.CommandGetCrossReference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.displayName = 'proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.SubstraitPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.SubstraitPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.SubstraitPlan.displayName = 'proto.arrow.flight.protocol.sql.SubstraitPlan';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.displayName = 'proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.displayName = 'proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.displayName = 'proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.displayName = 'proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.displayName = 'proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionBeginTransactionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.displayName = 'proto.arrow.flight.protocol.sql.ActionBeginTransactionResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionBeginSavepointResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.displayName = 'proto.arrow.flight.protocol.sql.ActionBeginSavepointResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionEndTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.displayName = 'proto.arrow.flight.protocol.sql.ActionEndTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionEndSavepointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.displayName = 'proto.arrow.flight.protocol.sql.ActionEndSavepointRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandStatementQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandStatementQuery.displayName = 'proto.arrow.flight.protocol.sql.CommandStatementQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.displayName = 'proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.TicketStatementQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.TicketStatementQuery.displayName = 'proto.arrow.flight.protocol.sql.TicketStatementQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.displayName = 'proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandStatementUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandStatementUpdate.displayName = 'proto.arrow.flight.protocol.sql.CommandStatementUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.displayName = 'proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandStatementIngest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandStatementIngest.displayName = 'proto.arrow.flight.protocol.sql.CommandStatementIngest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.displayName = 'proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.DoPutUpdateResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.DoPutUpdateResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.DoPutUpdateResult.displayName = 'proto.arrow.flight.protocol.sql.DoPutUpdateResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.displayName = 'proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionCancelQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.displayName = 'proto.arrow.flight.protocol.sql.ActionCancelQueryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.arrow.flight.protocol.sql.ActionCancelQueryResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.arrow.flight.protocol.sql.ActionCancelQueryResult.displayName = 'proto.arrow.flight.protocol.sql.ActionCancelQueryResult';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetSqlInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetSqlInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    infoList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetSqlInfo}
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetSqlInfo;
  return proto.arrow.flight.protocol.sql.CommandGetSqlInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetSqlInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetSqlInfo}
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInfo(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetSqlInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetSqlInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfoList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
};


/**
 * repeated uint32 info = 1;
 * @return {!Array<number>}
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.prototype.getInfoList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetSqlInfo} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.prototype.setInfoList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.arrow.flight.protocol.sql.CommandGetSqlInfo} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.prototype.addInfo = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetSqlInfo} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetSqlInfo.prototype.clearInfoList = function() {
  return this.setInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataType: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo}
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo;
  return proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo}
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDataType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 data_type = 1;
 * @return {number}
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.prototype.getDataType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.prototype.setDataType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.prototype.clearDataType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.prototype.hasDataType = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetCatalogs.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetCatalogs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetCatalogs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetCatalogs.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCatalogs}
 */
proto.arrow.flight.protocol.sql.CommandGetCatalogs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetCatalogs;
  return proto.arrow.flight.protocol.sql.CommandGetCatalogs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetCatalogs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCatalogs}
 */
proto.arrow.flight.protocol.sql.CommandGetCatalogs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetCatalogs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetCatalogs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetCatalogs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetCatalogs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetDbSchemas.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetDbSchemas} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.toObject = function(includeInstance, msg) {
  var f, obj = {
    catalog: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dbSchemaFilterPattern: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetDbSchemas}
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetDbSchemas;
  return proto.arrow.flight.protocol.sql.CommandGetDbSchemas.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetDbSchemas} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetDbSchemas}
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatalog(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDbSchemaFilterPattern(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetDbSchemas.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetDbSchemas} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string catalog = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.getCatalog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetDbSchemas} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetDbSchemas} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string db_schema_filter_pattern = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.getDbSchemaFilterPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetDbSchemas} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.setDbSchemaFilterPattern = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetDbSchemas} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.clearDbSchemaFilterPattern = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetDbSchemas.prototype.hasDbSchemaFilterPattern = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.arrow.flight.protocol.sql.CommandGetTables.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetTables.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetTables} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetTables.toObject = function(includeInstance, msg) {
  var f, obj = {
    catalog: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dbSchemaFilterPattern: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tableNameFilterPattern: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tableTypesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    includeSchema: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetTables;
  return proto.arrow.flight.protocol.sql.CommandGetTables.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetTables} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatalog(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDbSchemaFilterPattern(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableNameFilterPattern(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTableTypes(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetTables.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetTables} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetTables.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTableTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getIncludeSchema();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string catalog = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.getCatalog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string db_schema_filter_pattern = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.getDbSchemaFilterPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.setDbSchemaFilterPattern = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.clearDbSchemaFilterPattern = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.hasDbSchemaFilterPattern = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string table_name_filter_pattern = 3;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.getTableNameFilterPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.setTableNameFilterPattern = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.clearTableNameFilterPattern = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.hasTableNameFilterPattern = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string table_types = 4;
 * @return {!Array<string>}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.getTableTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.setTableTypesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.addTableTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.clearTableTypesList = function() {
  return this.setTableTypesList([]);
};


/**
 * optional bool include_schema = 5;
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.getIncludeSchema = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTables} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetTables.prototype.setIncludeSchema = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetTableTypes.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetTableTypes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetTableTypes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetTableTypes.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTableTypes}
 */
proto.arrow.flight.protocol.sql.CommandGetTableTypes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetTableTypes;
  return proto.arrow.flight.protocol.sql.CommandGetTableTypes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetTableTypes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetTableTypes}
 */
proto.arrow.flight.protocol.sql.CommandGetTableTypes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetTableTypes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetTableTypes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetTableTypes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetTableTypes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    catalog: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dbSchema: jspb.Message.getFieldWithDefault(msg, 2, ""),
    table: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys}
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys;
  return proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys}
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatalog(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDbSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string catalog = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.getCatalog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string db_schema = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.getDbSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.setDbSchema = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.clearDbSchema = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.hasDbSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetPrimaryKeys.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetExportedKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    catalog: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dbSchema: jspb.Message.getFieldWithDefault(msg, 2, ""),
    table: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys}
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetExportedKeys;
  return proto.arrow.flight.protocol.sql.CommandGetExportedKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys}
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatalog(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDbSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetExportedKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string catalog = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.getCatalog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string db_schema = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.getDbSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.setDbSchema = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.clearDbSchema = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.hasDbSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetExportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetExportedKeys.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetImportedKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    catalog: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dbSchema: jspb.Message.getFieldWithDefault(msg, 2, ""),
    table: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys}
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetImportedKeys;
  return proto.arrow.flight.protocol.sql.CommandGetImportedKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys}
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatalog(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDbSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetImportedKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string catalog = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.getCatalog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string db_schema = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.getDbSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.setDbSchema = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.clearDbSchema = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.hasDbSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetImportedKeys} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetImportedKeys.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandGetCrossReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    pkCatalog: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pkDbSchema: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pkTable: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fkCatalog: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fkDbSchema: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fkTable: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandGetCrossReference;
  return proto.arrow.flight.protocol.sql.CommandGetCrossReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPkCatalog(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPkDbSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPkTable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFkCatalog(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFkDbSchema(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFkTable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandGetCrossReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPkTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFkTable();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string pk_catalog = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.getPkCatalog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.setPkCatalog = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.clearPkCatalog = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.hasPkCatalog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pk_db_schema = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.getPkDbSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.setPkDbSchema = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.clearPkDbSchema = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.hasPkDbSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string pk_table = 3;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.getPkTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.setPkTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fk_catalog = 4;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.getFkCatalog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.setFkCatalog = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.clearFkCatalog = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.hasFkCatalog = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string fk_db_schema = 5;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.getFkDbSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.setFkDbSchema = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.clearFkDbSchema = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.hasFkDbSchema = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string fk_table = 6;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.getFkTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandGetCrossReference} returns this
 */
proto.arrow.flight.protocol.sql.CommandGetCrossReference.prototype.setFkTable = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: msg.getTransactionId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest;
  return proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes transaction_id = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes transaction_id = 2;
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.getTransactionId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionId()));
};


/**
 * optional bytes transaction_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.getTransactionId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.clearTransactionId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.SubstraitPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.SubstraitPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: msg.getPlan_asB64(),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.SubstraitPlan}
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.SubstraitPlan;
  return proto.arrow.flight.protocol.sql.SubstraitPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.SubstraitPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.SubstraitPlan}
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPlan(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.SubstraitPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.SubstraitPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes plan = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.prototype.getPlan = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes plan = 1;
 * This is a type-conversion wrapper around `getPlan()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.prototype.getPlan_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPlan()));
};


/**
 * optional bytes plan = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPlan()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.prototype.getPlan_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPlan()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.SubstraitPlan} returns this
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.prototype.setPlan = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.SubstraitPlan} returns this
 */
proto.arrow.flight.protocol.sql.SubstraitPlan.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && proto.arrow.flight.protocol.sql.SubstraitPlan.toObject(includeInstance, f),
    transactionId: msg.getTransactionId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest;
  return proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.arrow.flight.protocol.sql.SubstraitPlan;
      reader.readMessage(value,proto.arrow.flight.protocol.sql.SubstraitPlan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.arrow.flight.protocol.sql.SubstraitPlan.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional SubstraitPlan plan = 1;
 * @return {?proto.arrow.flight.protocol.sql.SubstraitPlan}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.getPlan = function() {
  return /** @type{?proto.arrow.flight.protocol.sql.SubstraitPlan} */ (
    jspb.Message.getWrapperField(this, proto.arrow.flight.protocol.sql.SubstraitPlan, 1));
};


/**
 * @param {?proto.arrow.flight.protocol.sql.SubstraitPlan|undefined} value
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} returns this
*/
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes transaction_id = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes transaction_id = 2;
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.getTransactionId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionId()));
};


/**
 * optional bytes transaction_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.getTransactionId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.clearTransactionId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    preparedStatementHandle: msg.getPreparedStatementHandle_asB64(),
    datasetSchema: msg.getDatasetSchema_asB64(),
    parameterSchema: msg.getParameterSchema_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult;
  return proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPreparedStatementHandle(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDatasetSchema(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setParameterSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreparedStatementHandle_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDatasetSchema_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getParameterSchema_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes prepared_statement_handle = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.getPreparedStatementHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.getPreparedStatementHandle_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPreparedStatementHandle()));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.getPreparedStatementHandle_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPreparedStatementHandle()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} returns this
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.setPreparedStatementHandle = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes dataset_schema = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.getDatasetSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes dataset_schema = 2;
 * This is a type-conversion wrapper around `getDatasetSchema()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.getDatasetSchema_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDatasetSchema()));
};


/**
 * optional bytes dataset_schema = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDatasetSchema()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.getDatasetSchema_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDatasetSchema()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} returns this
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.setDatasetSchema = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes parameter_schema = 3;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.getParameterSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes parameter_schema = 3;
 * This is a type-conversion wrapper around `getParameterSchema()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.getParameterSchema_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getParameterSchema()));
};


/**
 * optional bytes parameter_schema = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getParameterSchema()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.getParameterSchema_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getParameterSchema()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} returns this
 */
proto.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.prototype.setParameterSchema = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    preparedStatementHandle: msg.getPreparedStatementHandle_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest}
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest;
  return proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest}
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPreparedStatementHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreparedStatementHandle_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes prepared_statement_handle = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.prototype.getPreparedStatementHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.prototype.getPreparedStatementHandle_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPreparedStatementHandle()));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.prototype.getPreparedStatementHandle_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPreparedStatementHandle()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.prototype.setPreparedStatementHandle = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest;
  return proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: msg.getTransactionId_asB64(),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest;
  return proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes transaction_id = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes transaction_id = 1;
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.prototype.getTransactionId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionId()));
};


/**
 * optional bytes transaction_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.prototype.getTransactionId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginTransactionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: msg.getTransactionId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginTransactionResult}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionBeginTransactionResult;
  return proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginTransactionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginTransactionResult}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginTransactionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes transaction_id = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes transaction_id = 1;
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.prototype.getTransactionId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionId()));
};


/**
 * optional bytes transaction_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.prototype.getTransactionId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginTransactionResult} returns this
 */
proto.arrow.flight.protocol.sql.ActionBeginTransactionResult.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginSavepointResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    savepointId: msg.getSavepointId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginSavepointResult}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionBeginSavepointResult;
  return proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginSavepointResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginSavepointResult}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSavepointId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionBeginSavepointResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSavepointId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes savepoint_id = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.prototype.getSavepointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes savepoint_id = 1;
 * This is a type-conversion wrapper around `getSavepointId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.prototype.getSavepointId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSavepointId()));
};


/**
 * optional bytes savepoint_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSavepointId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.prototype.getSavepointId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSavepointId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionBeginSavepointResult} returns this
 */
proto.arrow.flight.protocol.sql.ActionBeginSavepointResult.prototype.setSavepointId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: msg.getTransactionId_asB64(),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest}
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionEndTransactionRequest;
  return proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest}
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionId(value);
      break;
    case 2:
      var value = /** @type {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction = {
  END_TRANSACTION_UNSPECIFIED: 0,
  END_TRANSACTION_COMMIT: 1,
  END_TRANSACTION_ROLLBACK: 2
};

/**
 * optional bytes transaction_id = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes transaction_id = 1;
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.prototype.getTransactionId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionId()));
};


/**
 * optional bytes transaction_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.prototype.getTransactionId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional EndTransaction action = 2;
 * @return {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction}
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.prototype.getAction = function() {
  return /** @type {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction} value
 * @return {!proto.arrow.flight.protocol.sql.ActionEndTransactionRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionEndTransactionRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    savepointId: msg.getSavepointId_asB64(),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest}
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionEndSavepointRequest;
  return proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest}
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSavepointId(value);
      break;
    case 2:
      var value = /** @type {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint} */ (reader.readEnum());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSavepointId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint = {
  END_SAVEPOINT_UNSPECIFIED: 0,
  END_SAVEPOINT_RELEASE: 1,
  END_SAVEPOINT_ROLLBACK: 2
};

/**
 * optional bytes savepoint_id = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.prototype.getSavepointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes savepoint_id = 1;
 * This is a type-conversion wrapper around `getSavepointId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.prototype.getSavepointId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSavepointId()));
};


/**
 * optional bytes savepoint_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSavepointId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.prototype.getSavepointId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSavepointId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.prototype.setSavepointId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional EndSavepoint action = 2;
 * @return {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint}
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.prototype.getAction = function() {
  return /** @type {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint} value
 * @return {!proto.arrow.flight.protocol.sql.ActionEndSavepointRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionEndSavepointRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandStatementQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: msg.getTransactionId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementQuery}
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandStatementQuery;
  return proto.arrow.flight.protocol.sql.CommandStatementQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementQuery}
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandStatementQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementQuery} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes transaction_id = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes transaction_id = 2;
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.getTransactionId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionId()));
};


/**
 * optional bytes transaction_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.getTransactionId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementQuery} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.setTransactionId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementQuery} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.clearTransactionId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandStatementQuery.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && proto.arrow.flight.protocol.sql.SubstraitPlan.toObject(includeInstance, f),
    transactionId: msg.getTransactionId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan;
  return proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.arrow.flight.protocol.sql.SubstraitPlan;
      reader.readMessage(value,proto.arrow.flight.protocol.sql.SubstraitPlan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.arrow.flight.protocol.sql.SubstraitPlan.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional SubstraitPlan plan = 1;
 * @return {?proto.arrow.flight.protocol.sql.SubstraitPlan}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.getPlan = function() {
  return /** @type{?proto.arrow.flight.protocol.sql.SubstraitPlan} */ (
    jspb.Message.getWrapperField(this, proto.arrow.flight.protocol.sql.SubstraitPlan, 1));
};


/**
 * @param {?proto.arrow.flight.protocol.sql.SubstraitPlan|undefined} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan} returns this
*/
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes transaction_id = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes transaction_id = 2;
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.getTransactionId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionId()));
};


/**
 * optional bytes transaction_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.getTransactionId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.setTransactionId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.clearTransactionId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandStatementSubstraitPlan.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.TicketStatementQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.TicketStatementQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    statementHandle: msg.getStatementHandle_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.TicketStatementQuery}
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.TicketStatementQuery;
  return proto.arrow.flight.protocol.sql.TicketStatementQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.TicketStatementQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.TicketStatementQuery}
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStatementHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.TicketStatementQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.TicketStatementQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatementHandle_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes statement_handle = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.prototype.getStatementHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes statement_handle = 1;
 * This is a type-conversion wrapper around `getStatementHandle()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.prototype.getStatementHandle_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStatementHandle()));
};


/**
 * optional bytes statement_handle = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStatementHandle()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.prototype.getStatementHandle_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStatementHandle()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.TicketStatementQuery} returns this
 */
proto.arrow.flight.protocol.sql.TicketStatementQuery.prototype.setStatementHandle = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    preparedStatementHandle: msg.getPreparedStatementHandle_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery;
  return proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPreparedStatementHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreparedStatementHandle_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes prepared_statement_handle = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.prototype.getPreparedStatementHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.prototype.getPreparedStatementHandle_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPreparedStatementHandle()));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.prototype.getPreparedStatementHandle_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPreparedStatementHandle()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery} returns this
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementQuery.prototype.setPreparedStatementHandle = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandStatementUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: msg.getTransactionId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementUpdate}
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandStatementUpdate;
  return proto.arrow.flight.protocol.sql.CommandStatementUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementUpdate}
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandStatementUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementUpdate} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes transaction_id = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes transaction_id = 2;
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.getTransactionId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionId()));
};


/**
 * optional bytes transaction_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.getTransactionId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementUpdate} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.setTransactionId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementUpdate} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.clearTransactionId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandStatementUpdate.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    preparedStatementHandle: msg.getPreparedStatementHandle_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate;
  return proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPreparedStatementHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreparedStatementHandle_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes prepared_statement_handle = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.prototype.getPreparedStatementHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.prototype.getPreparedStatementHandle_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPreparedStatementHandle()));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.prototype.getPreparedStatementHandle_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPreparedStatementHandle()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate} returns this
 */
proto.arrow.flight.protocol.sql.CommandPreparedStatementUpdate.prototype.setPreparedStatementHandle = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandStatementIngest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementIngest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableDefinitionOptions: (f = msg.getTableDefinitionOptions()) && proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.toObject(includeInstance, f),
    table: jspb.Message.getFieldWithDefault(msg, 2, ""),
    schema: jspb.Message.getFieldWithDefault(msg, 3, ""),
    catalog: jspb.Message.getFieldWithDefault(msg, 4, ""),
    temporary: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    transactionId: msg.getTransactionId_asB64(),
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandStatementIngest;
  return proto.arrow.flight.protocol.sql.CommandStatementIngest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementIngest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions;
      reader.readMessage(value,proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.deserializeBinaryFromReader);
      msg.setTableDefinitionOptions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatalog(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTemporary(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionId(value);
      break;
    case 1000:
      var value = msg.getOptionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandStatementIngest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementIngest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableDefinitionOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.serializeBinaryToWriter
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTemporary();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1000, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ifNotExist: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ifExists: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions;
  return proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption} */ (reader.readEnum());
      msg.setIfNotExist(value);
      break;
    case 2:
      var value = /** @type {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption} */ (reader.readEnum());
      msg.setIfExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIfNotExist();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIfExists();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption = {
  TABLE_NOT_EXIST_OPTION_UNSPECIFIED: 0,
  TABLE_NOT_EXIST_OPTION_CREATE: 1,
  TABLE_NOT_EXIST_OPTION_FAIL: 2
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption = {
  TABLE_EXISTS_OPTION_UNSPECIFIED: 0,
  TABLE_EXISTS_OPTION_FAIL: 1,
  TABLE_EXISTS_OPTION_APPEND: 2,
  TABLE_EXISTS_OPTION_REPLACE: 3
};

/**
 * optional TableNotExistOption if_not_exist = 1;
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.prototype.getIfNotExist = function() {
  return /** @type {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.prototype.setIfNotExist = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TableExistsOption if_exists = 2;
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.prototype.getIfExists = function() {
  return /** @type {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.prototype.setIfExists = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional TableDefinitionOptions table_definition_options = 1;
 * @return {?proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.getTableDefinitionOptions = function() {
  return /** @type{?proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} */ (
    jspb.Message.getWrapperField(this, proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions, 1));
};


/**
 * @param {?proto.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions|undefined} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
*/
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.setTableDefinitionOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.clearTableDefinitionOptions = function() {
  return this.setTableDefinitionOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.hasTableDefinitionOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table = 2;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string schema = 3;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.setSchema = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.clearSchema = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string catalog = 4;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.getCatalog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool temporary = 5;
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.getTemporary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.setTemporary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bytes transaction_id = 6;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes transaction_id = 6;
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.getTransactionId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionId()));
};


/**
 * optional bytes transaction_id = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionId()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.getTransactionId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.setTransactionId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.clearTransactionId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, string> options = 1000;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1000, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.arrow.flight.protocol.sql.CommandStatementIngest} returns this
 */
proto.arrow.flight.protocol.sql.CommandStatementIngest.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.DoPutUpdateResult.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.DoPutUpdateResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.DoPutUpdateResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.DoPutUpdateResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.DoPutUpdateResult}
 */
proto.arrow.flight.protocol.sql.DoPutUpdateResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.DoPutUpdateResult;
  return proto.arrow.flight.protocol.sql.DoPutUpdateResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.DoPutUpdateResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.DoPutUpdateResult}
 */
proto.arrow.flight.protocol.sql.DoPutUpdateResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.DoPutUpdateResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.DoPutUpdateResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.DoPutUpdateResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.DoPutUpdateResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.arrow.flight.protocol.sql.DoPutUpdateResult.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.arrow.flight.protocol.sql.DoPutUpdateResult} returns this
 */
proto.arrow.flight.protocol.sql.DoPutUpdateResult.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    preparedStatementHandle: msg.getPreparedStatementHandle_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult}
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult;
  return proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult}
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPreparedStatementHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes prepared_statement_handle = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.prototype.getPreparedStatementHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.prototype.getPreparedStatementHandle_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPreparedStatementHandle()));
};


/**
 * optional bytes prepared_statement_handle = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPreparedStatementHandle()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.prototype.getPreparedStatementHandle_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPreparedStatementHandle()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult} returns this
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.prototype.setPreparedStatementHandle = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult} returns this
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.prototype.clearPreparedStatementHandle = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.arrow.flight.protocol.sql.DoPutPreparedStatementResult.prototype.hasPreparedStatementHandle = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionCancelQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: msg.getInfo_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionCancelQueryRequest}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionCancelQueryRequest;
  return proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionCancelQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionCancelQueryRequest}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionCancelQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes info = 1;
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes info = 1;
 * This is a type-conversion wrapper around `getInfo()`
 * @return {string}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.prototype.getInfo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInfo()));
};


/**
 * optional bytes info = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInfo()`
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.prototype.getInfo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInfo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.arrow.flight.protocol.sql.ActionCancelQueryRequest} returns this
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryRequest.prototype.setInfo = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult.prototype.toObject = function(opt_includeInstance) {
  return proto.arrow.flight.protocol.sql.ActionCancelQueryResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.arrow.flight.protocol.sql.ActionCancelQueryResult;
  return proto.arrow.flight.protocol.sql.ActionCancelQueryResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.arrow.flight.protocol.sql.ActionCancelQueryResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult = {
  CANCEL_RESULT_UNSPECIFIED: 0,
  CANCEL_RESULT_CANCELLED: 1,
  CANCEL_RESULT_CANCELLING: 2,
  CANCEL_RESULT_NOT_CANCELLABLE: 3
};

/**
 * optional CancelResult result = 1;
 * @return {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult}
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult.prototype.getResult = function() {
  return /** @type {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult} value
 * @return {!proto.arrow.flight.protocol.sql.ActionCancelQueryResult} returns this
 */
proto.arrow.flight.protocol.sql.ActionCancelQueryResult.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlInfo = {
  FLIGHT_SQL_SERVER_NAME: 0,
  FLIGHT_SQL_SERVER_VERSION: 1,
  FLIGHT_SQL_SERVER_ARROW_VERSION: 2,
  FLIGHT_SQL_SERVER_READ_ONLY: 3,
  FLIGHT_SQL_SERVER_SQL: 4,
  FLIGHT_SQL_SERVER_SUBSTRAIT: 5,
  FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION: 6,
  FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION: 7,
  FLIGHT_SQL_SERVER_TRANSACTION: 8,
  FLIGHT_SQL_SERVER_CANCEL: 9,
  FLIGHT_SQL_SERVER_BULK_INGESTION: 10,
  FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED: 11,
  FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT: 100,
  FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT: 101,
  SQL_DDL_CATALOG: 500,
  SQL_DDL_SCHEMA: 501,
  SQL_DDL_TABLE: 502,
  SQL_IDENTIFIER_CASE: 503,
  SQL_IDENTIFIER_QUOTE_CHAR: 504,
  SQL_QUOTED_IDENTIFIER_CASE: 505,
  SQL_ALL_TABLES_ARE_SELECTABLE: 506,
  SQL_NULL_ORDERING: 507,
  SQL_KEYWORDS: 508,
  SQL_NUMERIC_FUNCTIONS: 509,
  SQL_STRING_FUNCTIONS: 510,
  SQL_SYSTEM_FUNCTIONS: 511,
  SQL_DATETIME_FUNCTIONS: 512,
  SQL_SEARCH_STRING_ESCAPE: 513,
  SQL_EXTRA_NAME_CHARACTERS: 514,
  SQL_SUPPORTS_COLUMN_ALIASING: 515,
  SQL_NULL_PLUS_NULL_IS_NULL: 516,
  SQL_SUPPORTS_CONVERT: 517,
  SQL_SUPPORTS_TABLE_CORRELATION_NAMES: 518,
  SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES: 519,
  SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY: 520,
  SQL_SUPPORTS_ORDER_BY_UNRELATED: 521,
  SQL_SUPPORTED_GROUP_BY: 522,
  SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE: 523,
  SQL_SUPPORTS_NON_NULLABLE_COLUMNS: 524,
  SQL_SUPPORTED_GRAMMAR: 525,
  SQL_ANSI92_SUPPORTED_LEVEL: 526,
  SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY: 527,
  SQL_OUTER_JOINS_SUPPORT_LEVEL: 528,
  SQL_SCHEMA_TERM: 529,
  SQL_PROCEDURE_TERM: 530,
  SQL_CATALOG_TERM: 531,
  SQL_CATALOG_AT_START: 532,
  SQL_SCHEMAS_SUPPORTED_ACTIONS: 533,
  SQL_CATALOGS_SUPPORTED_ACTIONS: 534,
  SQL_SUPPORTED_POSITIONED_COMMANDS: 535,
  SQL_SELECT_FOR_UPDATE_SUPPORTED: 536,
  SQL_STORED_PROCEDURES_SUPPORTED: 537,
  SQL_SUPPORTED_SUBQUERIES: 538,
  SQL_CORRELATED_SUBQUERIES_SUPPORTED: 539,
  SQL_SUPPORTED_UNIONS: 540,
  SQL_MAX_BINARY_LITERAL_LENGTH: 541,
  SQL_MAX_CHAR_LITERAL_LENGTH: 542,
  SQL_MAX_COLUMN_NAME_LENGTH: 543,
  SQL_MAX_COLUMNS_IN_GROUP_BY: 544,
  SQL_MAX_COLUMNS_IN_INDEX: 545,
  SQL_MAX_COLUMNS_IN_ORDER_BY: 546,
  SQL_MAX_COLUMNS_IN_SELECT: 547,
  SQL_MAX_COLUMNS_IN_TABLE: 548,
  SQL_MAX_CONNECTIONS: 549,
  SQL_MAX_CURSOR_NAME_LENGTH: 550,
  SQL_MAX_INDEX_LENGTH: 551,
  SQL_DB_SCHEMA_NAME_LENGTH: 552,
  SQL_MAX_PROCEDURE_NAME_LENGTH: 553,
  SQL_MAX_CATALOG_NAME_LENGTH: 554,
  SQL_MAX_ROW_SIZE: 555,
  SQL_MAX_ROW_SIZE_INCLUDES_BLOBS: 556,
  SQL_MAX_STATEMENT_LENGTH: 557,
  SQL_MAX_STATEMENTS: 558,
  SQL_MAX_TABLE_NAME_LENGTH: 559,
  SQL_MAX_TABLES_IN_SELECT: 560,
  SQL_MAX_USERNAME_LENGTH: 561,
  SQL_DEFAULT_TRANSACTION_ISOLATION: 562,
  SQL_TRANSACTIONS_SUPPORTED: 563,
  SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS: 564,
  SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT: 565,
  SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED: 566,
  SQL_SUPPORTED_RESULT_SET_TYPES: 567,
  SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED: 568,
  SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY: 569,
  SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE: 570,
  SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE: 571,
  SQL_BATCH_UPDATES_SUPPORTED: 572,
  SQL_SAVEPOINTS_SUPPORTED: 573,
  SQL_NAMED_PARAMETERS_SUPPORTED: 574,
  SQL_LOCATORS_UPDATE_COPY: 575,
  SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED: 576
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedTransaction = {
  SQL_SUPPORTED_TRANSACTION_NONE: 0,
  SQL_SUPPORTED_TRANSACTION_TRANSACTION: 1,
  SQL_SUPPORTED_TRANSACTION_SAVEPOINT: 2
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedCaseSensitivity = {
  SQL_CASE_SENSITIVITY_UNKNOWN: 0,
  SQL_CASE_SENSITIVITY_CASE_INSENSITIVE: 1,
  SQL_CASE_SENSITIVITY_UPPERCASE: 2,
  SQL_CASE_SENSITIVITY_LOWERCASE: 3
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlNullOrdering = {
  SQL_NULLS_SORTED_HIGH: 0,
  SQL_NULLS_SORTED_LOW: 1,
  SQL_NULLS_SORTED_AT_START: 2,
  SQL_NULLS_SORTED_AT_END: 3
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SupportedSqlGrammar = {
  SQL_MINIMUM_GRAMMAR: 0,
  SQL_CORE_GRAMMAR: 1,
  SQL_EXTENDED_GRAMMAR: 2
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SupportedAnsi92SqlGrammarLevel = {
  ANSI92_ENTRY_SQL: 0,
  ANSI92_INTERMEDIATE_SQL: 1,
  ANSI92_FULL_SQL: 2
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlOuterJoinsSupportLevel = {
  SQL_JOINS_UNSUPPORTED: 0,
  SQL_LIMITED_OUTER_JOINS: 1,
  SQL_FULL_OUTER_JOINS: 2
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedGroupBy = {
  SQL_GROUP_BY_UNRELATED: 0,
  SQL_GROUP_BY_BEYOND_SELECT: 1
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedElementActions = {
  SQL_ELEMENT_IN_PROCEDURE_CALLS: 0,
  SQL_ELEMENT_IN_INDEX_DEFINITIONS: 1,
  SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS: 2
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedPositionedCommands = {
  SQL_POSITIONED_DELETE: 0,
  SQL_POSITIONED_UPDATE: 1
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedSubqueries = {
  SQL_SUBQUERIES_IN_COMPARISONS: 0,
  SQL_SUBQUERIES_IN_EXISTS: 1,
  SQL_SUBQUERIES_IN_INS: 2,
  SQL_SUBQUERIES_IN_QUANTIFIEDS: 3
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedUnions = {
  SQL_UNION: 0,
  SQL_UNION_ALL: 1
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlTransactionIsolationLevel = {
  SQL_TRANSACTION_NONE: 0,
  SQL_TRANSACTION_READ_UNCOMMITTED: 1,
  SQL_TRANSACTION_READ_COMMITTED: 2,
  SQL_TRANSACTION_REPEATABLE_READ: 3,
  SQL_TRANSACTION_SERIALIZABLE: 4
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedTransactions = {
  SQL_TRANSACTION_UNSPECIFIED: 0,
  SQL_DATA_DEFINITION_TRANSACTIONS: 1,
  SQL_DATA_MANIPULATION_TRANSACTIONS: 2
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedResultSetType = {
  SQL_RESULT_SET_TYPE_UNSPECIFIED: 0,
  SQL_RESULT_SET_TYPE_FORWARD_ONLY: 1,
  SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE: 2,
  SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE: 3
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportedResultSetConcurrency = {
  SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED: 0,
  SQL_RESULT_SET_CONCURRENCY_READ_ONLY: 1,
  SQL_RESULT_SET_CONCURRENCY_UPDATABLE: 2
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.SqlSupportsConvert = {
  SQL_CONVERT_BIGINT: 0,
  SQL_CONVERT_BINARY: 1,
  SQL_CONVERT_BIT: 2,
  SQL_CONVERT_CHAR: 3,
  SQL_CONVERT_DATE: 4,
  SQL_CONVERT_DECIMAL: 5,
  SQL_CONVERT_FLOAT: 6,
  SQL_CONVERT_INTEGER: 7,
  SQL_CONVERT_INTERVAL_DAY_TIME: 8,
  SQL_CONVERT_INTERVAL_YEAR_MONTH: 9,
  SQL_CONVERT_LONGVARBINARY: 10,
  SQL_CONVERT_LONGVARCHAR: 11,
  SQL_CONVERT_NUMERIC: 12,
  SQL_CONVERT_REAL: 13,
  SQL_CONVERT_SMALLINT: 14,
  SQL_CONVERT_TIME: 15,
  SQL_CONVERT_TIMESTAMP: 16,
  SQL_CONVERT_TINYINT: 17,
  SQL_CONVERT_VARBINARY: 18,
  SQL_CONVERT_VARCHAR: 19
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.XdbcDataType = {
  XDBC_UNKNOWN_TYPE: 0,
  XDBC_CHAR: 1,
  XDBC_NUMERIC: 2,
  XDBC_DECIMAL: 3,
  XDBC_INTEGER: 4,
  XDBC_SMALLINT: 5,
  XDBC_FLOAT: 6,
  XDBC_REAL: 7,
  XDBC_DOUBLE: 8,
  XDBC_DATETIME: 9,
  XDBC_INTERVAL: 10,
  XDBC_VARCHAR: 12,
  XDBC_DATE: 91,
  XDBC_TIME: 92,
  XDBC_TIMESTAMP: 93,
  XDBC_LONGVARCHAR: -1,
  XDBC_BINARY: -2,
  XDBC_VARBINARY: -3,
  XDBC_LONGVARBINARY: -4,
  XDBC_BIGINT: -5,
  XDBC_TINYINT: -6,
  XDBC_BIT: -7,
  XDBC_WCHAR: -8,
  XDBC_WVARCHAR: -9
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.XdbcDatetimeSubcode = {
  XDBC_SUBCODE_UNKNOWN: 0,
  XDBC_SUBCODE_YEAR: 1,
  XDBC_SUBCODE_DATE: 1,
  XDBC_SUBCODE_TIME: 2,
  XDBC_SUBCODE_MONTH: 2,
  XDBC_SUBCODE_TIMESTAMP: 3,
  XDBC_SUBCODE_DAY: 3,
  XDBC_SUBCODE_TIME_WITH_TIMEZONE: 4,
  XDBC_SUBCODE_HOUR: 4,
  XDBC_SUBCODE_TIMESTAMP_WITH_TIMEZONE: 5,
  XDBC_SUBCODE_MINUTE: 5,
  XDBC_SUBCODE_SECOND: 6,
  XDBC_SUBCODE_YEAR_TO_MONTH: 7,
  XDBC_SUBCODE_DAY_TO_HOUR: 8,
  XDBC_SUBCODE_DAY_TO_MINUTE: 9,
  XDBC_SUBCODE_DAY_TO_SECOND: 10,
  XDBC_SUBCODE_HOUR_TO_MINUTE: 11,
  XDBC_SUBCODE_HOUR_TO_SECOND: 12,
  XDBC_SUBCODE_MINUTE_TO_SECOND: 13,
  XDBC_SUBCODE_INTERVAL_YEAR: 101,
  XDBC_SUBCODE_INTERVAL_MONTH: 102,
  XDBC_SUBCODE_INTERVAL_DAY: 103,
  XDBC_SUBCODE_INTERVAL_HOUR: 104,
  XDBC_SUBCODE_INTERVAL_MINUTE: 105,
  XDBC_SUBCODE_INTERVAL_SECOND: 106,
  XDBC_SUBCODE_INTERVAL_YEAR_TO_MONTH: 107,
  XDBC_SUBCODE_INTERVAL_DAY_TO_HOUR: 108,
  XDBC_SUBCODE_INTERVAL_DAY_TO_MINUTE: 109,
  XDBC_SUBCODE_INTERVAL_DAY_TO_SECOND: 110,
  XDBC_SUBCODE_INTERVAL_HOUR_TO_MINUTE: 111,
  XDBC_SUBCODE_INTERVAL_HOUR_TO_SECOND: 112,
  XDBC_SUBCODE_INTERVAL_MINUTE_TO_SECOND: 113
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.Nullable = {
  NULLABILITY_NO_NULLS: 0,
  NULLABILITY_NULLABLE: 1,
  NULLABILITY_UNKNOWN: 2
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.Searchable = {
  SEARCHABLE_NONE: 0,
  SEARCHABLE_CHAR: 1,
  SEARCHABLE_BASIC: 2,
  SEARCHABLE_FULL: 3
};

/**
 * @enum {number}
 */
proto.arrow.flight.protocol.sql.UpdateDeleteRules = {
  CASCADE: 0,
  RESTRICT: 1,
  SET_NULL: 2,
  NO_ACTION: 3,
  SET_DEFAULT: 4
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `experimental`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.arrow.flight.protocol.sql.experimental = new jspb.ExtensionFieldInfo(
    1000,
    {experimental: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[1000] = new jspb.ExtensionFieldBinaryInfo(
    proto.arrow.flight.protocol.sql.experimental,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[1000] = proto.arrow.flight.protocol.sql.experimental;

goog.object.extend(exports, proto.arrow.flight.protocol.sql);
