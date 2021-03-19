// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/metrics-dimensions.html
export const AwsDynamoDbManagedMetricNames = {
  ACCOUNT_MAX_READS: "AccountMaxReads",
  ACCOUNT_MAX_TABLE_LEVEL_READS: "AccountMaxTableLevelReads",
  ACCOUNT_MAX_TABLE_LEVEL_WRITES: "AccountMaxTableLevelWrites",
  ACCOUNT_MAX_WRITES: "AccountMaxWrites",
  ACCOUNT_PROVISIONED_READ_CAPACITY_UTILIZATION:
    "AccountProvisionedReadCapacityUtilization",
  ACCOUNT_PROVISIONED_WRITE_CAPACITY_UTILIZATION:
    "AccountProvisionedWriteCapacityUtilization",
  AGE_OF_OLDEST_UNREPLICATED_RECORD: "AgeOfOldestUnreplicatedRecord",
  CONDITIONAL_CHECK_FAILED_REQUESTS: "ConditionalCheckFailedRequests",
  CONSUMED_CHANGE_DATA_CAPTURE_UNITS: "ConsumedChangeDataCaptureUnits",
  CONSUMED_READ_CAPACITY_UNITS: "ConsumedReadCapacityUnits",
  CONSUMED_WRITE_CAPACITY_UNITS: "ConsumedWriteCapacityUnits",
  MAX_PROVISIONED_TABLE_READ_CAPACITY_UTILIZATION:
    "MaxProvisionedTableReadCapacityUtilization",
  MAX_PROVISIONED_TABLE_WRITE_CAPACITY_UTILIZATION:
    "MaxProvisionedTableWriteCapacityUtilization",
  ONLINE_INDEX_CONSUMED_WRITE_CAPACITY: "OnlineIndexConsumedWriteCapacity",
  ONLINE_INDEX_PERCENTAGE_PROGRESS: "OnlineIndexPercentageProgress",
  ONLINE_INDEX_THROTTLE_EVENTS: "OnlineIndexThrottleEvents",
  PENDING_REPLICATION_COUNT: "PendingReplicationCount",
  PROVISIONED_READ_CAPACITY_UNITS: "ProvisionedReadCapacityUnits",
  PROVISIONED_WRITE_CAPACITY_UNITS: "ProvisionedWriteCapacityUnits",
  READ_THROTTLE_EVENTS: "ReadThrottleEvents",
  REPLICATION_LATENCY: "ReplicationLatency",
  RETURNED_BYTES: "ReturnedBytes",
  RETURNED_ITEM_COUNT: "ReturnedItemCount",
  RETURNED_RECORDS_COUNT: "ReturnedRecordsCount",
  SUCCESSFUL_REQUEST_LATENCY: "SuccessfulRequestLatency",
  SYSTEM_ERRORS: "SystemErrors",
  TIME_TO_LIVE_DELETED_ITEM_COUNT: "TimeToLiveDeletedItemCount",
  THROTTLED_PUT_RECORD_COUNT: "ThrottledPutRecordCount",
  THROTTLED_REQUESTS: "ThrottledRequests",
  TRANSACTION_CONFLICT: "TransactionConflict",
  USER_ERRORS: "UserErrors",
  WRITE_THROTTLE_EVENTS: "WriteThrottleEvents",
};

// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/metrics-dimensions.html
export const AwsDynamoDbManagedMetricDimensionNames = {
  DELEGATED_OPERATION: "DelegatedOperation",
  GLOBAL_SECONDARY_INDEX_NAME: "GlobalSecondaryIndexName",
  OPERATION_TYPE: "OperationType",
  OPERATION: "Operation",
  RECEIVING_REGION: "ReceivingRegion",
  STREAM_LABEL: "StreamLabel",
  TABLE_NAME: "TableName",
  VERB: "Verb",
};

