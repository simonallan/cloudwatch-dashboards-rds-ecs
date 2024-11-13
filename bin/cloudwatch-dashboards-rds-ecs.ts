#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CloudwatchDashboardsRdsEcsStack } from "../lib/cloudwatch-dashboards-rds-ecs-stack";

const app = new cdk.App();
new CloudwatchDashboardsRdsEcsStack(app, "CloudwatchDashboardsRdsEcsStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
