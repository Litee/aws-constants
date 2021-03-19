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
