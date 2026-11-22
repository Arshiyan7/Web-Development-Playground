export interface ProfileSettings {
  name: string;
  role: string;
  email: string;
}

export interface NotificationSettings {
  email: boolean;
  weeklyReport: boolean;
  newCustomer: boolean;
  failedPayment: boolean;
}

export interface SettingsData {
  profile: ProfileSettings;
  notifications: NotificationSettings;
}