// https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-metrics-and-dimensions.html
export const ApiGatewayManagedMetricNames = {
  ERROR_4XX: "4XXError",
  ERROR_5xx: "5XXError",
  CACHE_HIT_COUNT: "CacheHitCount",
  CACHE_MISS_COUNT: "CacheMissCount",
  COUNT: "Count",
  INTEGRATION_LATENCY: "IntegrationLatency",
  LATENCY: "Latency",
};

export const ApiGatewayManagedMetricDimensions = {
  API_NAME: "ApiName",
  METHOD: "Method",
  RESOURCE: "Resource",
  STAGE: "Stage",
};
