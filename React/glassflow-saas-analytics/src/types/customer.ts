export type CustomerStatus = "active" | "pending" | "inactive";
export type CustomerPlan = "Free" | "Pro" | "Enterprise";

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  plan: CustomerPlan;
  status: CustomerStatus;
  joined: string; 
}