import React from "react";
import PageHeader from "../components/PageHeader";
import ChartCard from "../components/ChartCard";
import AreaTrendChart from "../components/charts/AreaTrendChart";
import DonutChart from "../components/charts/DonutChart";
import { monthlyRevenue, revenueByPlan } from "../data/revenue";
import "./RevenueView.css";

export const RevenueView: React.FC = () => {
  return (
    <div className="revenue-view">
      <PageHeader
        title="Revenue"
        subtitle="Track income, plans, and recent payments"
      />

      {/* TODO (you): 3 MetricCards here: MRR, Net Revenue, Refunds */}
      <div className="revenue-metrics"></div>

      <div className="revenue-charts">
        <ChartCard
          title="Revenue Overview"
          subtitle="Monthly revenue this year"
        >
          <AreaTrendChart
            data={monthlyRevenue}
            xKey="month"
            yKey="revenue"
            valueFormatter={(v) => `$${v.toLocaleString()}`}
          />
        </ChartCard>

        <ChartCard title="Revenue by Plan" subtitle="Share of income per plan">
          <DonutChart
            data={revenueByPlan}
            nameKey="plan"
            valueKey="revenue"
            valueFormatter={(v) => `$${v.toLocaleString()}`}
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
              {/* TODO (you): one <tr> per item in `transactions` (data/revenue.ts).
                  Format the amount as currency and the date like Customers does.
                  Status cell uses <StatusBadge status={...} />. */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RevenueView;
