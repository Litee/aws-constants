//docs.aws.amazon.com/step-functions/latest/dg/procedure-cw-metrics.html
export const AwsStepFunctionsManagedMetricNames = {
  EXECUTION_TIME: "ExecutionTime",
  EXECUTION_THROTTLED: "ExecutionThrottled",
  EXECUTIONS_ABORTED: "ExecutionsAborted",
  EXECUTIONS_FAILED: "ExecutionsFailed",
  EXECUTIONS_STARTED: "ExecutionsStarted",
  EXECUTIONS_SUCCEEDED: "ExecutionsSucceeded",
  EXECUTIONS_TIMED_OUT: "ExecutionsTimedOut",
  ACTIVITY_RUN_TIME: "ActivityRunTime",
  ACTIVITY_SCHEDULE_TIME: "ActivityScheduleTime",
  ACTIVITY_TIME: "ActivityTime",
  ACTIVITIES_FAILED: "ActivitiesFailed",
  ACTIVITIES_HEARTBEAT_TIMED_OUT: "ActivitiesHeartbeatTimedOut",
  ACTIVITIES_SCHEDULED: "ActivitiesScheduled",
  ACTIVITIES_STARTED: "ActivitiesStarted",
  ACTIVITIES_SUCCEEDED: "ActivitiesSucceeded",
  ACTIVITIES_TIMED_OUT: "ActivitiesTimedOut",
  LAMBDA_FUNCTION_RUN_TIME: "LambdaFunctionRunTime",
  LAMBDA_FUNCTION_SCHEDULE_TIME: "LambdaFunctionScheduleTime",
  LAMBDA_FUNCTION_TIME: "LambdaFunctionTime",
  LAMBDA_FUNCTIONS_FAILED: "LambdaFunctionsFailed",
  LAMBDA_FUNCTIONS_SCHEDULED: "LambdaFunctionsScheduled",
  LAMBDA_FUNCTIONS_STARTED: "LambdaFunctionsStarted",
  LAMBDA_FUNCTIONS_SUCCEEDED: "LambdaFunctionsSucceeded",
  LAMBDA_FUNCTIONS_TIMED_OUT: "LambdaFunctionsTimedOut",
  SERVICE_INTEGRATION_RUN_TIME: "ServiceIntegrationRunTime",
  SERVICE_INTEGRATION_SCHEDULE_TIME: "ServiceIntegrationScheduleTime",
  SERVICE_INTEGRATION_TIME: "ServiceIntegrationTime",
  SERVICE_INTEGRATIONS_FAILED: "ServiceIntegrationsFailed",
  SERVICE_INTEGRATIONS_SCHEDULED: "ServiceIntegrationsScheduled",
  SERVICE_INTEGRATIONS_STARTED: "ServiceIntegrationsStarted",
  SERVICE_INTEGRATIONS_SUCCEEDED: "ServiceIntegrationsSucceeded",
  SERVICE_INTEGRATIONS_TIMED_OUT: "ServiceIntegrationsTimedOut",
  THROTTLED_EVENTS: "ThrottledEvents",
  PROVISIONED_BUCKET_SIZE: "ProvisionedBucketSize",
  PROVISIONED_REFILL_RATE: "ProvisionedRefillRate",
  CONSUMED_CAPACITY: "ConsumedCapacity",
};

/**
 * @deprecated Use AwsStepFunctionsManagedMetricNames instead.
 */
export const StepFunctionsManagedMetricNames = AwsStepFunctionsManagedMetricNames;

export const AwsStepFunctionsManagedMetricDimensionNames = {
  STATE_MACHINE_ARN: "StateMachineArn",
  ACTIVITY_ARN: "ActivityArn",
  LAMBDA_FUNCTION_ARN: "LambdaFunctionArn",
  SERVICE_INTEGRATION_RESOURCE_ARN: "ServiceIntegrationResourceArn",
  STATE_TRANSITION: "StateTransition",
  API_NAME: "APIName",
};

/**
 * @deprecated Use AwsStepFunctionsManagedMetricDimensionNames instead.
 */
export const StepFunctionsManagedMetricDimensionNames = AwsStepFunctionsManagedMetricDimensionNames;
