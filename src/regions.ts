class Region {
  constructor(readonly name: string, readonly description: string) {}
}

export const Regions = {
  GovCloud: new Region("us-gov-west-1", "AWS GovCloud (US)"),
  US_GOV_EAST_1: new Region("us-gov-east-1", "AWS GovCloud (US-East)"),
  US_EAST_1: new Region("us-east-1", "US East (N. Virginia)"),
  US_EAST_2: new Region("us-east-2", "US East (Ohio)"),
  US_WEST_1: new Region("us-west-1", "US West (N. California)"),
  US_WEST_2: new Region("us-west-2", "US West (Oregon)"),
  EU_WEST_1: new Region("eu-west-1", "EU (Ireland)"),
  EU_WEST_2: new Region("eu-west-2", "EU (London)"),
  EU_WEST_3: new Region("eu-west-3", "EU (Paris)"),
  EU_CENTRAL_1: new Region("eu-central-1", "EU (Frankfurt)"),
  EU_NORTH_1: new Region("eu-north-1", "EU (Stockholm)"),
  EU_SOUTH_1: new Region("eu-south-1", "EU (Milan)"),
  AP_EAST_1: new Region("ap-east-1", "Asia Pacific (Hong Kong)"),
  AP_SOUTH_1: new Region("ap-south-1", "Asia Pacific (Mumbai)"),
  AP_SOUTHEAST_1: new Region("ap-southeast-1", "Asia Pacific (Singapore)"),
  AP_SOUTHEAST_2: new Region("ap-southeast-2", "Asia Pacific (Sydney)"),
  AP_NORTHEAST_1: new Region("ap-northeast-1", "Asia Pacific (Tokyo)"),
  AP_NORTHEAST_2: new Region("ap-northeast-2", "Asia Pacific (Seoul)"),
  SA_EAST_1: new Region("sa-east-1", "South America (Sao Paulo)"),
  CN_NORTH_1: new Region("cn-north-1", "China (Beijing)"),
  CN_NORTHWEST_1: new Region("cn-northwest-1", "China (Ningxia)"),
  CA_CENTRAL_1: new Region("ca-central-1", "Canada (Central)"),
  ME_SOUTH_1: new Region("me-south-1", "Middle East (Bahrain)"),
  AF_SOUTH_1: new Region("af-south-1", "Africa (Cape Town)"),
};
