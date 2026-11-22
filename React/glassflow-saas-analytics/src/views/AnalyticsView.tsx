import React from "react";
import PageHeader from "../components/PageHeader";
import ChartCard from "../components/ChartCard";
import MetricCard from "../components/MetricCard";
import LineTrendChart from "../components/charts/LineTrendChart";
import BarBreakdownChart from "../components/charts/BarBreakdownChart";
import type { MetricCardProps } from "../types/dashboard";
import { trafficOverTime, trafficBySource, topPages } from "../data/analytics";
import "./AnalyticsView.css";

const totalViews = trafficOverTime.reduce((sum, month) => sum + month.views, 0);

const averageBounce = topPages.length
  ? topPages.reduce((sum, page) => sum + page.bounceRate, 0) / topPages.length
  : 0;

const metrics: MetricCardProps[] = [
  {
    id: "1",
    title: "Page Views",
    value: totalViews.toLocaleString(),
    change: "14.2%",
    isPositive: true,
  },
  {
    id: "2",
    title: "Bounce Rate",
    value: `${averageBounce.toFixed(1)}%`,
    change: "2.1%",
    isPositive: false,
  },
  {
    id: "3",
    title: "Avg. Session",
    value: "3m 12s",
    change: "5.6%",
    isPositive: true,
  },
];

export const AnalyticsView: React.FC = () => {
  return (
    <div className="analytics-view">
      <PageHeader
        title="Analytics"
        subtitle="Traffic and engagement across your site"
      />

      <div className="analytics-metrics">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} {...metric} />
        ))}
      </div>

      <div className="analytics-charts">
        <ChartCard title="Traffic Overview" subtitle="Page views per month">
          <LineTrendChart
            data={trafficOverTime}
            xKey="month"
            yKey="views"
            valueFormatter={(v) => v.toLocaleString()}
          />
        </ChartCard>

        <ChartCard title="Traffic by Source" subtitle="Where visitors come from">
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
              {topPages.map((page) => (
                <tr key={page.path}>
                  <td>{page.path}</td>
                  <td className="table-num">{page.views.toLocaleString()}</td>
                  <td className="table-num">{page.bounceRate.toFixed(1)}%</td>
                  <td className="table-num">{page.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsView;