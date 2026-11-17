import type { MonthlyTraffic, SourceTraffic, TopPage, MonthlyUsers } from "../types/analytics";

export const trafficOverTime: MonthlyTraffic[] = [
  { month: "Jan", views: 12400 },
  { month: "Feb", views: 13800 },
  { month: "Mar", views: 13100 },
  { month: "Apr", views: 15900 },
  { month: "May", views: 17200 },
  { month: "Jun", views: 16800 },
  { month: "Jul", views: 19400 },
  { month: "Aug", views: 21100 },
  { month: "Sep", views: 20300 },
  { month: "Oct", views: 23700 },
  { month: "Nov", views: 25600 },
  { month: "Dec", views: 28900 },
];

export const trafficBySource: SourceTraffic[] = [
  { source: "Organic", visits: 14200 },
  { source: "Direct", visits: 9800 },
  { source: "Social", visits: 6400 },
  { source: "Referral", visits: 4100 },
  { source: "Email", visits: 2900 },
];

export const topPages: TopPage[] = [
  { path: "/pricing", views: 8420, bounceRate: 38.2, avgTime: "2m 41s" },
  { path: "/", views: 7910, bounceRate: 44.7, avgTime: "1m 52s" },
  { path: "/features", views: 5630, bounceRate: 36.1, avgTime: "3m 05s" },
  { path: "/blog/getting-started", views: 4280, bounceRate: 52.9, avgTime: "4m 18s" },
  { path: "/docs", views: 3760, bounceRate: 29.4, avgTime: "5m 02s" },
  { path: "/contact", views: 2150, bounceRate: 61.3, avgTime: "0m 48s" },
];

export const activeUsers: MonthlyUsers[] = [
  { month: "Jan", users: 6200 },
  { month: "Feb", users: 6900 },
  { month: "Mar", users: 7400 },
  { month: "Apr", users: 8100 },
  { month: "May", users: 8800 },
  { month: "Jun", users: 9300 },
  { month: "Jul", users: 9900 },
  { month: "Aug", users: 10600 },
  { month: "Sep", users: 11100 },
  { month: "Oct", users: 11700 },
  { month: "Nov", users: 12300 },
  { month: "Dec", users: 12890 },
];