import type { ActivityItem } from "../types/activity";

export const recentActivity: ActivityItem[] = [
  { id: "1", user: "Amelia Hart", action: "upgraded to Enterprise", time: "12m ago", kind: "upgrade" },
  { id: "2", user: "Omar Siddiqui", action: "paid invoice TX-1040", time: "1h ago", kind: "payment" },
  { id: "3", user: "Chloe Bennett", action: "signed up for Free", time: "3h ago", kind: "signup" },
  { id: "4", user: "Daniel Okafor", action: "had a failed payment", time: "5h ago", kind: "alert" },
  { id: "5", user: "Sofia Marquez", action: "paid invoice TX-1038", time: "Yesterday", kind: "payment" },
];