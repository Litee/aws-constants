// https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html
export const AwsEc2ManagedMetricNames = {
  CPU_UTILIZATION: "CPUUtilization",
  DISK_READ_OPS: "DiskReadOps",
  DISK_WRITE_OPS: "DiskWriteOps",
  DISK_READ_BYTES: "DiskReadBytes",
  DISK_WRITE_BYTES: "DiskWriteBytes",
  NETWORK_IN: "NetworkIn",
  NETWORK_OUT: "NetworkOut",
  NETWORK_PACKETS_IN: "NetworkPacketsIn",
  NETWORK_PACKETS_OUT: "NetworkPacketsOut",
  METADATA_NO_TOKEN: "MetadataNoToken",
  CPU_CREDIT_USAGE: "CPUCreditUsage",
  CPU_CREDIT_BALANCE: "CPUCreditBalance",
  CPU_SURPLUS_CREDIT_BALANCE: "CPUSurplusCreditBalance",
  CPU_SURPLUS_CREDITS_CHARGED: "CPUSurplusCreditsCharged",
  EBS_READ_OPS: "EBSReadOps",
  EBS_WRITE_OPS: "EBSWriteOps",
  EBS_READ_BYTES: "EBSReadBytes",
  EBS_WRITE_BYTES: "EBSWriteBytes",
  EBS_IO_BALANCE: "EBSIOBalance%",
  EBS_BYTE_BALANCE: "EBSByteBalance%",
  STATUS_CHECK_FAILED: "StatusCheckFailed",
  STATUS_CHECK_FAILED_INSTANCE: "StatusCheckFailed_Instance",
  STATUS_CHECK_FAILED_SYSTEM: "StatusCheckFailed_System",
  RESOURCE_COUNT: "ResourceCount",
};

/**
 * @deprecated Use AwsEc2ManagedMetricNames instead.
 */
export const Ec2ManagedMetricNames = AwsEc2ManagedMetricNames;

export const AwsEc2ManagedMetricDimensionNames = {
  AUTO_SCALING_GROUP_NAME: "AutoScalingGroupName",
  IMAGE_ID: "ImageId",
  INSTANCE_ID: "InstanceId",
  INSTANCE_TYPE: "InstanceType",
  SERVICE: "Service",
  TYPE: "Type",
  RESOURCE: "Resource",
  CLASS: "Class",
};

/**
 * @deprecated Use AwsEc2ManagedMetricDimensionNames instead.
 */
export const Ec2ManagedMetricDimensionNames = AwsEc2ManagedMetricDimensionNames;
