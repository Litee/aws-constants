// https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html

export const AwsLambdaManagedMetricNames = {
  INVOCATIONS: "Invocations",
  ERRORS: "Errors",
  DEAD_LETTER_ERRORS: "DeadLetterErrors",
  DESTINATION_DELIVERY_FAILURES: "DestinationDeliveryFailures",
  THROTTLES: "Throttles",
  PROVISIONED_CONCURRENCY_INVOCATIONS: "ProvisionedConcurrencyInvocations",
  PROVISIONED_CONCURRENCY_SPILLOVER_INVOCATIONS:
    "ProvisionedConcurrencySpilloverInvocations",
  DURATION: "Duration",
  ITERATOR_AGE: "IteratorAge",
  CONCURRENT_EXECUTIONS: "ConcurrentExecutions",
  PROVISIONED_CONCURRENT_EXECUTIONS: "ProvisionedConcurrentExecutions",
  PROVISIONED_CONCURRENCY_UTILIZATION: "ProvisionedConcurrencyUtilization",
  UNRESERVED_CONCURRENT_EXECUTIONS: "UnreservedConcurrentExecutions",
};

/**
 * @deprecated Use AwsLambdaManagedMetricNames instead.
 */
export const LambdaManagedMetricNames = AwsLambdaManagedMetricNames;

export const AwsLambdaManagedDimensionNames = {
  FUNCTION_NAME: "FunctionName",
  RESOURCE: "Resource",
  EXECUTED_VERSION: "ExecutedVersion",
};

// https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslambda.html

export const AwsLambdaIamPolicyActions = {
  ADD_LAYER_VERSION_PERMISSION: "AddLayerVersionPermission",
  ADD_PERMISSION: "AddPermission",
  CREATE_ALIAS: "CreateAlias",
  CREATE_CODE_SIGNING_CONFIG: "CreateCodeSigningConfig",
  CREATE_EVENT_SOURCE_MAPPING: "CreateEventSourceMapping",
  CREATE_FUNCTION: "CreateFunction",
  DELETE_ALIAS: "DeleteAlias",
  DELETE_CODE_SIGNING_CONFIG: "DeleteCodeSigningConfig",
  DELETE_EVENT_SOURCE_MAPPING: "DeleteEventSourceMapping",
  DELETE_FUNCTION: "DeleteFunction",
  DELETE_FUNCTION_CODE_SIGNING_CONFIG: "DeleteFunctionCodeSigningConfig",
  DELETE_FUNCTION_CONCURRENCY: "DeleteFunctionConcurrency",
  DELETE_FUNCTION_EVENT_INVOKE_CONFIG: "DeleteFunctionEventInvokeConfig",
  DELETE_LAYER_VERSION: "DeleteLayerVersion",
  DELETE_PROVISIONED_CONCURRENCY_CONFIG: "DeleteProvisionedConcurrencyConfig",
  DISABLE_REPLICATION: "DisableReplication",
  ENABLE_REPLICATION: "EnableReplication",
  GET_ACCOUNT_SETTINGS: "GetAccountSettings",
  GET_ALIAS: "GetAlias",
  GET_CODE_SIGNING_CONFIG: "GetCodeSigningConfig",
  GET_EVENT_SOURCE_MAPPING: "GetEventSourceMapping",
  GET_FUNCTION: "GetFunction",
  GET_FUNCTION_CODE_SIGNING_CONFIG: "GetFunctionCodeSigningConfig",
  GET_FUNCTION_CONCURRENCY: "GetFunctionConcurrency",
  GET_FUNCTION_CONFIGURATION: "GetFunctionConfiguration",
  GET_FUNCTION_EVENT_INVOKE_CONFIG: "GetFunctionEventInvokeConfig",
  GET_LAYER_VERSION: "GetLayerVersion",
  GET_LAYER_VERSION_POLICY: "GetLayerVersionPolicy",
  GET_POLICY: "GetPolicy",
  GET_PROVISIONED_CONCURRENCY_CONFIG: "GetProvisionedConcurrencyConfig",
  INVOKE_ASYNC: "InvokeAsync",
  INVOKE_FUNCTION: "InvokeFunction",
  LIST_ALIASES: "ListAliases",
  LIST_CODE_SIGNING_CONFIGS: "ListCodeSigningConfigs",
  LIST_EVENT_SOURCE_MAPPINGS: "ListEventSourceMappings",
  LIST_FUNCTION_EVENT_INVOKE_CONFIGS: "ListFunctionEventInvokeConfigs",
  LIST_FUNCTIONS: "ListFunctions",
  LIST_FUNCTIONS_BY_CODE_SIGNING_CONFIG: "ListFunctionsByCodeSigningConfig",
  LIST_LAYERS: "ListLayers",
  LIST_LAYER_VERSIONS: "ListLayerVersions",
  LIST_PROVISIONED_CONCURRENCY_CONFIGS: "ListProvisionedConcurrencyConfigs",
  LIST_TAGS: "ListTags",
  LIST_VERSIONS_BY_FUNCTION: "ListVersionsByFunction",
  PUBLISH_LAYER_VERSION: "PublishLayerVersion",
  PUBLISH_VERSION: "PublishVersion",
  PUT_FUNCTION_CODE_SIGNING_CONFIG: "PutFunctionCodeSigningConfig",
  PUT_FUNCTION_CONCURRENCY: "PutFunctionConcurrency",
  PUT_FUNCTION_EVENT_INVOKE_CONFIG: "PutFunctionEventInvokeConfig",
  PUT_PROVISIONED_CONCURRENCY_CONFIG: "PutProvisionedConcurrencyConfig",
  REMOVE_LAYER_VERSION_PERMISSION: "RemoveLayerVersionPermission",
  REMOVE_PERMISSION: "RemovePermission",
  TAG_RESOURCE: "TagResource",
  UNTAG_RESOURCE: "UntagResource",
  UPDATE_ALIAS: "UpdateAlias",
  UPDATE_CODE_SIGNING_CONFIG: "UpdateCodeSigningConfig",
  UPDATE_EVENT_SOURCE_MAPPING: "UpdateEventSourceMapping",
  UPDATE_FUNCTION_CODE: "UpdateFunctionCode",
  UPDATE_FUNCTION_CODE_SIGNING_CONFIG: "UpdateFunctionCodeSigningConfig",
  UPDATE_FUNCTION_CONFIGURATION: "UpdateFunctionConfiguration",
  UPDATE_FUNCTION_EVENT_INVOKE_CONFIG: "UpdateFunctionEventInvokeConfig",
};
