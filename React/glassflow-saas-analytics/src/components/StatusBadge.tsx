import React from "react";
import type { BadgeStatus } from "../types/status";
import "./StatusBadge.css";

const labels: Record<BadgeStatus, string> = {
  active: "Active",
  pending: "Pending",
  inactive: "Inactive",
  paid: "Paid",
  failed: "Failed",
};

export const StatusBadge: React.FC<{ status: BadgeStatus }> = ({ status }) => {
  return <span className={`status-badge status-badge--${status}`}>{labels[status]}</span>;
};

export default StatusBadge;