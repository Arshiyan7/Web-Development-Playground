import type { CustomerStatus } from "./customer";

export type TransactionStatus = "paid" | "pending" | "failed";
export type BadgeStatus = CustomerStatus | TransactionStatus;