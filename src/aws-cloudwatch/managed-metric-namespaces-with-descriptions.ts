// from https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html
export const MetricNamespacesWithDescriptions = {
  AWS_API_GATEWAY: {
    name: "AWS/ApiGateway",
    description: "Amazon API Gateway",
  },
  AWS_APP_STREAM: { name: "AWS/AppStream", description: "AppStream 2.0" },
  AWS_APP_SYNC: { name: "AWS/AppSync", description: "AWS AppSync" },
  AWS_ATHENA: { name: "AWS/Athena", description: "Amazon Athena" },
  AWS_BILLING: {
    name: "AWS/Billing",
    description: "AWS Billing and Cost Management",
  },
  AWS_ACM_PRIVATE_CA: {
    name: "AWS/ACMPrivateCA",
    description: "ACM Private CA",
  },
  AWS_CHATBOT: { name: "AWS/Chatbot", description: "AWS Chatbot" },
  AWS_CLOUD_FRONT: { name: "AWS/CloudFront", description: "Amazon CloudFront" },
  AWS_CLOUD_HSM: { name: "AWS/CloudHSM", description: "AWS CloudHSM" },
  AWS_CLOUD_SEARCH: {
    name: "AWS/CloudSearch",
    description: "Amazon CloudSearch",
  },
  AWS_LOGS: { name: "AWS/Logs", description: "Amazon CloudWatch Logs" },
  AWS_CODE_BUILD: { name: "AWS/CodeBuild", description: "AWS CodeBuild" },
  AWS_CODE_GURU_PROFILER: {
    name: "AWS/CodeGuruProfiler",
    description: "Amazon CodeGuru Profiler",
  },
  AWS_COGNITO: { name: "AWS/Cognito", description: "Amazon Cognito" },
  AWS_CONNECT: { name: "AWS/Connect", description: "Amazon Connect" },
  AWS_DATA_SYNC: { name: "AWS/DataSync", description: "AWS DataSync" },
  AWS_DMS: { name: "AWS/DMS", description: "AWS Database Migration Service" },
  AWS_DX: { name: "AWS/DX", description: "AWS Direct Connect" },
  AWS_DOC_DB: { name: "AWS/DocDB", description: "Amazon DocumentDB" },
  AWS_DYNAMO_DB: { name: "AWS/DynamoDB", description: "Amazon DynamoDB" },
  AWS_DAX: { name: "AWS/DAX", description: "DynamoDB Accelerator (DAX)" },
  AWS_EC2: { name: "AWS/EC2", description: "Amazon EC2" },
  AWS_ELASTIC_GPUS: {
    name: "AWS/ElasticGPUs",
    description: "Amazon EC2 Elastic Graphics",
  },
  AWS_EC2_SPOT: { name: "AWS/EC2Spot", description: "Amazon EC2 Spot Fleet" },
  AWS_AUTO_SCALING: {
    name: "AWS/AutoScaling",
    description: "Amazon EC2 Auto Scaling",
  },
  AWS_ELASTIC_BEANSTALK: {
    name: "AWS/ElasticBeanstalk",
    description: "AWS Elastic Beanstalk",
  },
  AWS_EBS: { name: "AWS/EBS", description: "Amazon Elastic Block Store" },
  AWS_ECS: { name: "AWS/ECS", description: "Amazon Elastic Container Service" },
  AWS_EFS: { name: "AWS/EFS", description: "Amazon Elastic File System" },
  AWS_ELASTIC_INFERENCE: {
    name: "AWS/ElasticInference",
    description: "Amazon Elastic Inference",
  },
  AWS_APPLICATION_ELB: {
    name: "AWS/ApplicationELB",
    description: "Elastic Load Balancing",
  },
  AWS_NETWORK_ELB: {
    name: "AWS/NetworkELB",
    description: "Elastic Load Balancing",
  },
  AWS_GATEWAY_ELB: {
    name: "AWS/GatewayELB",
    description: "Elastic Load Balancing",
  },
  AWS_ELB: { name: "AWS/ELB", description: "Elastic Load Balancing" },
  AWS_ELASTIC_TRANSCODER: {
    name: "AWS/ElasticTranscoder",
    description: "Amazon Elastic Transcoder",
  },
  AWS_ELASTI_CACHE: {
    name: "AWS/ElastiCache",
    description: "Amazon ElastiCache for Memcached",
  },
  AWS_ES: { name: "AWS/ES", description: "Amazon Elasticsearch Service" },
  AWS_ELASTIC_MAP_REDUCE: {
    name: "AWS/ElasticMapReduce",
    description: "Amazon EMR",
  },
  AWS_MEDIA_CONNECT: {
    name: "AWS/MediaConnect",
    description: "AWS Elemental MediaConnect",
  },
  AWS_MEDIA_CONVERT: {
    name: "AWS/MediaConvert",
    description: "AWS Elemental MediaConvert",
  },
  AWS_MEDIA_PACKAGE: {
    name: "AWS/MediaPackage",
    description: "AWS Elemental MediaPackage",
  },
  AWS_MEDIA_STORE: {
    name: "AWS/MediaStore",
    description: "AWS Elemental MediaStore",
  },
  AWS_MEDIA_TAILOR: {
    name: "AWS/MediaTailor",
    description: "AWS Elemental MediaTailor",
  },
  AWS_EVENTS: { name: "AWS/Events", description: "Amazon EventBridge" },
  AWS_FSX: { name: "AWS/FSx", description: "Amazon FSx for Lustre" },
  AWS_GAME_LIFT: { name: "AWS/GameLift", description: "Amazon GameLift" },
  GLUE: { name: "Glue", description: "AWS Glue" },
  AWS_GROUND_STATION: {
    name: "AWS/GroundStation",
    description: "AWS Ground Station",
  },
  AWS_INSPECTOR: { name: "AWS/Inspector", description: "Amazon Inspector" },
  AWS_IVS: {
    name: "AWS/IVS",
    description: "Amazon Interactive Video Service (IVS)",
  },
  AWS_IOT: { name: "AWS/IoT", description: "AWS IoT" },
  AWS_IOT_ANALYTICS: {
    name: "AWS/IoTAnalytics",
    description: "AWS IoT Analytics",
  },
  AWS_IOT_SITE_WISE: {
    name: "AWS/IoTSiteWise",
    description: "AWS IoT SiteWise",
  },
  AWS_THINGS_GRAPH: {
    name: "AWS/ThingsGraph",
    description: "AWS IoT Things Graph",
  },
  AWS_KMS: { name: "AWS/KMS", description: "AWS Key Management Service" },
  AWS_CASSANDRA: {
    name: "AWS/Cassandra",
    description: "Amazon Keyspaces (for Apache Cassandra)",
  },
  AWS_KINESIS_ANALYTICS: {
    name: "AWS/KinesisAnalytics",
    description: "Amazon Kinesis Data Analytics",
  },
  AWS_FIREHOSE: {
    name: "AWS/Firehose",
    description: "Amazon Kinesis Data Firehose",
  },
  AWS_KINESIS: {
    name: "AWS/Kinesis",
    description: "Amazon Kinesis Data Streams",
  },
  AWS_KINESIS_VIDEO: {
    name: "AWS/KinesisVideo",
    description: "Amazon Kinesis Video Streams",
  },
  AWS_LAMBDA: { name: "AWS/Lambda", description: "AWS Lambda" },
  AWS_LEX: { name: "AWS/Lex", description: "Amazon Lex" },
  AWS_LOCATION: {
    name: "AWS/Location",
    description: "Amazon Location Service",
  },
  AWS_ML: { name: "AWS/ML", description: "Amazon Machine Learning" },
  AWS_KAFKA: {
    name: "AWS/Kafka",
    description: "Amazon Managed Streaming for Apache Kafka",
  },
  AWS_AMAZON_MQ: { name: "AWS/AmazonMQ", description: "Amazon MQ" },
  AWS_NEPTUNE: { name: "AWS/Neptune", description: "Amazon Neptune" },
  AWS_NETWORK_FIREWALL: {
    name: "AWS/NetworkFirewall",
    description: "AWS Network Firewall",
  },
  AWS_OPS_WORKS: { name: "AWS/OpsWorks", description: "AWS OpsWorks" },
  AWS_POLLY: { name: "AWS/Polly", description: "Amazon Polly" },
  AWS_QLDB: { name: "AWS/QLDB", description: "Amazon QLDB" },
  AWS_REDSHIFT: { name: "AWS/Redshift", description: "Amazon Redshift" },
  AWS_RDS: {
    name: "AWS/RDS",
    description: "Amazon Relational Database Service",
  },
  AWS_ROBOMAKER: { name: "AWS/Robomaker", description: "AWS RoboMaker" },
  AWS_ROUTE53: { name: "AWS/Route53", description: "Amazon Route 53" },
  AWS_SAGE_MAKER: { name: "AWS/SageMaker", description: "Amazon SageMaker" },
  AWS_SDK_METRICS: {
    name: "AWS/SDKMetrics",
    description: "AWS SDK Metrics for Enterprise Support",
  },
  AWS_SERVICE_CATALOG: {
    name: "AWS/ServiceCatalog",
    description: "AWS Service Catalog",
  },
  AWS_DDOS_PROTECTION: {
    name: "AWS/DDoSProtection",
    description: "AWS Shield Advanced",
  },
  AWS_SES: { name: "AWS/SES", description: "Amazon Simple Email Service" },
  AWS_SNS: {
    name: "AWS/SNS",
    description: "Amazon Simple Notification Service",
  },
  AWS_SQS: { name: "AWS/SQS", description: "Amazon Simple Queue Service" },
  AWS_S3: { name: "AWS/S3", description: "Amazon Simple Storage Service" },
  AWS_SWF: { name: "AWS/SWF", description: "Amazon Simple Workflow Service" },
  AWS_STATES: { name: "AWS/States", description: "AWS Step Functions" },
  AWS_STORAGE_GATEWAY: {
    name: "AWS/StorageGateway",
    description: "AWS Storage Gateway",
  },
  AWS_SSM_RUN_COMMAND: {
    name: "AWS/SSM-RunCommand",
    description: "AWS Systems Manager Run Command",
  },
  AWS_TEXTRACT: { name: "AWS/Textract", description: "Amazon Textract" },
  AWS_TIMESTREAM: { name: "AWS/Timestream", description: "Amazon Timestream" },
  AWS_TRANSFER: { name: "AWS/Transfer", description: "AWS Transfer for SFTP" },
  AWS_TRANSLATE: { name: "AWS/Translate", description: "Amazon Translate" },
  AWS_TRUSTED_ADVISOR: {
    name: "AWS/TrustedAdvisor",
    description: "AWS Trusted Advisor",
  },
  AWS_NAT_GATEWAY: { name: "AWS/NATGateway", description: "Amazon VPC" },
  AWS_TRANSIT_GATEWAY: {
    name: "AWS/TransitGateway",
    description: "Amazon VPC",
  },
  AWS_VPN: { name: "AWS/VPN", description: "Amazon VPC" },
  WAF: { name: "WAF", description: "AWS WAF" },
  AWS_WORK_MAIL: { name: "AWS/WorkMail", description: "Amazon WorkMail" },
  AWS_WORK_SPACES: { name: "AWS/WorkSpaces", description: "Amazon WorkSpaces" },
};
