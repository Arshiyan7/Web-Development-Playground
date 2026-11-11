import React from 'react';
import MetricCard from '../components/MetricCard';
import type { MetricCardProps } from '../types/dashboard';
import './DashboardView.css';


const mockMetrics: MetricCardProps[] = [
  { id: '1', title: 'Total Revenue', value: '$45,210.88', change: '12.5%', isPositive: true },
  { id: '2', title: 'Active Users', value: '12,890', change: '8.1%', isPositive: true },
  { id: '3', title: 'Retention Rate', value: '98.5%', change: '0.4%', isPositive: false },
];

export const DashboardView: React.FC = () => {
  return (
    <div className="dashboard-view">
      <div className="page-header">
        <h1 className="page-title">Dashboard Overview</h1>
        <p className="page-subtitle">Real-time metrics and platform analytics</p>
      </div>

      <div className="metrics-grid">
        {mockMetrics.map((metric) => (
          <MetricCard key={metric.id} {...metric} />
        ))}
      </div>

      <div className="widgets-grid">
        <div className="chart-container-slot">
          <p className="slot-placeholder">AnalyticsChart (Recharts) Slot</p>
        </div>
        <div className="table-container-slot">
          <p className="slot-placeholder">RecentActivity Table Slot</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;