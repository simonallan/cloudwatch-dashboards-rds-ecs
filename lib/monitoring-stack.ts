import { Dashboard, TextWidget } from "aws-cdk-lib/aws-cloudwatch";
import { Construct } from "constructs";

interface MonitoringProps {
  clusterName: string;
}

export default class Monitoring extends Construct {
  public readonly dashboard: Dashboard;

  constructor(scope: Construct, id: string, props: MonitoringProps) {
    super(scope, id);

    this.dashboard = new Dashboard(this, "Dashboard", {
      start: "-P3H",
    });

    /*
     * Just a test - we'll call sub-constructs (is that a thing?) from here instead
     * as seen at https://codegenie.codes/blog/creating-aws-cloudwatch-dashboards-and-alarms-with-cdk/
     */

    this.dashboard.addWidgets(
      new TextWidget({
        markdown: `## ${props.clusterName} rds metrics`,
        width: 24,
      }),
    );
  }
}
