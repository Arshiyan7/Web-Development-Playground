import React from "react";
import PageHeader from "../components/PageHeader";
import ChartCard from "../components/ChartCard";
import LineTrendChart from "../components/charts/LineTrendChart";
import BarBreakdownChart from "../components/charts/BarBreakdownChart";
import { trafficOverTime, trafficBySource } from "../data/analytics";
import "./AnalyticsView.css";

export const AnalyticsView: React.FC = () => {
  return (
    <div className="analytics-view">
      <PageHeader
        title="Analytics"
        subtitle="Traffic and engagement across your site"
      />

      {/* TODO (you): 3 MetricCards here: Page Views, Bounce Rate, Avg. Session */}
      <div className="analytics-metrics"></div>

      <div className="analytics-charts">
        <ChartCard title="Traffic Overview" subtitle="Page views per month">
          <LineTrendChart
            data={trafficOverTime}
            xKey="month"
            yKey="views"
            valueFormatter={(v) => v.toLocaleString()}
          />
        </ChartCard>

        <ChartCard
          title="Traffic by Source"
          subtitle="Where visitors come from"
        >
          <BarBreakdownChart
            data={trafficBySource}
            xKey="source"
            yKey="visits"
            valueFormatter={(v) => v.toLocaleString()}
          />
        </ChartCard>
      </div>

      <section className="analytics-table-card glass">
        <div className="analytics-table-head">
          <h2 className="analytics-table-title">Top Pages</h2>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Page</th>
                <th className="table-num">Views</th>
                <th className="table-num">Bounce rate</th>
                <th className="table-num">Avg. time</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO (you): one <tr> per item in topPages (data/analytics.ts) */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsView;
