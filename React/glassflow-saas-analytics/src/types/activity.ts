export type ActivityKind = "signup" | "payment" | "upgrade" | "alert";

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  time: string; // e.g. "2h ago"
  kind: ActivityKind;
}