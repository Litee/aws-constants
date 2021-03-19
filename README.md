# aws-constants

A collection of AWS constants - names of regions, CloudWatch namespaces and so on. TypeScript definitions included.

WARNING: This is an experimental project. I will try to keep it backward compatible, but cannot guarantee it until I decide to release version 1.0.0.

## How to install?

`npm install aws-constants`

## Service Constants

| Service | Metric Names | Dimension Names | IAM Actions | Resource ARN Constructors
|-|-|-|-|-
| AWS API Gateway | `AwsApiGatewayManagedMetricNames` |  `AwsApiGatewayManagedMetricDimensionNames` | `AwsApiGatewayIamPolicyActions` | `createAwsApiGatewayExecuteApiGeneralArn`
| AWS DynamoDB | `AwsDynamoDbManagedMetricNames` | `AwsDynamoDbManagedMetricDimensionNames` | `AwsDynamoDbIamPolicyActions` | `createAwsDynamoDbTableArn`, `createAwsDynamoDbIndexArn`, `createAwsDynamoDbStreamArn`, `createAwsDynamoDbBackupArn`, `createAwsDynamoDbExportArn`, `createAwsDynamoDbGlobalTableArn`
| AWS EC2 | `AwsEc2ManagedMetricNames` | `AwsEc2ManagedMetricDimensionNames` | `AwsEc2IamPolicyActions` | TODO
| AWS Lambda | `AwsLambdaManagedMetricNames` | `AwsLambdaManagedDimensionNames` | `AwsLambdaIamPolicyActions` | TODO
| AWS Step Functions | `AwsStepFunctionsManagedMetricNames` | `AwsStepFunctionsManagedMetricDimensionNames` | `AwsStepFunctionsIamPolicyActions` | `createAwsStepFunctionsActivityArn`, `createAwsStepFunctionsStateMachineArn`, `createAwsStepFunctionsExecutionArn`

## Other Constants

* AWS regions: `Regions`
* AWS CloudWatch: `MetricNamespacesWithDescriptions` and `MetricNamespaces`
* AWS IAM: `AwsServicePrincipals`
