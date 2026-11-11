export interface MetricCardProps {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface ActivityItem {
  id: string;
  customerName: string;
  email: string;
  amount: string;
  status: 'completed' | 'pending';
}