// https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html
export const LambdaManagedMetricNames = {
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
