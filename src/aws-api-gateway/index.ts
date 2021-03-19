// https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-metrics-and-dimensions.html
export const AwsApiGatewayManagedMetricNames = {
  /**
   * Use _4XX_ERROR instead.
   */
  ERROR_4XX: "4XXError",
  _4XX_ERROR: "4XXError",
  /**
   * Use _5xx_ERROR instead.
   */
  ERROR_5xx: "5XXError",
  _5xx_ERROR: "5XXError",
  CACHE_HIT_COUNT: "CacheHitCount",
  CACHE_MISS_COUNT: "CacheMissCount",
  COUNT: "Count",
  INTEGRATION_LATENCY: "IntegrationLatency",
  LATENCY: "Latency",
};

/**
 * @deprecated Use AwsApiGatewayManagedMetricNames instead.
 */
export const ApiGatewayManagedMetricNames = AwsApiGatewayManagedMetricNames;

export const AwsApiGatewayManagedMetricDimensionNames = {
  API_NAME: "ApiName",
  METHOD: "Method",
  RESOURCE: "Resource",
  STAGE: "Stage",
};

/**
 * @deprecated Use AwsApiGatewayManagedMetricDimensionNames instead.
 */
export const ApiGatewayManagedMetricDimensionNames = AwsApiGatewayManagedMetricDimensionNames;
