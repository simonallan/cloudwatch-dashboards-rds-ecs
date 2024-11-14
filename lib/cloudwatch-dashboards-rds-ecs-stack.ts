import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import Monitoring from "../lib/monitoring-stack";

interface MonitoringStackProps extends cdk.StackProps {
  readonly environment: string;
}
export class CloudwatchDashboardsRdsEcsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MonitoringStackProps) {
    super(scope, id, props);

    new Monitoring(this, "Monitoring", {
      clusterName: `ofr-fws-application-${props.environment}`,
    });
  }
}
