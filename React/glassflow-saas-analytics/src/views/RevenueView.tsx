import React from "react";
import PageHeader from "../components/PageHeader";
import ChartCard from "../components/ChartCard";
import MetricCard from "../components/MetricCard";
import StatusBadge from "../components/StatusBadge";
import AreaTrendChart from "../components/charts/AreaTrendChart";
import DonutChart from "../components/charts/DonutChart";
import type { MetricCardProps } from "../types/dashboard";
import { monthlyRevenue, revenueByPlan, transactions } from "../data/revenue";
import { formatCurrency, formatDate } from "../utils/format";
import "./RevenueView.css";

const mrr = monthlyRevenue[monthlyRevenue.length - 1]?.revenue ?? 0;

const paidTotal = transactions
  .filter((t) => t.status === "paid")
  .reduce((sum, t) => sum + t.amount, 0);

const failedTotal = transactions
  .filter((t) => t.status === "failed")
  .reduce((sum, t) => sum + t.amount, 0);

const metrics: MetricCardProps[] = [
  {
    id: "1",
    title: "MRR",
    value: formatCurrency(mrr),
    change: "16.2%",
    isPositive: true,
  },
  {
    id: "2",
    title: "Net Revenue",
    value: formatCurrency(paidTotal),
    change: "9.4%",
    isPositive: true,
  },
  {
    id: "3",
    title: "Failed Payments",
    value: formatCurrency(failedTotal),
    change: "1.8%",
    isPositive: false,
  },
];

export const RevenueView: React.FC = () => {
  return (
    <div className="revenue-view">
      <PageHeader
        title="Revenue"
        subtitle="Track income, plans, and recent payments"
      />

      <div className="revenue-metrics">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} {...metric} />
        ))}
      </div>

      <div className="revenue-charts">
        <ChartCard title="Revenue Overview" subtitle="Monthly revenue this year">
          <AreaTrendChart
            data={monthlyRevenue}
            xKey="month"
            yKey="revenue"
            valueFormatter={formatCurrency}
          />
        </ChartCard>

        <ChartCard title="Revenue by Plan" subtitle="Share of income per plan">
          <DonutChart
            data={revenueByPlan}
            nameKey="plan"
            valueKey="revenue"
            valueFormatter={formatCurrency}
          />
        </ChartCard>
      </div>

      <section className="revenue-table-card glass">
        <div className="revenue-table-head">
          <h2 className="revenue-table-title">Recent Transactions</h2>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th className="table-num">Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.customer}</td>
                  <td className="table-num">{formatCurrency(t.amount)}</td>
                  <td>
                    <StatusBadge status={t.status} />
                  </td>
                  <td>{formatDate(t.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RevenueView;