import type { TransactionStatus } from "./status";

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export interface PlanRevenue {
  plan: string;
  revenue: number;
}

export interface Transaction {
  id: string;
  customer: string;
  amount: number;
  status: TransactionStatus;
  date: string; // ISO date
}