import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "arrow.flight.protocol.sql";
/** Options for CommandGetSqlInfo. */
export declare enum SqlInfo {
    /** FLIGHT_SQL_SERVER_NAME - Retrieves a UTF-8 string with the name of the Flight SQL Server. */
    FLIGHT_SQL_SERVER_NAME = 0,
    /** FLIGHT_SQL_SERVER_VERSION - Retrieves a UTF-8 string with the native version of the Flight SQL Server. */
    FLIGHT_SQL_SERVER_VERSION = 1,
    /** FLIGHT_SQL_SERVER_ARROW_VERSION - Retrieves a UTF-8 string with the Arrow format version of the Flight SQL Server. */
    FLIGHT_SQL_SERVER_ARROW_VERSION = 2,
    /**
     * FLIGHT_SQL_SERVER_READ_ONLY - Retrieves a boolean value indicating whether the Flight SQL Server is read only.
     *
     * Returns:
     * - false: if read-write
     * - true: if read only
     */
    FLIGHT_SQL_SERVER_READ_ONLY = 3,
    /**
     * FLIGHT_SQL_SERVER_SQL - Retrieves a boolean value indicating whether the Flight SQL Server supports executing
     * SQL queries.
     *
     * Note that the absence of this info (as opposed to a false value) does not necessarily
     * mean that SQL is not supported, as this property was not originally defined.
     */
    FLIGHT_SQL_SERVER_SQL = 4,
    /**
     * FLIGHT_SQL_SERVER_SUBSTRAIT - Retrieves a boolean value indicating whether the Flight SQL Server supports executing
     * Substrait plans.
     */
    FLIGHT_SQL_SERVER_SUBSTRAIT = 5,
    /**
     * FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION - Retrieves a string value indicating the minimum supported Substrait version, or null
     * if Substrait is not supported.
     */
    FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION = 6,
    /**
     * FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION - Retrieves a string value indicating the maximum supported Substrait version, or null
     * if Substrait is not supported.
     */
    FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION = 7,
    /**
     * FLIGHT_SQL_SERVER_TRANSACTION - Retrieves an int32 indicating whether the Flight SQL Server supports the
     * BeginTransaction/EndTransaction/BeginSavepoint/EndSavepoint actions.
     *
     * Even if this is not supported, the database may still support explicit "BEGIN
     * TRANSACTION"/"COMMIT" SQL statements (see SQL_TRANSACTIONS_SUPPORTED); this property
     * is only about whether the server implements the Flight SQL API endpoints.
     *
     * The possible values are listed in `SqlSupportedTransaction`.
     */
    FLIGHT_SQL_SERVER_TRANSACTION = 8,
    /**
     * FLIGHT_SQL_SERVER_CANCEL - Retrieves a boolean value indicating whether the Flight SQL Server supports explicit
     * query cancellation (the CancelQuery action).
     */
    FLIGHT_SQL_SERVER_CANCEL = 9,
    /**
     * FLIGHT_SQL_SERVER_BULK_INGESTION - Retrieves a boolean value indicating whether the Flight SQL Server supports executing
     * bulk ingestion.
     */
    FLIGHT_SQL_SERVER_BULK_INGESTION = 10,
    /**
     * FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED - Retrieves a boolean value indicating whether transactions are supported for bulk ingestion. If not, invoking
     * the method commit in the context of a bulk ingestion is a noop, and the isolation level is
     * `arrow.flight.protocol.sql.SqlTransactionIsolationLevel.TRANSACTION_NONE`.
     *
     * Returns:
     * - false: if bulk ingestion transactions are unsupported;
     * - true: if bulk ingestion transactions are supported.
     */
    FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED = 11,
    /**
     * FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT - Retrieves an int32 indicating the timeout (in milliseconds) for prepared statement handles.
     *
     * If 0, there is no timeout.  Servers should reset the timeout when the handle is used in a command.
     */
    FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT = 100,
    /**
     * FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT - Retrieves an int32 indicating the timeout (in milliseconds) for transactions, since transactions are not tied to a connection.
     *
     * If 0, there is no timeout.  Servers should reset the timeout when the handle is used in a command.
     */
    FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT = 101,
    /**
     * SQL_DDL_CATALOG - Retrieves a boolean value indicating whether the Flight SQL Server supports CREATE and DROP of catalogs.
     *
     * Returns:
     * - false: if it doesn't support CREATE and DROP of catalogs.
     * - true: if it supports CREATE and DROP of catalogs.
     */
    SQL_DDL_CATALOG = 500,
    /**
     * SQL_DDL_SCHEMA - Retrieves a boolean value indicating whether the Flight SQL Server supports CREATE and DROP of schemas.
     *
     * Returns:
     * - false: if it doesn't support CREATE and DROP of schemas.
     * - true: if it supports CREATE and DROP of schemas.
     */
    SQL_DDL_SCHEMA = 501,
    /**
     * SQL_DDL_TABLE - Indicates whether the Flight SQL Server supports CREATE and DROP of tables.
     *
     * Returns:
     * - false: if it doesn't support CREATE and DROP of tables.
     * - true: if it supports CREATE and DROP of tables.
     */
    SQL_DDL_TABLE = 502,
    /**
     * SQL_IDENTIFIER_CASE - Retrieves a int32 ordinal representing the case sensitivity of catalog, table, schema and table names.
     *
     * The possible values are listed in `arrow.flight.protocol.sql.SqlSupportedCaseSensitivity`.
     */
    SQL_IDENTIFIER_CASE = 503,
    /** SQL_IDENTIFIER_QUOTE_CHAR - Retrieves a UTF-8 string with the supported character(s) used to surround a delimited identifier. */
    SQL_IDENTIFIER_QUOTE_CHAR = 504,
    /**
     * SQL_QUOTED_IDENTIFIER_CASE - Retrieves a int32 describing the case sensitivity of quoted identifiers.
     *
     * The possible values are listed in `arrow.flight.protocol.sql.SqlSupportedCaseSensitivity`.
     */
    SQL_QUOTED_IDENTIFIER_CASE = 505,
    /**
     * SQL_ALL_TABLES_ARE_SELECTABLE - Retrieves a boolean value indicating whether all tables are selectable.
     *
     * Returns:
     * - false: if not all tables are selectable or if none are;
     * - true: if all tables are selectable.
     */
    SQL_ALL_TABLES_ARE_SELECTABLE = 506,
    /**
     * SQL_NULL_ORDERING - Retrieves the null ordering.
     *
     * Returns a int32 ordinal for the null ordering being used, as described in
     * `arrow.flight.protocol.sql.SqlNullOrdering`.
     */
    SQL_NULL_ORDERING = 507,
    /** SQL_KEYWORDS - Retrieves a UTF-8 string list with values of the supported keywords. */
    SQL_KEYWORDS = 508,
    /** SQL_NUMERIC_FUNCTIONS - Retrieves a UTF-8 string list with values of the supported numeric functions. */
    SQL_NUMERIC_FUNCTIONS = 509,
    /** SQL_STRING_FUNCTIONS - Retrieves a UTF-8 string list with values of the supported string functions. */
    SQL_STRING_FUNCTIONS = 510,
    /** SQL_SYSTEM_FUNCTIONS - Retrieves a UTF-8 string list with values of the supported system functions. */
    SQL_SYSTEM_FUNCTIONS = 511,
    /** SQL_DATETIME_FUNCTIONS - Retrieves a UTF-8 string list with values of the supported datetime functions. */
    SQL_DATETIME_FUNCTIONS = 512,
    /**
     * SQL_SEARCH_STRING_ESCAPE - Retrieves the UTF-8 string that can be used to escape wildcard characters.
     * This is the string that can be used to escape '_' or '%' in the catalog search parameters that are a pattern
     * (and therefore use one of the wildcard characters).
     * The '_' character represents any single character; the '%' character represents any sequence of zero or more
     * characters.
     */
    SQL_SEARCH_STRING_ESCAPE = 513,
    /**
     * SQL_EXTRA_NAME_CHARACTERS - Retrieves a UTF-8 string with all the "extra" characters that can be used in unquoted identifier names
     * (those beyond a-z, A-Z, 0-9 and _).
     */
    SQL_EXTRA_NAME_CHARACTERS = 514,
    /**
     * SQL_SUPPORTS_COLUMN_ALIASING - Retrieves a boolean value indicating whether column aliasing is supported.
     * If so, the SQL AS clause can be used to provide names for computed columns or to provide alias names for columns
     * as required.
     *
     * Returns:
     * - false: if column aliasing is unsupported;
     * - true: if column aliasing is supported.
     */
    SQL_SUPPORTS_COLUMN_ALIASING = 515,
    /**
     * SQL_NULL_PLUS_NULL_IS_NULL - Retrieves a boolean value indicating whether concatenations between null and non-null values being
     * null are supported.
     *
     * - Returns:
     * - false: if concatenations between null and non-null values being null are unsupported;
     * - true: if concatenations between null and non-null values being null are supported.
     */
    SQL_NULL_PLUS_NULL_IS_NULL = 516,
    /**
     * SQL_SUPPORTS_CONVERT - Retrieves a map where the key is the type to convert from and the value is a list with the types to convert to,
     * indicating the supported conversions. Each key and each item on the list value is a value to a predefined type on
     * SqlSupportsConvert enum.
     * The returned map will be:  map<int32, list<int32>>
     */
    SQL_SUPPORTS_CONVERT = 517,
    /**
     * SQL_SUPPORTS_TABLE_CORRELATION_NAMES - Retrieves a boolean value indicating whether, when table correlation names are supported,
     * they are restricted to being different from the names of the tables.
     *
     * Returns:
     * - false: if table correlation names are unsupported;
     * - true: if table correlation names are supported.
     */
    SQL_SUPPORTS_TABLE_CORRELATION_NAMES = 518,
    /**
     * SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES - Retrieves a boolean value indicating whether, when table correlation names are supported,
     * they are restricted to being different from the names of the tables.
     *
     * Returns:
     * - false: if different table correlation names are unsupported;
     * - true: if different table correlation names are supported
     */
    SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES = 519,
    /**
     * SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY - Retrieves a boolean value indicating whether expressions in ORDER BY lists are supported.
     *
     * Returns:
     * - false: if expressions in ORDER BY are unsupported;
     * - true: if expressions in ORDER BY are supported;
     */
    SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY = 520,
    /**
     * SQL_SUPPORTS_ORDER_BY_UNRELATED - Retrieves a boolean value indicating whether using a column that is not in the SELECT statement in a GROUP BY
     * clause is supported.
     *
     * Returns:
     * - false: if using a column that is not in the SELECT statement in a GROUP BY clause is unsupported;
     * - true: if using a column that is not in the SELECT statement in a GROUP BY clause is supported.
     */
    SQL_SUPPORTS_ORDER_BY_UNRELATED = 521,
    /**
     * SQL_SUPPORTED_GROUP_BY - Retrieves the supported GROUP BY commands;
     *
     * Returns an int32 bitmask value representing the supported commands.
     * The returned bitmask should be parsed in order to retrieve the supported commands.
     *
     * For instance:
     * - return 0 (\b0)   => [] (GROUP BY is unsupported);
     * - return 1 (\b1)   => [SQL_GROUP_BY_UNRELATED];
     * - return 2 (\b10)  => [SQL_GROUP_BY_BEYOND_SELECT];
     * - return 3 (\b11)  => [SQL_GROUP_BY_UNRELATED, SQL_GROUP_BY_BEYOND_SELECT].
     * Valid GROUP BY types are described under `arrow.flight.protocol.sql.SqlSupportedGroupBy`.
     */
    SQL_SUPPORTED_GROUP_BY = 522,
    /**
     * SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE - Retrieves a boolean value indicating whether specifying a LIKE escape clause is supported.
     *
     * Returns:
     * - false: if specifying a LIKE escape clause is unsupported;
     * - true: if specifying a LIKE escape clause is supported.
     */
    SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE = 523,
    /**
     * SQL_SUPPORTS_NON_NULLABLE_COLUMNS - Retrieves a boolean value indicating whether columns may be defined as non-nullable.
     *
     * Returns:
     * - false: if columns cannot be defined as non-nullable;
     * - true: if columns may be defined as non-nullable.
     */
    SQL_SUPPORTS_NON_NULLABLE_COLUMNS = 524,
    /**
     * SQL_SUPPORTED_GRAMMAR - Retrieves the supported SQL grammar level as per the ODBC specification.
     *
     * Returns an int32 bitmask value representing the supported SQL grammar level.
     * The returned bitmask should be parsed in order to retrieve the supported grammar levels.
     *
     * For instance:
     * - return 0 (\b0)   => [] (SQL grammar is unsupported);
     * - return 1 (\b1)   => [SQL_MINIMUM_GRAMMAR];
     * - return 2 (\b10)  => [SQL_CORE_GRAMMAR];
     * - return 3 (\b11)  => [SQL_MINIMUM_GRAMMAR, SQL_CORE_GRAMMAR];
     * - return 4 (\b100) => [SQL_EXTENDED_GRAMMAR];
     * - return 5 (\b101) => [SQL_MINIMUM_GRAMMAR, SQL_EXTENDED_GRAMMAR];
     * - return 6 (\b110) => [SQL_CORE_GRAMMAR, SQL_EXTENDED_GRAMMAR];
     * - return 7 (\b111) => [SQL_MINIMUM_GRAMMAR, SQL_CORE_GRAMMAR, SQL_EXTENDED_GRAMMAR].
     * Valid SQL grammar levels are described under `arrow.flight.protocol.sql.SupportedSqlGrammar`.
     */
    SQL_SUPPORTED_GRAMMAR = 525,
    /**
     * SQL_ANSI92_SUPPORTED_LEVEL - Retrieves the supported ANSI92 SQL grammar level.
     *
     * Returns an int32 bitmask value representing the supported ANSI92 SQL grammar level.
     * The returned bitmask should be parsed in order to retrieve the supported commands.
     *
     * For instance:
     * - return 0 (\b0)   => [] (ANSI92 SQL grammar is unsupported);
     * - return 1 (\b1)   => [ANSI92_ENTRY_SQL];
     * - return 2 (\b10)  => [ANSI92_INTERMEDIATE_SQL];
     * - return 3 (\b11)  => [ANSI92_ENTRY_SQL, ANSI92_INTERMEDIATE_SQL];
     * - return 4 (\b100) => [ANSI92_FULL_SQL];
     * - return 5 (\b101) => [ANSI92_ENTRY_SQL, ANSI92_FULL_SQL];
     * - return 6 (\b110) => [ANSI92_INTERMEDIATE_SQL, ANSI92_FULL_SQL];
     * - return 7 (\b111) => [ANSI92_ENTRY_SQL, ANSI92_INTERMEDIATE_SQL, ANSI92_FULL_SQL].
     * Valid ANSI92 SQL grammar levels are described under `arrow.flight.protocol.sql.SupportedAnsi92SqlGrammarLevel`.
     */
    SQL_ANSI92_SUPPORTED_LEVEL = 526,
    /**
     * SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY - Retrieves a boolean value indicating whether the SQL Integrity Enhancement Facility is supported.
     *
     * Returns:
     * - false: if the SQL Integrity Enhancement Facility is supported;
     * - true: if the SQL Integrity Enhancement Facility is supported.
     */
    SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY = 527,
    /**
     * SQL_OUTER_JOINS_SUPPORT_LEVEL - Retrieves the support level for SQL OUTER JOINs.
     *
     * Returns a int32 ordinal for the SQL ordering being used, as described in
     * `arrow.flight.protocol.sql.SqlOuterJoinsSupportLevel`.
     */
    SQL_OUTER_JOINS_SUPPORT_LEVEL = 528,
    /** SQL_SCHEMA_TERM - Retrieves a UTF-8 string with the preferred term for "schema". */
    SQL_SCHEMA_TERM = 529,
    /** SQL_PROCEDURE_TERM - Retrieves a UTF-8 string with the preferred term for "procedure". */
    SQL_PROCEDURE_TERM = 530,
    /**
     * SQL_CATALOG_TERM - Retrieves a UTF-8 string with the preferred term for "catalog".
     * If a empty string is returned its assumed that the server does NOT supports catalogs.
     */
    SQL_CATALOG_TERM = 531,
    /**
     * SQL_CATALOG_AT_START - Retrieves a boolean value indicating whether a catalog appears at the start of a fully qualified table name.
     *
     * - false: if a catalog does not appear at the start of a fully qualified table name;
     * - true: if a catalog appears at the start of a fully qualified table name.
     */
    SQL_CATALOG_AT_START = 532,
    /**
     * SQL_SCHEMAS_SUPPORTED_ACTIONS - Retrieves the supported actions for a SQL schema.
     *
     * Returns an int32 bitmask value representing the supported actions for a SQL schema.
     * The returned bitmask should be parsed in order to retrieve the supported actions for a SQL schema.
     *
     * For instance:
     * - return 0 (\b0)   => [] (no supported actions for SQL schema);
     * - return 1 (\b1)   => [SQL_ELEMENT_IN_PROCEDURE_CALLS];
     * - return 2 (\b10)  => [SQL_ELEMENT_IN_INDEX_DEFINITIONS];
     * - return 3 (\b11)  => [SQL_ELEMENT_IN_PROCEDURE_CALLS, SQL_ELEMENT_IN_INDEX_DEFINITIONS];
     * - return 4 (\b100) => [SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS];
     * - return 5 (\b101) => [SQL_ELEMENT_IN_PROCEDURE_CALLS, SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS];
     * - return 6 (\b110) => [SQL_ELEMENT_IN_INDEX_DEFINITIONS, SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS];
     * - return 7 (\b111) => [SQL_ELEMENT_IN_PROCEDURE_CALLS, SQL_ELEMENT_IN_INDEX_DEFINITIONS, SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS].
     * Valid actions for a SQL schema described under `arrow.flight.protocol.sql.SqlSupportedElementActions`.
     */
    SQL_SCHEMAS_SUPPORTED_ACTIONS = 533,
    /**
     * SQL_CATALOGS_SUPPORTED_ACTIONS - Retrieves the supported actions for a SQL schema.
     *
     * Returns an int32 bitmask value representing the supported actions for a SQL catalog.
     * The returned bitmask should be parsed in order to retrieve the supported actions for a SQL catalog.
     *
     * For instance:
     * - return 0 (\b0)   => [] (no supported actions for SQL catalog);
     * - return 1 (\b1)   => [SQL_ELEMENT_IN_PROCEDURE_CALLS];
     * - return 2 (\b10)  => [SQL_ELEMENT_IN_INDEX_DEFINITIONS];
     * - return 3 (\b11)  => [SQL_ELEMENT_IN_PROCEDURE_CALLS, SQL_ELEMENT_IN_INDEX_DEFINITIONS];
     * - return 4 (\b100) => [SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS];
     * - return 5 (\b101) => [SQL_ELEMENT_IN_PROCEDURE_CALLS, SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS];
     * - return 6 (\b110) => [SQL_ELEMENT_IN_INDEX_DEFINITIONS, SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS];
     * - return 7 (\b111) => [SQL_ELEMENT_IN_PROCEDURE_CALLS, SQL_ELEMENT_IN_INDEX_DEFINITIONS, SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS].
     * Valid actions for a SQL catalog are described under `arrow.flight.protocol.sql.SqlSupportedElementActions`.
     */
    SQL_CATALOGS_SUPPORTED_ACTIONS = 534,
    /**
     * SQL_SUPPORTED_POSITIONED_COMMANDS - Retrieves the supported SQL positioned commands.
     *
     * Returns an int32 bitmask value representing the supported SQL positioned commands.
     * The returned bitmask should be parsed in order to retrieve the supported SQL positioned commands.
     *
     * For instance:
     * - return 0 (\b0)   => [] (no supported SQL positioned commands);
     * - return 1 (\b1)   => [SQL_POSITIONED_DELETE];
     * - return 2 (\b10)  => [SQL_POSITIONED_UPDATE];
     * - return 3 (\b11)  => [SQL_POSITIONED_DELETE, SQL_POSITIONED_UPDATE].
     * Valid SQL positioned commands are described under `arrow.flight.protocol.sql.SqlSupportedPositionedCommands`.
     */
    SQL_SUPPORTED_POSITIONED_COMMANDS = 535,
    /**
     * SQL_SELECT_FOR_UPDATE_SUPPORTED - Retrieves a boolean value indicating whether SELECT FOR UPDATE statements are supported.
     *
     * Returns:
     * - false: if SELECT FOR UPDATE statements are unsupported;
     * - true: if SELECT FOR UPDATE statements are supported.
     */
    SQL_SELECT_FOR_UPDATE_SUPPORTED = 536,
    /**
     * SQL_STORED_PROCEDURES_SUPPORTED - Retrieves a boolean value indicating whether stored procedure calls that use the stored procedure escape syntax
     * are supported.
     *
     * Returns:
     * - false: if stored procedure calls that use the stored procedure escape syntax are unsupported;
     * - true: if stored procedure calls that use the stored procedure escape syntax are supported.
     */
    SQL_STORED_PROCEDURES_SUPPORTED = 537,
    /**
     * SQL_SUPPORTED_SUBQUERIES - Retrieves the supported SQL subqueries.
     *
     * Returns an int32 bitmask value representing the supported SQL subqueries.
     * The returned bitmask should be parsed in order to retrieve the supported SQL subqueries.
     *
     * For instance:
     * - return 0   (\b0)     => [] (no supported SQL subqueries);
     * - return 1   (\b1)     => [SQL_SUBQUERIES_IN_COMPARISONS];
     * - return 2   (\b10)    => [SQL_SUBQUERIES_IN_EXISTS];
     * - return 3   (\b11)    => [SQL_SUBQUERIES_IN_COMPARISONS, SQL_SUBQUERIES_IN_EXISTS];
     * - return 4   (\b100)   => [SQL_SUBQUERIES_IN_INS];
     * - return 5   (\b101)   => [SQL_SUBQUERIES_IN_COMPARISONS, SQL_SUBQUERIES_IN_INS];
     * - return 6   (\b110)   => [SQL_SUBQUERIES_IN_INS, SQL_SUBQUERIES_IN_EXISTS];
     * - return 7   (\b111)   => [SQL_SUBQUERIES_IN_COMPARISONS, SQL_SUBQUERIES_IN_EXISTS, SQL_SUBQUERIES_IN_INS];
     * - return 8   (\b1000)  => [SQL_SUBQUERIES_IN_QUANTIFIEDS];
     * - return 9   (\b1001)  => [SQL_SUBQUERIES_IN_COMPARISONS, SQL_SUBQUERIES_IN_QUANTIFIEDS];
     * - return 10  (\b1010)  => [SQL_SUBQUERIES_IN_EXISTS, SQL_SUBQUERIES_IN_QUANTIFIEDS];
     * - return 11  (\b1011)  => [SQL_SUBQUERIES_IN_COMPARISONS, SQL_SUBQUERIES_IN_EXISTS, SQL_SUBQUERIES_IN_QUANTIFIEDS];
     * - return 12  (\b1100)  => [SQL_SUBQUERIES_IN_INS, SQL_SUBQUERIES_IN_QUANTIFIEDS];
     * - return 13  (\b1101)  => [SQL_SUBQUERIES_IN_COMPARISONS, SQL_SUBQUERIES_IN_INS, SQL_SUBQUERIES_IN_QUANTIFIEDS];
     * - return 14  (\b1110)  => [SQL_SUBQUERIES_IN_EXISTS, SQL_SUBQUERIES_IN_INS, SQL_SUBQUERIES_IN_QUANTIFIEDS];
     * - return 15  (\b1111)  => [SQL_SUBQUERIES_IN_COMPARISONS, SQL_SUBQUERIES_IN_EXISTS, SQL_SUBQUERIES_IN_INS, SQL_SUBQUERIES_IN_QUANTIFIEDS];
     * - ...
     * Valid SQL subqueries are described under `arrow.flight.protocol.sql.SqlSupportedSubqueries`.
     */
    SQL_SUPPORTED_SUBQUERIES = 538,
    /**
     * SQL_CORRELATED_SUBQUERIES_SUPPORTED - Retrieves a boolean value indicating whether correlated subqueries are supported.
     *
     * Returns:
     * - false: if correlated subqueries are unsupported;
     * - true: if correlated subqueries are supported.
     */
    SQL_CORRELATED_SUBQUERIES_SUPPORTED = 539,
    /**
     * SQL_SUPPORTED_UNIONS - Retrieves the supported SQL UNIONs.
     *
     * Returns an int32 bitmask value representing the supported SQL UNIONs.
     * The returned bitmask should be parsed in order to retrieve the supported SQL UNIONs.
     *
     * For instance:
     * - return 0 (\b0)   => [] (no supported SQL positioned commands);
     * - return 1 (\b1)   => [SQL_UNION];
     * - return 2 (\b10)  => [SQL_UNION_ALL];
     * - return 3 (\b11)  => [SQL_UNION, SQL_UNION_ALL].
     * Valid SQL positioned commands are described under `arrow.flight.protocol.sql.SqlSupportedUnions`.
     */
    SQL_SUPPORTED_UNIONS = 540,
    /** SQL_MAX_BINARY_LITERAL_LENGTH - Retrieves a int64 value representing the maximum number of hex characters allowed in an inline binary literal. */
    SQL_MAX_BINARY_LITERAL_LENGTH = 541,
    /** SQL_MAX_CHAR_LITERAL_LENGTH - Retrieves a int64 value representing the maximum number of characters allowed for a character literal. */
    SQL_MAX_CHAR_LITERAL_LENGTH = 542,
    /** SQL_MAX_COLUMN_NAME_LENGTH - Retrieves a int64 value representing the maximum number of characters allowed for a column name. */
    SQL_MAX_COLUMN_NAME_LENGTH = 543,
    /** SQL_MAX_COLUMNS_IN_GROUP_BY - Retrieves a int64 value representing the maximum number of columns allowed in a GROUP BY clause. */
    SQL_MAX_COLUMNS_IN_GROUP_BY = 544,
    /** SQL_MAX_COLUMNS_IN_INDEX - Retrieves a int64 value representing the maximum number of columns allowed in an index. */
    SQL_MAX_COLUMNS_IN_INDEX = 545,
    /** SQL_MAX_COLUMNS_IN_ORDER_BY - Retrieves a int64 value representing the maximum number of columns allowed in an ORDER BY clause. */
    SQL_MAX_COLUMNS_IN_ORDER_BY = 546,
    /** SQL_MAX_COLUMNS_IN_SELECT - Retrieves a int64 value representing the maximum number of columns allowed in a SELECT list. */
    SQL_MAX_COLUMNS_IN_SELECT = 547,
    /** SQL_MAX_COLUMNS_IN_TABLE - Retrieves a int64 value representing the maximum number of columns allowed in a table. */
    SQL_MAX_COLUMNS_IN_TABLE = 548,
    /** SQL_MAX_CONNECTIONS - Retrieves a int64 value representing the maximum number of concurrent connections possible. */
    SQL_MAX_CONNECTIONS = 549,
    /** SQL_MAX_CURSOR_NAME_LENGTH - Retrieves a int64 value the maximum number of characters allowed in a cursor name. */
    SQL_MAX_CURSOR_NAME_LENGTH = 550,
    /**
     * SQL_MAX_INDEX_LENGTH - Retrieves a int64 value representing the maximum number of bytes allowed for an index,
     * including all of the parts of the index.
     */
    SQL_MAX_INDEX_LENGTH = 551,
    /** SQL_DB_SCHEMA_NAME_LENGTH - Retrieves a int64 value representing the maximum number of characters allowed in a schema name. */
    SQL_DB_SCHEMA_NAME_LENGTH = 552,
    /** SQL_MAX_PROCEDURE_NAME_LENGTH - Retrieves a int64 value representing the maximum number of characters allowed in a procedure name. */
    SQL_MAX_PROCEDURE_NAME_LENGTH = 553,
    /** SQL_MAX_CATALOG_NAME_LENGTH - Retrieves a int64 value representing the maximum number of characters allowed in a catalog name. */
    SQL_MAX_CATALOG_NAME_LENGTH = 554,
    /** SQL_MAX_ROW_SIZE - Retrieves a int64 value representing the maximum number of bytes allowed in a single row. */
    SQL_MAX_ROW_SIZE = 555,
    /**
     * SQL_MAX_ROW_SIZE_INCLUDES_BLOBS - Retrieves a boolean indicating whether the return value for the JDBC method getMaxRowSize includes the SQL
     * data types LONGVARCHAR and LONGVARBINARY.
     *
     * Returns:
     * - false: if return value for the JDBC method getMaxRowSize does
     *          not include the SQL data types LONGVARCHAR and LONGVARBINARY;
     * - true: if return value for the JDBC method getMaxRowSize includes
     *         the SQL data types LONGVARCHAR and LONGVARBINARY.
     */
    SQL_MAX_ROW_SIZE_INCLUDES_BLOBS = 556,
    /**
     * SQL_MAX_STATEMENT_LENGTH - Retrieves a int64 value representing the maximum number of characters allowed for an SQL statement;
     * a result of 0 (zero) means that there is no limit or the limit is not known.
     */
    SQL_MAX_STATEMENT_LENGTH = 557,
    /** SQL_MAX_STATEMENTS - Retrieves a int64 value representing the maximum number of active statements that can be open at the same time. */
    SQL_MAX_STATEMENTS = 558,
    /** SQL_MAX_TABLE_NAME_LENGTH - Retrieves a int64 value representing the maximum number of characters allowed in a table name. */
    SQL_MAX_TABLE_NAME_LENGTH = 559,
    /** SQL_MAX_TABLES_IN_SELECT - Retrieves a int64 value representing the maximum number of tables allowed in a SELECT statement. */
    SQL_MAX_TABLES_IN_SELECT = 560,
    /** SQL_MAX_USERNAME_LENGTH - Retrieves a int64 value representing the maximum number of characters allowed in a user name. */
    SQL_MAX_USERNAME_LENGTH = 561,
    /**
     * SQL_DEFAULT_TRANSACTION_ISOLATION - Retrieves this database's default transaction isolation level as described in
     * `arrow.flight.protocol.sql.SqlTransactionIsolationLevel`.
     *
     * Returns a int32 ordinal for the SQL transaction isolation level.
     */
    SQL_DEFAULT_TRANSACTION_ISOLATION = 562,
    /**
     * SQL_TRANSACTIONS_SUPPORTED - Retrieves a boolean value indicating whether transactions are supported. If not, invoking the method commit is a
     * noop, and the isolation level is `arrow.flight.protocol.sql.SqlTransactionIsolationLevel.TRANSACTION_NONE`.
     *
     * Returns:
     * - false: if transactions are unsupported;
     * - true: if transactions are supported.
     */
    SQL_TRANSACTIONS_SUPPORTED = 563,
    /**
     * SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS - Retrieves the supported transactions isolation levels.
     *
     * Returns an int32 bitmask value representing the supported transactions isolation levels.
     * The returned bitmask should be parsed in order to retrieve the supported transactions isolation levels.
     *
     * For instance:
     * - return 0   (\b0)     => [] (no supported SQL transactions isolation levels);
     * - return 1   (\b1)     => [SQL_TRANSACTION_NONE];
     * - return 2   (\b10)    => [SQL_TRANSACTION_READ_UNCOMMITTED];
     * - return 3   (\b11)    => [SQL_TRANSACTION_NONE, SQL_TRANSACTION_READ_UNCOMMITTED];
     * - return 4   (\b100)   => [SQL_TRANSACTION_REPEATABLE_READ];
     * - return 5   (\b101)   => [SQL_TRANSACTION_NONE, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 6   (\b110)   => [SQL_TRANSACTION_READ_UNCOMMITTED, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 7   (\b111)   => [SQL_TRANSACTION_NONE, SQL_TRANSACTION_READ_UNCOMMITTED, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 8   (\b1000)  => [SQL_TRANSACTION_REPEATABLE_READ];
     * - return 9   (\b1001)  => [SQL_TRANSACTION_NONE, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 10  (\b1010)  => [SQL_TRANSACTION_READ_UNCOMMITTED, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 11  (\b1011)  => [SQL_TRANSACTION_NONE, SQL_TRANSACTION_READ_UNCOMMITTED, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 12  (\b1100)  => [SQL_TRANSACTION_REPEATABLE_READ, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 13  (\b1101)  => [SQL_TRANSACTION_NONE, SQL_TRANSACTION_REPEATABLE_READ, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 14  (\b1110)  => [SQL_TRANSACTION_READ_UNCOMMITTED, SQL_TRANSACTION_REPEATABLE_READ, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 15  (\b1111)  => [SQL_TRANSACTION_NONE, SQL_TRANSACTION_READ_UNCOMMITTED, SQL_TRANSACTION_REPEATABLE_READ, SQL_TRANSACTION_REPEATABLE_READ];
     * - return 16  (\b10000) => [SQL_TRANSACTION_SERIALIZABLE];
     * - ...
     * Valid SQL positioned commands are described under `arrow.flight.protocol.sql.SqlTransactionIsolationLevel`.
     */
    SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS = 564,
    /**
     * SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT - Retrieves a boolean value indicating whether a data definition statement within a transaction forces
     * the transaction to commit.
     *
     * Returns:
     * - false: if a data definition statement within a transaction does not force the transaction to commit;
     * - true: if a data definition statement within a transaction forces the transaction to commit.
     */
    SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT = 565,
    /**
     * SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED - Retrieves a boolean value indicating whether a data definition statement within a transaction is ignored.
     *
     * Returns:
     * - false: if a data definition statement within a transaction is taken into account;
     * - true: a data definition statement within a transaction is ignored.
     */
    SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED = 566,
    /**
     * SQL_SUPPORTED_RESULT_SET_TYPES - Retrieves an int32 bitmask value representing the supported result set types.
     * The returned bitmask should be parsed in order to retrieve the supported result set types.
     *
     * For instance:
     * - return 0   (\b0)     => [] (no supported result set types);
     * - return 1   (\b1)     => [SQL_RESULT_SET_TYPE_UNSPECIFIED];
     * - return 2   (\b10)    => [SQL_RESULT_SET_TYPE_FORWARD_ONLY];
     * - return 3   (\b11)    => [SQL_RESULT_SET_TYPE_UNSPECIFIED, SQL_RESULT_SET_TYPE_FORWARD_ONLY];
     * - return 4   (\b100)   => [SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE];
     * - return 5   (\b101)   => [SQL_RESULT_SET_TYPE_UNSPECIFIED, SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE];
     * - return 6   (\b110)   => [SQL_RESULT_SET_TYPE_FORWARD_ONLY, SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE];
     * - return 7   (\b111)   => [SQL_RESULT_SET_TYPE_UNSPECIFIED, SQL_RESULT_SET_TYPE_FORWARD_ONLY, SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE];
     * - return 8   (\b1000)  => [SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE];
     * - ...
     * Valid result set types are described under `arrow.flight.protocol.sql.SqlSupportedResultSetType`.
     */
    SQL_SUPPORTED_RESULT_SET_TYPES = 567,
    /**
     * SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED - Returns an int32 bitmask value concurrency types supported for
     * `arrow.flight.protocol.sql.SqlSupportedResultSetType.SQL_RESULT_SET_TYPE_UNSPECIFIED`.
     *
     * For instance:
     * - return 0 (\b0)   => [] (no supported concurrency types for this result set type)
     * - return 1 (\b1)   => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED]
     * - return 2 (\b10)  => [SQL_RESULT_SET_CONCURRENCY_READ_ONLY]
     * - return 3 (\b11)  => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_READ_ONLY]
     * - return 4 (\b100) => [SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 5 (\b101) => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 6 (\b110)  => [SQL_RESULT_SET_CONCURRENCY_READ_ONLY, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 7 (\b111)  => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_READ_ONLY, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * Valid result set types are described under `arrow.flight.protocol.sql.SqlSupportedResultSetConcurrency`.
     */
    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED = 568,
    /**
     * SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY - Returns an int32 bitmask value concurrency types supported for
     * `arrow.flight.protocol.sql.SqlSupportedResultSetType.SQL_RESULT_SET_TYPE_FORWARD_ONLY`.
     *
     * For instance:
     * - return 0 (\b0)   => [] (no supported concurrency types for this result set type)
     * - return 1 (\b1)   => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED]
     * - return 2 (\b10)  => [SQL_RESULT_SET_CONCURRENCY_READ_ONLY]
     * - return 3 (\b11)  => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_READ_ONLY]
     * - return 4 (\b100) => [SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 5 (\b101) => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 6 (\b110)  => [SQL_RESULT_SET_CONCURRENCY_READ_ONLY, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 7 (\b111)  => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_READ_ONLY, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * Valid result set types are described under `arrow.flight.protocol.sql.SqlSupportedResultSetConcurrency`.
     */
    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY = 569,
    /**
     * SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE - Returns an int32 bitmask value concurrency types supported for
     * `arrow.flight.protocol.sql.SqlSupportedResultSetType.SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE`.
     *
     * For instance:
     * - return 0 (\b0)   => [] (no supported concurrency types for this result set type)
     * - return 1 (\b1)   => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED]
     * - return 2 (\b10)  => [SQL_RESULT_SET_CONCURRENCY_READ_ONLY]
     * - return 3 (\b11)  => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_READ_ONLY]
     * - return 4 (\b100) => [SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 5 (\b101) => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 6 (\b110)  => [SQL_RESULT_SET_CONCURRENCY_READ_ONLY, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 7 (\b111)  => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_READ_ONLY, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * Valid result set types are described under `arrow.flight.protocol.sql.SqlSupportedResultSetConcurrency`.
     */
    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE = 570,
    /**
     * SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE - Returns an int32 bitmask value concurrency types supported for
     * `arrow.flight.protocol.sql.SqlSupportedResultSetType.SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE`.
     *
     * For instance:
     * - return 0 (\b0)   => [] (no supported concurrency types for this result set type)
     * - return 1 (\b1)   => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED]
     * - return 2 (\b10)  => [SQL_RESULT_SET_CONCURRENCY_READ_ONLY]
     * - return 3 (\b11)  => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_READ_ONLY]
     * - return 4 (\b100) => [SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 5 (\b101) => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 6 (\b110)  => [SQL_RESULT_SET_CONCURRENCY_READ_ONLY, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * - return 7 (\b111)  => [SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED, SQL_RESULT_SET_CONCURRENCY_READ_ONLY, SQL_RESULT_SET_CONCURRENCY_UPDATABLE]
     * Valid result set types are described under `arrow.flight.protocol.sql.SqlSupportedResultSetConcurrency`.
     */
    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE = 571,
    /**
     * SQL_BATCH_UPDATES_SUPPORTED - Retrieves a boolean value indicating whether this database supports batch updates.
     *
     * - false: if this database does not support batch updates;
     * - true: if this database supports batch updates.
     */
    SQL_BATCH_UPDATES_SUPPORTED = 572,
    /**
     * SQL_SAVEPOINTS_SUPPORTED - Retrieves a boolean value indicating whether this database supports savepoints.
     *
     * Returns:
     * - false: if this database does not support savepoints;
     * - true: if this database supports savepoints.
     */
    SQL_SAVEPOINTS_SUPPORTED = 573,
    /**
     * SQL_NAMED_PARAMETERS_SUPPORTED - Retrieves a boolean value indicating whether named parameters are supported in callable statements.
     *
     * Returns:
     * - false: if named parameters in callable statements are unsupported;
     * - true: if named parameters in callable statements are supported.
     */
    SQL_NAMED_PARAMETERS_SUPPORTED = 574,
    /**
     * SQL_LOCATORS_UPDATE_COPY - Retrieves a boolean value indicating whether updates made to a LOB are made on a copy or directly to the LOB.
     *
     * Returns:
     * - false: if updates made to a LOB are made directly to the LOB;
     * - true: if updates made to a LOB are made on a copy.
     */
    SQL_LOCATORS_UPDATE_COPY = 575,
    /**
     * SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED - Retrieves a boolean value indicating whether invoking user-defined or vendor functions
     * using the stored procedure escape syntax is supported.
     *
     * Returns:
     * - false: if invoking user-defined or vendor functions using the stored procedure escape syntax is unsupported;
     * - true: if invoking user-defined or vendor functions using the stored procedure escape syntax is supported.
     */
    SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED = 576,
    UNRECOGNIZED = -1
}
/** The level of support for Flight SQL transaction RPCs. */
export declare enum SqlSupportedTransaction {
    /** SQL_SUPPORTED_TRANSACTION_NONE - Unknown/not indicated/no support */
    SQL_SUPPORTED_TRANSACTION_NONE = 0,
    /**
     * SQL_SUPPORTED_TRANSACTION_TRANSACTION - Transactions, but not savepoints.
     * A savepoint is a mark within a transaction that can be individually
     * rolled back to. Not all databases support savepoints.
     */
    SQL_SUPPORTED_TRANSACTION_TRANSACTION = 1,
    /** SQL_SUPPORTED_TRANSACTION_SAVEPOINT - Transactions and savepoints */
    SQL_SUPPORTED_TRANSACTION_SAVEPOINT = 2,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportedCaseSensitivity {
    SQL_CASE_SENSITIVITY_UNKNOWN = 0,
    SQL_CASE_SENSITIVITY_CASE_INSENSITIVE = 1,
    SQL_CASE_SENSITIVITY_UPPERCASE = 2,
    SQL_CASE_SENSITIVITY_LOWERCASE = 3,
    UNRECOGNIZED = -1
}
export declare enum SqlNullOrdering {
    SQL_NULLS_SORTED_HIGH = 0,
    SQL_NULLS_SORTED_LOW = 1,
    SQL_NULLS_SORTED_AT_START = 2,
    SQL_NULLS_SORTED_AT_END = 3,
    UNRECOGNIZED = -1
}
export declare enum SupportedSqlGrammar {
    SQL_MINIMUM_GRAMMAR = 0,
    SQL_CORE_GRAMMAR = 1,
    SQL_EXTENDED_GRAMMAR = 2,
    UNRECOGNIZED = -1
}
export declare enum SupportedAnsi92SqlGrammarLevel {
    ANSI92_ENTRY_SQL = 0,
    ANSI92_INTERMEDIATE_SQL = 1,
    ANSI92_FULL_SQL = 2,
    UNRECOGNIZED = -1
}
export declare enum SqlOuterJoinsSupportLevel {
    SQL_JOINS_UNSUPPORTED = 0,
    SQL_LIMITED_OUTER_JOINS = 1,
    SQL_FULL_OUTER_JOINS = 2,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportedGroupBy {
    SQL_GROUP_BY_UNRELATED = 0,
    SQL_GROUP_BY_BEYOND_SELECT = 1,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportedElementActions {
    SQL_ELEMENT_IN_PROCEDURE_CALLS = 0,
    SQL_ELEMENT_IN_INDEX_DEFINITIONS = 1,
    SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS = 2,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportedPositionedCommands {
    SQL_POSITIONED_DELETE = 0,
    SQL_POSITIONED_UPDATE = 1,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportedSubqueries {
    SQL_SUBQUERIES_IN_COMPARISONS = 0,
    SQL_SUBQUERIES_IN_EXISTS = 1,
    SQL_SUBQUERIES_IN_INS = 2,
    SQL_SUBQUERIES_IN_QUANTIFIEDS = 3,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportedUnions {
    SQL_UNION = 0,
    SQL_UNION_ALL = 1,
    UNRECOGNIZED = -1
}
export declare enum SqlTransactionIsolationLevel {
    SQL_TRANSACTION_NONE = 0,
    SQL_TRANSACTION_READ_UNCOMMITTED = 1,
    SQL_TRANSACTION_READ_COMMITTED = 2,
    SQL_TRANSACTION_REPEATABLE_READ = 3,
    SQL_TRANSACTION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportedTransactions {
    SQL_TRANSACTION_UNSPECIFIED = 0,
    SQL_DATA_DEFINITION_TRANSACTIONS = 1,
    SQL_DATA_MANIPULATION_TRANSACTIONS = 2,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportedResultSetType {
    SQL_RESULT_SET_TYPE_UNSPECIFIED = 0,
    SQL_RESULT_SET_TYPE_FORWARD_ONLY = 1,
    SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE = 2,
    SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE = 3,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportedResultSetConcurrency {
    SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED = 0,
    SQL_RESULT_SET_CONCURRENCY_READ_ONLY = 1,
    SQL_RESULT_SET_CONCURRENCY_UPDATABLE = 2,
    UNRECOGNIZED = -1
}
export declare enum SqlSupportsConvert {
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
    UNRECOGNIZED = -1
}
/**
 * The JDBC/ODBC-defined type of any object.
 * All the values here are the same as in the JDBC and ODBC specs.
 */
export declare enum XdbcDataType {
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
    XDBC_WVARCHAR = -9
}
/** Detailed subtype information for XDBC_TYPE_DATETIME and XDBC_TYPE_INTERVAL. */
export declare enum XdbcDatetimeSubcode {
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
    UNRECOGNIZED = -1
}
export declare enum Nullable {
    /** NULLABILITY_NO_NULLS - Indicates that the fields does not allow the use of null values. */
    NULLABILITY_NO_NULLS = 0,
    /** NULLABILITY_NULLABLE - Indicates that the fields allow the use of null values. */
    NULLABILITY_NULLABLE = 1,
    /** NULLABILITY_UNKNOWN - Indicates that nullability of the fields cannot be determined. */
    NULLABILITY_UNKNOWN = 2,
    UNRECOGNIZED = -1
}
export declare enum Searchable {
    /** SEARCHABLE_NONE - Indicates that column cannot be used in a WHERE clause. */
    SEARCHABLE_NONE = 0,
    /**
     * SEARCHABLE_CHAR - Indicates that the column can be used in a WHERE clause if it is using a
     * LIKE operator.
     */
    SEARCHABLE_CHAR = 1,
    /**
     * SEARCHABLE_BASIC - Indicates that the column can be used In a WHERE clause with any
     * operator other than LIKE.
     *
     * - Allowed operators: comparison, quantified comparison, BETWEEN,
     *                      DISTINCT, IN, MATCH, and UNIQUE.
     */
    SEARCHABLE_BASIC = 2,
    /** SEARCHABLE_FULL - Indicates that the column can be used in a WHERE clause using any operator. */
    SEARCHABLE_FULL = 3,
    UNRECOGNIZED = -1
}
export declare enum UpdateDeleteRules {
    CASCADE = 0,
    RESTRICT = 1,
    SET_NULL = 2,
    NO_ACTION = 3,
    SET_DEFAULT = 4,
    UNRECOGNIZED = -1
}
/**
 * Represents a metadata request. Used in the command member of FlightDescriptor
 * for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *  - GetFlightInfo: execute the metadata request.
 *
 * The returned Arrow schema will be:
 * <
 *  info_name: uint32 not null,
 *  value: dense_union<
 *              string_value: utf8,
 *              bool_value: bool,
 *              bigint_value: int64,
 *              int32_bitmask: int32,
 *              string_list: list<string_data: utf8>
 *              int32_to_int32_list_map: map<key: int32, value: list<$data$: int32>>
 * >
 * where there is one row per requested piece of metadata information.
 */
export interface CommandGetSqlInfo {
    /**
     * Values are modelled after ODBC's SQLGetInfo() function. This information is intended to provide
     * Flight SQL clients with basic, SQL syntax and SQL functions related information.
     * More information types can be added in future releases.
     * E.g. more SQL syntax support types, scalar functions support, type conversion support etc.
     *
     * Note that the set of metadata may expand.
     *
     * Initially, Flight SQL will support the following information types:
     * - Server Information - Range [0-500)
     * - Syntax Information - Range [500-1000)
     * Range [0-10,000) is reserved for defaults (see SqlInfo enum for default options).
     * Custom options should start at 10,000.
     *
     * If omitted, then all metadata will be retrieved.
     * Flight SQL Servers may choose to include additional metadata above and beyond the specified set, however they must
     * at least return the specified set. IDs ranging from 0 to 10,000 (exclusive) are reserved for future use.
     * If additional metadata is included, the metadata IDs should start from 10,000.
     */
    info: number[];
}
/**
 * Represents a request to retrieve information about data type supported on a Flight SQL enabled backend.
 * Used in the command member of FlightDescriptor for the following RPC calls:
 *  - GetSchema: return the schema of the query.
 *  - GetFlightInfo: execute the catalog metadata request.
 *
 * The returned schema will be:
 * <
 *   type_name: utf8 not null (The name of the data type, for example: VARCHAR, INTEGER, etc),
 *   data_type: int32 not null (The SQL data type),
 *   column_size: int32 (The maximum size supported by that column.
 *                       In case of exact numeric types, this represents the maximum precision.
 *                       In case of string types, this represents the character length.
 *                       In case of datetime data types, this represents the length in characters of the string representation.
 *                       NULL is returned for data types where column size is not applicable.),
 *   literal_prefix: utf8 (Character or characters used to prefix a literal, NULL is returned for
 *                         data types where a literal prefix is not applicable.),
 *   literal_suffix: utf8 (Character or characters used to terminate a literal,
 *                         NULL is returned for data types where a literal suffix is not applicable.),
 *   create_params: list<utf8 not null>
 *                        (A list of keywords corresponding to which parameters can be used when creating
 *                         a column for that specific type.
 *                         NULL is returned if there are no parameters for the data type definition.),
 *   nullable: int32 not null (Shows if the data type accepts a NULL value. The possible values can be seen in the
 *                             Nullable enum.),
 *   case_sensitive: bool not null (Shows if a character data type is case-sensitive in collations and comparisons),
 *   searchable: int32 not null (Shows how the data type is used in a WHERE clause. The possible values can be seen in the
 *                               Searchable enum.),
 *   unsigned_attribute: bool (Shows if the data type is unsigned. NULL is returned if the attribute is
 *                             not applicable to the data type or the data type is not numeric.),
 *   fixed_prec_scale: bool not null (Shows if the data type has predefined fixed precision and scale.),
 *   auto_increment: bool (Shows if the data type is auto incremental. NULL is returned if the attribute
 *                         is not applicable to the data type or the data type is not numeric.),
 *   local_type_name: utf8 (Localized version of the data source-dependent name of the data type. NULL
 *                          is returned if a localized name is not supported by the data source),
 *   minimum_scale: int32 (The minimum scale of the data type on the data source.
 *                         If a data type has a fixed scale, the MINIMUM_SCALE and MAXIMUM_SCALE
 *                         columns both contain this value. NULL is returned if scale is not applicable.),
 *   maximum_scale: int32 (The maximum scale of the data type on the data source.
 *                         NULL is returned if scale is not applicable.),
 *   sql_data_type: int32 not null (The value of the SQL DATA TYPE which has the same values
 *                                  as data_type value. Except for interval and datetime, which
 *                                  uses generic values. More info about those types can be
 *                                  obtained through datetime_subcode. The possible values can be seen
 *                                  in the XdbcDataType enum.),
 *   datetime_subcode: int32 (Only used when the SQL DATA TYPE is interval or datetime. It contains
 *                            its sub types. For type different from interval and datetime, this value
 *                            is NULL. The possible values can be seen in the XdbcDatetimeSubcode enum.),
 *   num_prec_radix: int32 (If the data type is an approximate numeric type, this column contains
 *                          the value 2 to indicate that COLUMN_SIZE specifies a number of bits. For
 *                          exact numeric types, this column contains the value 10 to indicate that
 *                          column size specifies a number of decimal digits. Otherwise, this column is NULL.),
 *   interval_precision: int32 (If the data type is an interval data type, then this column contains the value
 *                              of the interval leading precision. Otherwise, this column is NULL. This fields
 *                              is only relevant to be used by ODBC).
 * >
 * The returned data should be ordered by data_type and then by type_name.
 */
export interface CommandGetXdbcTypeInfo {
    /** Specifies the data type to search for the info. */
    dataType?: number | undefined;
}
/**
 * Represents a request to retrieve the list of catalogs on a Flight SQL enabled backend.
 * The definition of a catalog depends on vendor/implementation. It is usually the database itself
 * Used in the command member of FlightDescriptor for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *  - GetFlightInfo: execute the catalog metadata request.
 *
 * The returned Arrow schema will be:
 * <
 *  catalog_name: utf8 not null
 * >
 * The returned data should be ordered by catalog_name.
 */
export interface CommandGetCatalogs {
}
/**
 * Represents a request to retrieve the list of database schemas on a Flight SQL enabled backend.
 * The definition of a database schema depends on vendor/implementation. It is usually a collection of tables.
 * Used in the command member of FlightDescriptor for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *  - GetFlightInfo: execute the catalog metadata request.
 *
 * The returned Arrow schema will be:
 * <
 *  catalog_name: utf8,
 *  db_schema_name: utf8 not null
 * >
 * The returned data should be ordered by catalog_name, then db_schema_name.
 */
export interface CommandGetDbSchemas {
    /**
     * Specifies the Catalog to search for the tables.
     * An empty string retrieves those without a catalog.
     * If omitted the catalog name should not be used to narrow the search.
     */
    catalog?: string | undefined;
    /**
     * Specifies a filter pattern for schemas to search for.
     * When no db_schema_filter_pattern is provided, the pattern will not be used to narrow the search.
     * In the pattern string, two special characters can be used to denote matching rules:
     *    - "%" means to match any substring with 0 or more characters.
     *    - "_" means to match any one character.
     */
    dbSchemaFilterPattern?: string | undefined;
}
/**
 * Represents a request to retrieve the list of tables, and optionally their schemas, on a Flight SQL enabled backend.
 * Used in the command member of FlightDescriptor for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *  - GetFlightInfo: execute the catalog metadata request.
 *
 * The returned Arrow schema will be:
 * <
 *  catalog_name: utf8,
 *  db_schema_name: utf8,
 *  table_name: utf8 not null,
 *  table_type: utf8 not null,
 *  [optional] table_schema: bytes not null (schema of the table as described in Schema.fbs::Schema,
 *                                           it is serialized as an IPC message.)
 * >
 * Fields on table_schema may contain the following metadata:
 *  - ARROW:FLIGHT:SQL:CATALOG_NAME      - Table's catalog name
 *  - ARROW:FLIGHT:SQL:DB_SCHEMA_NAME    - Database schema name
 *  - ARROW:FLIGHT:SQL:TABLE_NAME        - Table name
 *  - ARROW:FLIGHT:SQL:TYPE_NAME         - The data source-specific name for the data type of the column.
 *  - ARROW:FLIGHT:SQL:PRECISION         - Column precision/size
 *  - ARROW:FLIGHT:SQL:SCALE             - Column scale/decimal digits if applicable
 *  - ARROW:FLIGHT:SQL:IS_AUTO_INCREMENT - "1" indicates if the column is auto incremented, "0" otherwise.
 *  - ARROW:FLIGHT:SQL:IS_CASE_SENSITIVE - "1" indicates if the column is case-sensitive, "0" otherwise.
 *  - ARROW:FLIGHT:SQL:IS_READ_ONLY      - "1" indicates if the column is read only, "0" otherwise.
 *  - ARROW:FLIGHT:SQL:IS_SEARCHABLE     - "1" indicates if the column is searchable via WHERE clause, "0" otherwise.
 * The returned data should be ordered by catalog_name, db_schema_name, table_name, then table_type, followed by table_schema if requested.
 */
export interface CommandGetTables {
    /**
     * Specifies the Catalog to search for the tables.
     * An empty string retrieves those without a catalog.
     * If omitted the catalog name should not be used to narrow the search.
     */
    catalog?: string | undefined;
    /**
     * Specifies a filter pattern for schemas to search for.
     * When no db_schema_filter_pattern is provided, all schemas matching other filters are searched.
     * In the pattern string, two special characters can be used to denote matching rules:
     *    - "%" means to match any substring with 0 or more characters.
     *    - "_" means to match any one character.
     */
    dbSchemaFilterPattern?: string | undefined;
    /**
     * Specifies a filter pattern for tables to search for.
     * When no table_name_filter_pattern is provided, all tables matching other filters are searched.
     * In the pattern string, two special characters can be used to denote matching rules:
     *    - "%" means to match any substring with 0 or more characters.
     *    - "_" means to match any one character.
     */
    tableNameFilterPattern?: string | undefined;
    /**
     * Specifies a filter of table types which must match.
     * The table types depend on vendor/implementation. It is usually used to separate tables from views or system tables.
     * TABLE, VIEW, and SYSTEM TABLE are commonly supported.
     */
    tableTypes: string[];
    /** Specifies if the Arrow schema should be returned for found tables. */
    includeSchema: boolean;
}
/**
 * Represents a request to retrieve the list of table types on a Flight SQL enabled backend.
 * The table types depend on vendor/implementation. It is usually used to separate tables from views or system tables.
 * TABLE, VIEW, and SYSTEM TABLE are commonly supported.
 * Used in the command member of FlightDescriptor for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *  - GetFlightInfo: execute the catalog metadata request.
 *
 * The returned Arrow schema will be:
 * <
 *  table_type: utf8 not null
 * >
 * The returned data should be ordered by table_type.
 */
export interface CommandGetTableTypes {
}
/**
 * Represents a request to retrieve the primary keys of a table on a Flight SQL enabled backend.
 * Used in the command member of FlightDescriptor for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *  - GetFlightInfo: execute the catalog metadata request.
 *
 * The returned Arrow schema will be:
 * <
 *  catalog_name: utf8,
 *  db_schema_name: utf8,
 *  table_name: utf8 not null,
 *  column_name: utf8 not null,
 *  key_name: utf8,
 *  key_sequence: int32 not null
 * >
 * The returned data should be ordered by catalog_name, db_schema_name, table_name, key_name, then key_sequence.
 */
export interface CommandGetPrimaryKeys {
    /**
     * Specifies the catalog to search for the table.
     * An empty string retrieves those without a catalog.
     * If omitted the catalog name should not be used to narrow the search.
     */
    catalog?: string | undefined;
    /**
     * Specifies the schema to search for the table.
     * An empty string retrieves those without a schema.
     * If omitted the schema name should not be used to narrow the search.
     */
    dbSchema?: string | undefined;
    /** Specifies the table to get the primary keys for. */
    table: string;
}
/**
 * Represents a request to retrieve a description of the foreign key columns that reference the given table's
 * primary key columns (the foreign keys exported by a table) of a table on a Flight SQL enabled backend.
 * Used in the command member of FlightDescriptor for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *  - GetFlightInfo: execute the catalog metadata request.
 *
 * The returned Arrow schema will be:
 * <
 *  pk_catalog_name: utf8,
 *  pk_db_schema_name: utf8,
 *  pk_table_name: utf8 not null,
 *  pk_column_name: utf8 not null,
 *  fk_catalog_name: utf8,
 *  fk_db_schema_name: utf8,
 *  fk_table_name: utf8 not null,
 *  fk_column_name: utf8 not null,
 *  key_sequence: int32 not null,
 *  fk_key_name: utf8,
 *  pk_key_name: utf8,
 *  update_rule: uint8 not null,
 *  delete_rule: uint8 not null
 * >
 * The returned data should be ordered by fk_catalog_name, fk_db_schema_name, fk_table_name, fk_key_name, then key_sequence.
 * update_rule and delete_rule returns a byte that is equivalent to actions declared on UpdateDeleteRules enum.
 */
export interface CommandGetExportedKeys {
    /**
     * Specifies the catalog to search for the foreign key table.
     * An empty string retrieves those without a catalog.
     * If omitted the catalog name should not be used to narrow the search.
     */
    catalog?: string | undefined;
    /**
     * Specifies the schema to search for the foreign key table.
     * An empty string retrieves those without a schema.
     * If omitted the schema name should not be used to narrow the search.
     */
    dbSchema?: string | undefined;
    /** Specifies the foreign key table to get the foreign keys for. */
    table: string;
}
/**
 * Represents a request to retrieve the foreign keys of a table on a Flight SQL enabled backend.
 * Used in the command member of FlightDescriptor for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *  - GetFlightInfo: execute the catalog metadata request.
 *
 * The returned Arrow schema will be:
 * <
 *  pk_catalog_name: utf8,
 *  pk_db_schema_name: utf8,
 *  pk_table_name: utf8 not null,
 *  pk_column_name: utf8 not null,
 *  fk_catalog_name: utf8,
 *  fk_db_schema_name: utf8,
 *  fk_table_name: utf8 not null,
 *  fk_column_name: utf8 not null,
 *  key_sequence: int32 not null,
 *  fk_key_name: utf8,
 *  pk_key_name: utf8,
 *  update_rule: uint8 not null,
 *  delete_rule: uint8 not null
 * >
 * The returned data should be ordered by pk_catalog_name, pk_db_schema_name, pk_table_name, pk_key_name, then key_sequence.
 * update_rule and delete_rule returns a byte that is equivalent to actions:
 *    - 0 = CASCADE
 *    - 1 = RESTRICT
 *    - 2 = SET NULL
 *    - 3 = NO ACTION
 *    - 4 = SET DEFAULT
 */
export interface CommandGetImportedKeys {
    /**
     * Specifies the catalog to search for the primary key table.
     * An empty string retrieves those without a catalog.
     * If omitted the catalog name should not be used to narrow the search.
     */
    catalog?: string | undefined;
    /**
     * Specifies the schema to search for the primary key table.
     * An empty string retrieves those without a schema.
     * If omitted the schema name should not be used to narrow the search.
     */
    dbSchema?: string | undefined;
    /** Specifies the primary key table to get the foreign keys for. */
    table: string;
}
/**
 * Represents a request to retrieve a description of the foreign key columns in the given foreign key table that
 * reference the primary key or the columns representing a unique constraint of the parent table (could be the same
 * or a different table) on a Flight SQL enabled backend.
 * Used in the command member of FlightDescriptor for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *  - GetFlightInfo: execute the catalog metadata request.
 *
 * The returned Arrow schema will be:
 * <
 *  pk_catalog_name: utf8,
 *  pk_db_schema_name: utf8,
 *  pk_table_name: utf8 not null,
 *  pk_column_name: utf8 not null,
 *  fk_catalog_name: utf8,
 *  fk_db_schema_name: utf8,
 *  fk_table_name: utf8 not null,
 *  fk_column_name: utf8 not null,
 *  key_sequence: int32 not null,
 *  fk_key_name: utf8,
 *  pk_key_name: utf8,
 *  update_rule: uint8 not null,
 *  delete_rule: uint8 not null
 * >
 * The returned data should be ordered by pk_catalog_name, pk_db_schema_name, pk_table_name, pk_key_name, then key_sequence.
 * update_rule and delete_rule returns a byte that is equivalent to actions:
 *    - 0 = CASCADE
 *    - 1 = RESTRICT
 *    - 2 = SET NULL
 *    - 3 = NO ACTION
 *    - 4 = SET DEFAULT
 */
export interface CommandGetCrossReference {
    /**
     * The catalog name where the parent table is.
     * An empty string retrieves those without a catalog.
     * If omitted the catalog name should not be used to narrow the search.
     */
    pkCatalog?: string | undefined;
    /**
     * The Schema name where the parent table is.
     * An empty string retrieves those without a schema.
     * If omitted the schema name should not be used to narrow the search.
     */
    pkDbSchema?: string | undefined;
    /** The parent table name. It cannot be null. */
    pkTable: string;
    /**
     * The catalog name where the foreign table is.
     * An empty string retrieves those without a catalog.
     * If omitted the catalog name should not be used to narrow the search.
     */
    fkCatalog?: string | undefined;
    /**
     * The schema name where the foreign table is.
     * An empty string retrieves those without a schema.
     * If omitted the schema name should not be used to narrow the search.
     */
    fkDbSchema?: string | undefined;
    /** The foreign table name. It cannot be null. */
    fkTable: string;
}
/** Request message for the "CreatePreparedStatement" action on a Flight SQL enabled backend. */
export interface ActionCreatePreparedStatementRequest {
    /** The valid SQL string to create a prepared statement for. */
    query: string;
    /**
     * Create/execute the prepared statement as part of this transaction (if
     * unset, executions of the prepared statement will be auto-committed).
     */
    transactionId?: Uint8Array | undefined;
}
/** An embedded message describing a Substrait plan to execute. */
export interface SubstraitPlan {
    /**
     * The serialized substrait.Plan to create a prepared statement for.
     * XXX(ARROW-16902): this is bytes instead of an embedded message
     * because Protobuf does not really support one DLL using Protobuf
     * definitions from another DLL.
     */
    plan: Uint8Array;
    /**
     * The Substrait release, e.g. "0.12.0". This information is not
     * tracked in the plan itself, so this is the only way for consumers
     * to potentially know if they can handle the plan.
     */
    version: string;
}
/** Request message for the "CreatePreparedSubstraitPlan" action on a Flight SQL enabled backend. */
export interface ActionCreatePreparedSubstraitPlanRequest {
    /** The serialized substrait.Plan to create a prepared statement for. */
    plan: SubstraitPlan | undefined;
    /**
     * Create/execute the prepared statement as part of this transaction (if
     * unset, executions of the prepared statement will be auto-committed).
     */
    transactionId?: Uint8Array | undefined;
}
/**
 * Wrap the result of a "CreatePreparedStatement" or "CreatePreparedSubstraitPlan" action.
 *
 * The resultant PreparedStatement can be closed either:
 * - Manually, through the "ClosePreparedStatement" action;
 * - Automatically, by a server timeout.
 *
 * The result should be wrapped in a google.protobuf.Any message.
 */
export interface ActionCreatePreparedStatementResult {
    /** Opaque handle for the prepared statement on the server. */
    preparedStatementHandle: Uint8Array;
    /**
     * If a result set generating query was provided, dataset_schema contains the
     * schema of the result set.  It should be an IPC-encapsulated Schema, as described in Schema.fbs.
     * For some queries, the schema of the results may depend on the schema of the parameters.  The server
     * should provide its best guess as to the schema at this point.  Clients must not assume that this
     * schema, if provided, will be accurate.
     */
    datasetSchema: Uint8Array;
    /**
     * If the query provided contained parameters, parameter_schema contains the
     * schema of the expected parameters.  It should be an IPC-encapsulated Schema, as described in Schema.fbs.
     */
    parameterSchema: Uint8Array;
}
/**
 * Request message for the "ClosePreparedStatement" action on a Flight SQL enabled backend.
 * Closes server resources associated with the prepared statement handle.
 */
export interface ActionClosePreparedStatementRequest {
    /** Opaque handle for the prepared statement on the server. */
    preparedStatementHandle: Uint8Array;
}
/**
 * Request message for the "BeginTransaction" action.
 * Begins a transaction.
 */
export interface ActionBeginTransactionRequest {
}
/**
 * Request message for the "BeginSavepoint" action.
 * Creates a savepoint within a transaction.
 *
 * Only supported if FLIGHT_SQL_TRANSACTION is
 * FLIGHT_SQL_TRANSACTION_SUPPORT_SAVEPOINT.
 */
export interface ActionBeginSavepointRequest {
    /** The transaction to which a savepoint belongs. */
    transactionId: Uint8Array;
    /** Name for the savepoint. */
    name: string;
}
/**
 * The result of a "BeginTransaction" action.
 *
 * The transaction can be manipulated with the "EndTransaction" action, or
 * automatically via server timeout. If the transaction times out, then it is
 * automatically rolled back.
 *
 * The result should be wrapped in a google.protobuf.Any message.
 */
export interface ActionBeginTransactionResult {
    /** Opaque handle for the transaction on the server. */
    transactionId: Uint8Array;
}
/**
 * The result of a "BeginSavepoint" action.
 *
 * The transaction can be manipulated with the "EndSavepoint" action.
 * If the associated transaction is committed, rolled back, or times
 * out, then the savepoint is also invalidated.
 *
 * The result should be wrapped in a google.protobuf.Any message.
 */
export interface ActionBeginSavepointResult {
    /** Opaque handle for the savepoint on the server. */
    savepointId: Uint8Array;
}
/**
 * Request message for the "EndTransaction" action.
 *
 * Commit (COMMIT) or rollback (ROLLBACK) the transaction.
 *
 * If the action completes successfully, the transaction handle is
 * invalidated, as are all associated savepoints.
 */
export interface ActionEndTransactionRequest {
    /** Opaque handle for the transaction on the server. */
    transactionId: Uint8Array;
    /** Whether to commit/rollback the given transaction. */
    action: ActionEndTransactionRequest_EndTransaction;
}
export declare enum ActionEndTransactionRequest_EndTransaction {
    END_TRANSACTION_UNSPECIFIED = 0,
    /** END_TRANSACTION_COMMIT - Commit the transaction. */
    END_TRANSACTION_COMMIT = 1,
    /** END_TRANSACTION_ROLLBACK - Roll back the transaction. */
    END_TRANSACTION_ROLLBACK = 2,
    UNRECOGNIZED = -1
}
/**
 * Request message for the "EndSavepoint" action.
 *
 * Release (RELEASE) the savepoint or rollback (ROLLBACK) to the
 * savepoint.
 *
 * Releasing a savepoint invalidates that savepoint.  Rolling back to
 * a savepoint does not invalidate the savepoint, but invalidates all
 * savepoints created after the current savepoint.
 */
export interface ActionEndSavepointRequest {
    /** Opaque handle for the savepoint on the server. */
    savepointId: Uint8Array;
    /** Whether to rollback/release the given savepoint. */
    action: ActionEndSavepointRequest_EndSavepoint;
}
export declare enum ActionEndSavepointRequest_EndSavepoint {
    END_SAVEPOINT_UNSPECIFIED = 0,
    /** END_SAVEPOINT_RELEASE - Release the savepoint. */
    END_SAVEPOINT_RELEASE = 1,
    /** END_SAVEPOINT_ROLLBACK - Roll back to a savepoint. */
    END_SAVEPOINT_ROLLBACK = 2,
    UNRECOGNIZED = -1
}
/**
 * Represents a SQL query. Used in the command member of FlightDescriptor
 * for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *    Fields on this schema may contain the following metadata:
 *    - ARROW:FLIGHT:SQL:CATALOG_NAME      - Table's catalog name
 *    - ARROW:FLIGHT:SQL:DB_SCHEMA_NAME    - Database schema name
 *    - ARROW:FLIGHT:SQL:TABLE_NAME        - Table name
 *    - ARROW:FLIGHT:SQL:TYPE_NAME         - The data source-specific name for the data type of the column.
 *    - ARROW:FLIGHT:SQL:PRECISION         - Column precision/size
 *    - ARROW:FLIGHT:SQL:SCALE             - Column scale/decimal digits if applicable
 *    - ARROW:FLIGHT:SQL:IS_AUTO_INCREMENT - "1" indicates if the column is auto incremented, "0" otherwise.
 *    - ARROW:FLIGHT:SQL:IS_CASE_SENSITIVE - "1" indicates if the column is case-sensitive, "0" otherwise.
 *    - ARROW:FLIGHT:SQL:IS_READ_ONLY      - "1" indicates if the column is read only, "0" otherwise.
 *    - ARROW:FLIGHT:SQL:IS_SEARCHABLE     - "1" indicates if the column is searchable via WHERE clause, "0" otherwise.
 *  - GetFlightInfo: execute the query.
 */
export interface CommandStatementQuery {
    /** The SQL syntax. */
    query: string;
    /** Include the query as part of this transaction (if unset, the query is auto-committed). */
    transactionId?: Uint8Array | undefined;
}
/**
 * Represents a Substrait plan. Used in the command member of FlightDescriptor
 * for the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *    Fields on this schema may contain the following metadata:
 *    - ARROW:FLIGHT:SQL:CATALOG_NAME      - Table's catalog name
 *    - ARROW:FLIGHT:SQL:DB_SCHEMA_NAME    - Database schema name
 *    - ARROW:FLIGHT:SQL:TABLE_NAME        - Table name
 *    - ARROW:FLIGHT:SQL:TYPE_NAME         - The data source-specific name for the data type of the column.
 *    - ARROW:FLIGHT:SQL:PRECISION         - Column precision/size
 *    - ARROW:FLIGHT:SQL:SCALE             - Column scale/decimal digits if applicable
 *    - ARROW:FLIGHT:SQL:IS_AUTO_INCREMENT - "1" indicates if the column is auto incremented, "0" otherwise.
 *    - ARROW:FLIGHT:SQL:IS_CASE_SENSITIVE - "1" indicates if the column is case-sensitive, "0" otherwise.
 *    - ARROW:FLIGHT:SQL:IS_READ_ONLY      - "1" indicates if the column is read only, "0" otherwise.
 *    - ARROW:FLIGHT:SQL:IS_SEARCHABLE     - "1" indicates if the column is searchable via WHERE clause, "0" otherwise.
 *  - GetFlightInfo: execute the query.
 *  - DoPut: execute the query.
 */
export interface CommandStatementSubstraitPlan {
    /** A serialized substrait.Plan */
    plan: SubstraitPlan | undefined;
    /** Include the query as part of this transaction (if unset, the query is auto-committed). */
    transactionId?: Uint8Array | undefined;
}
/**
 * Represents a ticket resulting from GetFlightInfo with a CommandStatementQuery.
 * This should be used only once and treated as an opaque value, that is, clients should not attempt to parse this.
 */
export interface TicketStatementQuery {
    /** Unique identifier for the instance of the statement to execute. */
    statementHandle: Uint8Array;
}
/**
 * Represents an instance of executing a prepared statement. Used in the command member of FlightDescriptor for
 * the following RPC calls:
 *  - GetSchema: return the Arrow schema of the query.
 *    Fields on this schema may contain the following metadata:
 *    - ARROW:FLIGHT:SQL:CATALOG_NAME      - Table's catalog name
 *    - ARROW:FLIGHT:SQL:DB_SCHEMA_NAME    - Database schema name
 *    - ARROW:FLIGHT:SQL:TABLE_NAME        - Table name
 *    - ARROW:FLIGHT:SQL:TYPE_NAME         - The data source-specific name for the data type of the column.
 *    - ARROW:FLIGHT:SQL:PRECISION         - Column precision/size
 *    - ARROW:FLIGHT:SQL:SCALE             - Column scale/decimal digits if applicable
 *    - ARROW:FLIGHT:SQL:IS_AUTO_INCREMENT - "1" indicates if the column is auto incremented, "0" otherwise.
 *    - ARROW:FLIGHT:SQL:IS_CASE_SENSITIVE - "1" indicates if the column is case-sensitive, "0" otherwise.
 *    - ARROW:FLIGHT:SQL:IS_READ_ONLY      - "1" indicates if the column is read only, "0" otherwise.
 *    - ARROW:FLIGHT:SQL:IS_SEARCHABLE     - "1" indicates if the column is searchable via WHERE clause, "0" otherwise.
 *
 *    If the schema is retrieved after parameter values have been bound with DoPut, then the server should account
 *    for the parameters when determining the schema.
 *  - DoPut: bind parameter values. All of the bound parameter sets will be executed as a single atomic execution.
 *  - GetFlightInfo: execute the prepared statement instance.
 */
export interface CommandPreparedStatementQuery {
    /** Opaque handle for the prepared statement on the server. */
    preparedStatementHandle: Uint8Array;
}
/**
 * Represents a SQL update query. Used in the command member of FlightDescriptor
 * for the RPC call DoPut to cause the server to execute the included SQL update.
 */
export interface CommandStatementUpdate {
    /** The SQL syntax. */
    query: string;
    /** Include the query as part of this transaction (if unset, the query is auto-committed). */
    transactionId?: Uint8Array | undefined;
}
/**
 * Represents a SQL update query. Used in the command member of FlightDescriptor
 * for the RPC call DoPut to cause the server to execute the included
 * prepared statement handle as an update.
 */
export interface CommandPreparedStatementUpdate {
    /** Opaque handle for the prepared statement on the server. */
    preparedStatementHandle: Uint8Array;
}
/**
 * Represents a bulk ingestion request. Used in the command member of FlightDescriptor
 * for the the RPC call DoPut to cause the server load the contents of the stream's
 * FlightData into the target destination.
 */
export interface CommandStatementIngest {
    /** The behavior for handling the table definition. */
    tableDefinitionOptions: CommandStatementIngest_TableDefinitionOptions | undefined;
    /** The table to load data into. */
    table: string;
    /** The db_schema of the destination table to load data into. If unset, a backend-specific default may be used. */
    schema?: string | undefined;
    /** The catalog of the destination table to load data into. If unset, a backend-specific default may be used. */
    catalog?: string | undefined;
    /**
     * Store ingested data in a temporary table.
     * The effect of setting temporary is to place the table in a backend-defined namespace, and to drop the table at the end of the session.
     * The namespacing may make use of a backend-specific schema and/or catalog.
     * The server should return an error if an explicit choice of schema or catalog is incompatible with the server's namespacing decision.
     */
    temporary: boolean;
    /** Perform the ingestion as part of this transaction. If specified, results should not be committed in the event of an error/cancellation. */
    transactionId?: Uint8Array | undefined;
    /** Backend-specific options. */
    options: {
        [key: string]: string;
    };
}
/** Options for table definition behavior */
export interface CommandStatementIngest_TableDefinitionOptions {
    ifNotExist: CommandStatementIngest_TableDefinitionOptions_TableNotExistOption;
    ifExists: CommandStatementIngest_TableDefinitionOptions_TableExistsOption;
}
/** The action to take if the target table does not exist */
export declare enum CommandStatementIngest_TableDefinitionOptions_TableNotExistOption {
    /** TABLE_NOT_EXIST_OPTION_UNSPECIFIED - Do not use. Servers should error if this is specified by a client. */
    TABLE_NOT_EXIST_OPTION_UNSPECIFIED = 0,
    /** TABLE_NOT_EXIST_OPTION_CREATE - Create the table if it does not exist */
    TABLE_NOT_EXIST_OPTION_CREATE = 1,
    /** TABLE_NOT_EXIST_OPTION_FAIL - Fail if the table does not exist */
    TABLE_NOT_EXIST_OPTION_FAIL = 2,
    UNRECOGNIZED = -1
}
/** The action to take if the target table already exists */
export declare enum CommandStatementIngest_TableDefinitionOptions_TableExistsOption {
    /** TABLE_EXISTS_OPTION_UNSPECIFIED - Do not use. Servers should error if this is specified by a client. */
    TABLE_EXISTS_OPTION_UNSPECIFIED = 0,
    /** TABLE_EXISTS_OPTION_FAIL - Fail if the table already exists */
    TABLE_EXISTS_OPTION_FAIL = 1,
    /** TABLE_EXISTS_OPTION_APPEND - Append to the table if it already exists */
    TABLE_EXISTS_OPTION_APPEND = 2,
    /** TABLE_EXISTS_OPTION_REPLACE - Drop and recreate the table if it already exists */
    TABLE_EXISTS_OPTION_REPLACE = 3,
    UNRECOGNIZED = -1
}
export interface CommandStatementIngest_OptionsEntry {
    key: string;
    value: string;
}
/**
 * Returned from the RPC call DoPut when a CommandStatementUpdate,
 * CommandPreparedStatementUpdate, or CommandStatementIngest was
 * in the request, containing results from the update.
 */
export interface DoPutUpdateResult {
    /**
     * The number of records updated. A return value of -1 represents
     * an unknown updated record count.
     */
    recordCount: number;
}
/**
 * An *optional* response returned when `DoPut` is called with `CommandPreparedStatementQuery`.
 *
 * *Note on legacy behavior*: previous versions of the protocol did not return any result for
 * this command, and that behavior should still be supported by clients. In that case, the client
 * can continue as though the fields in this message were not provided or set to sensible default values.
 */
export interface DoPutPreparedStatementResult {
    /**
     * Represents a (potentially updated) opaque handle for the prepared statement on the server.
     * Because the handle could potentially be updated, any previous handles for this prepared
     * statement should be considered invalid, and all subsequent requests for this prepared
     * statement must use this new handle.
     * The updated handle allows implementing query parameters with stateless services.
     *
     * When an updated handle is not provided by the server, clients should contiue
     * using the previous handle provided by `ActionCreatePreparedStatementResonse`.
     */
    preparedStatementHandle?: Uint8Array | undefined;
}
/**
 * Request message for the "CancelQuery" action.
 *
 * Explicitly cancel a running query.
 *
 * This lets a single client explicitly cancel work, no matter how many clients
 * are involved/whether the query is distributed or not, given server support.
 * The transaction/statement is not rolled back; it is the application's job to
 * commit or rollback as appropriate. This only indicates the client no longer
 * wishes to read the remainder of the query results or continue submitting
 * data.
 *
 * This command is idempotent.
 *
 * This command is deprecated since 13.0.0. Use the "CancelFlightInfo"
 * action with DoAction instead.
 *
 * @deprecated
 */
export interface ActionCancelQueryRequest {
    /**
     * The result of the GetFlightInfo RPC that initiated the query.
     * XXX(ARROW-16902): this must be a serialized FlightInfo, but is
     * rendered as bytes because Protobuf does not really support one
     * DLL using Protobuf definitions from another DLL.
     */
    info: Uint8Array;
}
/**
 * The result of cancelling a query.
 *
 * The result should be wrapped in a google.protobuf.Any message.
 *
 * This command is deprecated since 13.0.0. Use the "CancelFlightInfo"
 * action with DoAction instead.
 *
 * @deprecated
 */
export interface ActionCancelQueryResult {
    result: ActionCancelQueryResult_CancelResult;
}
export declare enum ActionCancelQueryResult_CancelResult {
    /**
     * CANCEL_RESULT_UNSPECIFIED - The cancellation status is unknown. Servers should avoid using
     * this value (send a NOT_FOUND error if the requested query is
     * not known). Clients can retry the request.
     */
    CANCEL_RESULT_UNSPECIFIED = 0,
    /**
     * CANCEL_RESULT_CANCELLED - The cancellation request is complete. Subsequent requests with
     * the same payload may return CANCELLED or a NOT_FOUND error.
     */
    CANCEL_RESULT_CANCELLED = 1,
    /**
     * CANCEL_RESULT_CANCELLING - The cancellation request is in progress. The client may retry
     * the cancellation request.
     */
    CANCEL_RESULT_CANCELLING = 2,
    /**
     * CANCEL_RESULT_NOT_CANCELLABLE - The query is not cancellable. The client should not retry the
     * cancellation request.
     */
    CANCEL_RESULT_NOT_CANCELLABLE = 3,
    UNRECOGNIZED = -1
}
export declare const CommandGetSqlInfo: MessageFns<CommandGetSqlInfo>;
export declare const CommandGetXdbcTypeInfo: MessageFns<CommandGetXdbcTypeInfo>;
export declare const CommandGetCatalogs: MessageFns<CommandGetCatalogs>;
export declare const CommandGetDbSchemas: MessageFns<CommandGetDbSchemas>;
export declare const CommandGetTables: MessageFns<CommandGetTables>;
export declare const CommandGetTableTypes: MessageFns<CommandGetTableTypes>;
export declare const CommandGetPrimaryKeys: MessageFns<CommandGetPrimaryKeys>;
export declare const CommandGetExportedKeys: MessageFns<CommandGetExportedKeys>;
export declare const CommandGetImportedKeys: MessageFns<CommandGetImportedKeys>;
export declare const CommandGetCrossReference: MessageFns<CommandGetCrossReference>;
export declare const ActionCreatePreparedStatementRequest: MessageFns<ActionCreatePreparedStatementRequest>;
export declare const SubstraitPlan: MessageFns<SubstraitPlan>;
export declare const ActionCreatePreparedSubstraitPlanRequest: MessageFns<ActionCreatePreparedSubstraitPlanRequest>;
export declare const ActionCreatePreparedStatementResult: MessageFns<ActionCreatePreparedStatementResult>;
export declare const ActionClosePreparedStatementRequest: MessageFns<ActionClosePreparedStatementRequest>;
export declare const ActionBeginTransactionRequest: MessageFns<ActionBeginTransactionRequest>;
export declare const ActionBeginSavepointRequest: MessageFns<ActionBeginSavepointRequest>;
export declare const ActionBeginTransactionResult: MessageFns<ActionBeginTransactionResult>;
export declare const ActionBeginSavepointResult: MessageFns<ActionBeginSavepointResult>;
export declare const ActionEndTransactionRequest: MessageFns<ActionEndTransactionRequest>;
export declare const ActionEndSavepointRequest: MessageFns<ActionEndSavepointRequest>;
export declare const CommandStatementQuery: MessageFns<CommandStatementQuery>;
export declare const CommandStatementSubstraitPlan: MessageFns<CommandStatementSubstraitPlan>;
export declare const TicketStatementQuery: MessageFns<TicketStatementQuery>;
export declare const CommandPreparedStatementQuery: MessageFns<CommandPreparedStatementQuery>;
export declare const CommandStatementUpdate: MessageFns<CommandStatementUpdate>;
export declare const CommandPreparedStatementUpdate: MessageFns<CommandPreparedStatementUpdate>;
export declare const CommandStatementIngest: MessageFns<CommandStatementIngest>;
export declare const CommandStatementIngest_TableDefinitionOptions: MessageFns<CommandStatementIngest_TableDefinitionOptions>;
export declare const CommandStatementIngest_OptionsEntry: MessageFns<CommandStatementIngest_OptionsEntry>;
export declare const DoPutUpdateResult: MessageFns<DoPutUpdateResult>;
export declare const DoPutPreparedStatementResult: MessageFns<DoPutPreparedStatementResult>;
export declare const ActionCancelQueryRequest: MessageFns<ActionCancelQueryRequest>;
export declare const ActionCancelQueryResult: MessageFns<ActionCancelQueryResult>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
