import type { MonthlyRevenue, PlanRevenue, Transaction } from "../types/revenue";

export const monthlyRevenue: MonthlyRevenue[] = [
  { month: "Jan", revenue: 18400 },
  { month: "Feb", revenue: 21200 },
  { month: "Mar", revenue: 19800 },
  { month: "Apr", revenue: 24600 },
  { month: "May", revenue: 27300 },
  { month: "Jun", revenue: 26100 },
  { month: "Jul", revenue: 29800 },
  { month: "Aug", revenue: 32400 },
  { month: "Sep", revenue: 31000 },
  { month: "Oct", revenue: 35700 },
  { month: "Nov", revenue: 38900 },
  { month: "Dec", revenue: 45210 },
];

export const revenueByPlan: PlanRevenue[] = [
  { plan: "Starter", revenue: 6200 },
  { plan: "Pro", revenue: 18650 },
  { plan: "Enterprise", revenue: 26560 },
];

export const transactions: Transaction[] = [
  { id: "TX-1041", customer: "Amelia Hart", amount: 2400, status: "paid", date: "2026-11-14" },
  { id: "TX-1040", customer: "Omar Siddiqui", amount: 149, status: "paid", date: "2026-11-13" },
  { id: "TX-1039", customer: "Lena Fischer", amount: 149, status: "pending", date: "2026-11-13" },
  { id: "TX-1038", customer: "Sofia Marquez", amount: 2400, status: "paid", date: "2026-11-11" },
  { id: "TX-1037", customer: "Daniel Okafor", amount: 49, status: "failed", date: "2026-11-10" },
  { id: "TX-1036", customer: "Hassan Raza", amount: 149, status: "paid", date: "2026-11-09" },
  { id: "TX-1035", customer: "Chloe Bennett", amount: 49, status: "pending", date: "2026-11-08" },
  { id: "TX-1034", customer: "Yuki Tanaka", amount: 149, status: "failed", date: "2026-11-06" },
];