import React from "react";
import type { CustomerStatus } from "../types/customer";
import "./StatusBadge.css";

const labels: Record<CustomerStatus, string> = {
  active: "Active",
  pending: "Pending",
  inactive: "Inactive",
};

export const StatusBadge: React.FC<{ status: CustomerStatus }> = ({ status }) => {
  return <span className={`status-badge status-badge--${status}`}>{labels[status]}</span>;
};

export default StatusBadge;