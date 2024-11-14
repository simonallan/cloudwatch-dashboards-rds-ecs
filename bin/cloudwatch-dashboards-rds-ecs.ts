#!/usr/bin/env node
import "source-map-support/register";
import { App, Aws } from "aws-cdk-lib";
import { CloudwatchDashboardsRdsEcsStack } from "../lib/cloudwatch-dashboards-rds-ecs-stack";

const app = new App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT || Aws.ACCOUNT_ID,
  region: "eu-west-2",
};

export const PRODUCTION_ENVIRONMENT_NAME = "production";
export const INTEGRATION_ENVIRONMENT_NAME = "integration";

// Ensure we run this in the correct accounts
if (!["651948078005", "921806190493"].includes(env.account)) {
  throw new Error(
    'Please ensure this script is being used with the following AWS accounts: "921806190493": production, "651948078005": integration',
  );
}

if (!process.env.ENVIRONMENT_NAME)
  throw new Error("Environment variable ENVIRONMENT_NAME must be defined");

const environment: string = process.env.ENVIRONMENT_NAME;

new CloudwatchDashboardsRdsEcsStack(
  app,
  `wip-cloudwatch-monitoring-stack-${environment}`,
  {
    env,
    environment,
  },
);
