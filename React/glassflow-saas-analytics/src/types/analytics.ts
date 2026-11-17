export interface MonthlyTraffic {
  month: string;
  views: number;
}
export interface MonthlyUsers {
  month: string;
  users: number;
}

export interface SourceTraffic {
  source: string;
  visits: number;
}

export interface TopPage {
  path: string;
  views: number;
  bounceRate: number; // percent, e.g. 42.5
  avgTime: string;    // e.g. "2m 14s"
}