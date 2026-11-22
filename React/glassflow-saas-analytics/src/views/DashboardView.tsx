import React from "react";
import PageHeader from "../components/PageHeader";
import MetricCard from "../components/MetricCard";
import ChartCard from "../components/ChartCard";
import AreaTrendChart from "../components/charts/AreaTrendChart";
import RecentActivity from "../components/RecentActivity";
import type { MetricCardProps } from "../types/dashboard";
import { activeUsers } from "../data/analytics";
import { recentActivity } from "../data/activity";
import "./DashboardView.css";

const mockMetrics: MetricCardProps[] = [
  {
    id: "1",
    title: "Total Revenue",
    value: "$45,210.88",
    change: "12.5%",
    isPositive: true,
  },
  {
    id: "2",
    title: "Active Users",
    value: "12,890",
    change: "8.1%",
    isPositive: true,
  },
  {
    id: "3",
    title: "Retention Rate",
    value: "98.5%",
    change: "0.4%",
    isPositive: false,
  },
];

export const DashboardView: React.FC = () => {
  return (
    <div className="dashboard-view">
      <PageHeader
        title="Dashboard Overview"
        subtitle="Real-time metrics and platform analytics"
      />

      <div className="metrics-grid">
        {mockMetrics.map((metric) => (
          <MetricCard key={metric.id} {...metric} />
        ))}
      </div>

      <div className="widgets-grid">
        <ChartCard
          title="Active Users"
          subtitle="Monthly active users this year"
        >
          <AreaTrendChart
            data={activeUsers}
            xKey="month"
            yKey="users"
            valueFormatter={(v) => v.toLocaleString()}
          />
        </ChartCard>

        <RecentActivity activities={recentActivity} />
      </div>
    </div>
  );
};

export default DashboardView;