// https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html
export const AwsDynamoDbIamPolicyActions = {
  BATCH_GET_ITEM: "BatchGetItem",
  BATCH_WRITE_ITEM: "BatchWriteItem",
  CONDITION_CHECK_ITEM: "ConditionCheckItem",
  CREATE_BACKUP: "CreateBackup",
  CREATE_GLOBAL_TABLE: "CreateGlobalTable",
  CREATE_TABLE: "CreateTable",
  CREATE_TABLE_REPLICA: "CreateTableReplica",
  DELETE_BACKUP: "DeleteBackup",
  DELETE_ITEM: "DeleteItem",
  DELETE_TABLE: "DeleteTable",
  DELETE_TABLE_REPLICA: "DeleteTableReplica",
  DESCRIBE_BACKUP: "DescribeBackup",
  DESCRIBE_CONTINUOUS_BACKUPS: "DescribeContinuousBackups",
  DESCRIBE_CONTRIBUTOR_INSIGHTS: "DescribeContributorInsights",
  DESCRIBE_EXPORT: "DescribeExport",
  DESCRIBE_GLOBAL_TABLE: "DescribeGlobalTable",
  DESCRIBE_GLOBAL_TABLE_SETTINGS: "DescribeGlobalTableSettings",
  DESCRIBE_KINESIS_STREAMING_DESTINATION: "DescribeKinesisStreamingDestination",
  DESCRIBE_LIMITS: "DescribeLimits",
  DESCRIBE_RESERVED_CAPACITY: "DescribeReservedCapacity",
  DESCRIBE_RESERVED_CAPACITY_OFFERINGS: "DescribeReservedCapacityOfferings",
  DESCRIBE_STREAM: "DescribeStream",
  DESCRIBE_TABLE: "DescribeTable",
  DESCRIBE_TABLE_REPLICA_AUTO_SCALING: "DescribeTableReplicaAutoScaling",
  DESCRIBE_TIME_TO_LIVE: "DescribeTimeToLive",
  DISABLE_KINESIS_STREAMING_DESTINATION: "DisableKinesisStreamingDestination",
  ENABLE_KINESIS_STREAMING_DESTINATION: "EnableKinesisStreamingDestination",
  EXPORT_TABLE_TO_POINT_IN_TIME: "ExportTableToPointInTime",
  GET_ITEM: "GetItem",
  GET_RECORDS: "GetRecords",
  GET_SHARD_ITERATOR: "GetShardIterator",
  LIST_BACKUPS: "ListBackups",
  LIST_CONTRIBUTOR_INSIGHTS: "ListContributorInsights",
  LIST_EXPORTS: "ListExports",
  LIST_GLOBAL_TABLES: "ListGlobalTables",
  LIST_STREAMS: "ListStreams",
  LIST_TABLES: "ListTables",
  LIST_TAGS_OF_RESOURCE: "ListTagsOfResource",
  PARTI_QL_DELETE: "PartiQLDelete",
  PARTI_QL_INSERT: "PartiQLInsert",
  PARTI_QL_SELECT: "PartiQLSelect",
  PARTI_QL_UPDATE: "PartiQLUpdate",
  PURCHASE_RESERVED_CAPACITY_OFFERINGS: "PurchaseReservedCapacityOfferings",
  PUT_ITEM: "PutItem",
  QUERY: "Query",
  RESTORE_TABLE_FROM_BACKUP: "RestoreTableFromBackup",
  RESTORE_TABLE_TO_POINT_IN_TIME: "RestoreTableToPointInTime",
  SCAN: "Scan",
  TAG_RESOURCE: "TagResource",
  UNTAG_RESOURCE: "UntagResource",
  UPDATE_CONTINUOUS_BACKUPS: "UpdateContinuousBackups",
  UPDATE_CONTRIBUTOR_INSIGHTS: "UpdateContributorInsights",
  UPDATE_GLOBAL_TABLE: "UpdateGlobalTable",
  UPDATE_GLOBAL_TABLE_SETTINGS: "UpdateGlobalTableSettings",
  UPDATE_ITEM: "UpdateItem",
  UPDATE_TABLE: "UpdateTable",
  UPDATE_TABLE_REPLICA_AUTO_SCALING: "UpdateTableReplicaAutoScaling",
  UPDATE_TIME_TO_LIVE: "UpdateTimeToLive",
};

// https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html
export const AwsDynamoDbIamPolicyConditionKeys = {
  ATTRIBUTES: "dynamodb:Attributes",
  ENCLOSING_OPERATION: "dynamodb:EnclosingOperation",
  FULL_TABLE_SCAN: "dynamodb:FullTableScan",
  LEADING_KEYS: "dynamodb:LeadingKeys",
  RETURN_CONSUMED_CAPACITY: "dynamodb:ReturnConsumedCapacity",
  RETURN_VALUES: "dynamodb:ReturnValues",
  SELECT: "dynamodb:Select",
};

// https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html

export interface CreateAwsDynamoDbTableArnParams {
  partition: string;
  region: string;
  account: string;
  tableName: string;
}

export const createAwsDynamoDbTableArn = ({
  partition,
  region,
  account,
  tableName,
}: CreateAwsDynamoDbTableArnParams): string => {
  return `arn:${partition}:dynamodb:${region}:${account}:table/${tableName}`;
};

export interface CreateAwsDynamoDbIndexArnParams
  extends CreateAwsDynamoDbTableArnParams {
  indexName: string;
}

export const createAwsDynamoDbIndexArn = ({
  partition,
  region,
  account,
  tableName,
  indexName,
}: CreateAwsDynamoDbIndexArnParams): string => {
  return `arn:${partition}:dynamodb:${region}:${account}:table/${tableName}/index/${indexName}`;
};

export interface CreateAwsDynamoDbStreamArnParams
  extends CreateAwsDynamoDbTableArnParams {
  streamName: string;
}

export const createAwsDynamoDbStreamArn = ({
  partition,
  region,
  account,
  tableName,
  streamName,
}: CreateAwsDynamoDbStreamArnParams): string => {
  return `arn:${partition}:dynamodb:${region}:${account}:table/${tableName}/stream/${streamName}`;
};

export interface CreateAwsDynamoDbBackupArnParams
  extends CreateAwsDynamoDbTableArnParams {
  backupName: string;
}

export const createAwsDynamoDbBackupArn = ({
  partition,
  region,
  account,
  tableName,
  backupName,
}: CreateAwsDynamoDbBackupArnParams): string => {
  return `arn:${partition}:dynamodb:${region}:${account}:table/${tableName}/backup/${backupName}`;
};

export interface CreateAwsDynamoDbExportArnParams
  extends CreateAwsDynamoDbTableArnParams {
  exportName: string;
}

export const createAwsDynamoDbExportArn = ({
  partition,
  region,
  account,
  tableName,
  exportName,
}: CreateAwsDynamoDbExportArnParams): string => {
  return `arn:${partition}:dynamodb:${region}:${account}:table/${tableName}/export/${exportName}`;
};

export interface CreateAwsDynamoDbGlobalTableArnParams {
  partition: string;
  account: string;
  globalTableName: string;
}

export const createAwsDynamoDbGlobalTableArn = ({
  partition,
  account,
  globalTableName,
}: CreateAwsDynamoDbGlobalTableArnParams): string => {
  return `arn:${partition}:dynamodb::${account}:global-table/${globalTableName}`;
};
