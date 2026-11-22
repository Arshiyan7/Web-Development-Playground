import type { SettingsData } from "../types/settings";

export const defaultSettings: SettingsData = {
  profile: {
    name: "Arshiyan",
    role: "Frontend Admin",
    email: "arshiyan@example.com",
  },
  notifications: {
    email: true,
    weeklyReport: true,
    newCustomer: false,
    failedPayment: true,
  },
};