import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import type { SettingsData } from "../types/settings";
import { defaultSettings } from "../data/settings";
import { loadSettings, saveSettings, clearSettings } from "../utils/settingsStorage";
import "./SettingsView.css";

export const SettingsView: React.FC = () => {
  const [saved, setSaved] = useState<SettingsData>(loadSettings);
  const [form, setForm] = useState<SettingsData>(saved);
  const [notice, setNotice] = useState<string | null>(null);

  const hasChanges = JSON.stringify(form) !== JSON.stringify(saved);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      profile: { ...prev.profile, [name]: value },
    }));
    setNotice(null);
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, [name]: checked },
    }));
    setNotice(null);
  };

  const handleSave = () => {
    saveSettings(form);
    setSaved(form);
    setNotice("Settings saved");
  };

  const handleCancel = () => {
    setForm(saved);
    setNotice(null);
  };

  const handleChangePassword = () => {
    setNotice("Demo only: a password reset link would be sent here");
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "This resets all demo data to its defaults. Continue?"
    );
    if (!confirmed) return;

    clearSettings();
    setSaved(defaultSettings);
    setForm(defaultSettings);
    setNotice("Demo data reset to defaults");
  };

  return (
    <div className="settings-view">
      <PageHeader
        title="Settings"
        subtitle="Manage your profile, notifications, and account"
      />

      <div className="settings-stack">
        {/* ---------- Profile ---------- */}
        <section className="settings-panel glass">
          <div className="settings-panel__head">
            <h2 className="settings-panel__title">Profile</h2>
            <p className="settings-panel__desc">
              This information is shown across your workspace.
            </p>
          </div>

          <div className="settings-avatar-row">
            <div className="settings-avatar">AM</div>
            <div className="settings-avatar-actions">
              <button type="button" className="btn btn-ghost">
                Change photo
              </button>
              <p className="settings-hint">JPG or PNG, up to 2 MB</p>
            </div>
          </div>

          <div className="settings-fields">
            <div className="settings-field">
              <label htmlFor="settings-name" className="settings-label">
                Full name
              </label>
              <input
                id="settings-name"
                name="name"
                type="text"
                className="settings-input"
                value={form.profile.name}
                onChange={handleProfileChange}
              />
            </div>

            <div className="settings-field">
              <label htmlFor="settings-role" className="settings-label">
                Role
              </label>
              <input
                id="settings-role"
                name="role"
                type="text"
                className="settings-input"
                value={form.profile.role}
                onChange={handleProfileChange}
              />
            </div>

            <div className="settings-field settings-field--full">
              <label htmlFor="settings-email" className="settings-label">
                Email address
              </label>
              <input
                id="settings-email"
                name="email"
                type="email"
                className="settings-input"
                value={form.profile.email}
                onChange={handleProfileChange}
              />
            </div>
          </div>
        </section>

        {/* ---------- Notifications ---------- */}
        <section className="settings-panel glass">
          <div className="settings-panel__head">
            <h2 className="settings-panel__title">Notifications</h2>
            <p className="settings-panel__desc">
              Choose what you want to be notified about.
            </p>
          </div>

          <ul className="settings-toggles">
            <li className="settings-toggle-row">
              <div className="settings-toggle-text">
                <p className="settings-toggle-title">Email notifications</p>
                <p className="settings-toggle-desc">
                  Receive a summary of activity in your inbox.
                </p>
              </div>
              <label className="settings-switch">
                <input
                  type="checkbox"
                  role="switch"
                  name="email"
                  checked={form.notifications.email}
                  onChange={handleToggle}
                />
                <span className="settings-switch__track"></span>
              </label>
            </li>

            <li className="settings-toggle-row">
              <div className="settings-toggle-text">
                <p className="settings-toggle-title">Weekly report</p>
                <p className="settings-toggle-desc">
                  Get revenue and user metrics every Monday.
                </p>
              </div>
              <label className="settings-switch">
                <input
                  type="checkbox"
                  role="switch"
                  name="weeklyReport"
                  checked={form.notifications.weeklyReport}
                  onChange={handleToggle}
                />
                <span className="settings-switch__track"></span>
              </label>
            </li>

            <li className="settings-toggle-row">
              <div className="settings-toggle-text">
                <p className="settings-toggle-title">New customer alerts</p>
                <p className="settings-toggle-desc">
                  Be notified when a customer signs up.
                </p>
              </div>
              <label className="settings-switch">
                <input
                  type="checkbox"
                  role="switch"
                  name="newCustomer"
                  checked={form.notifications.newCustomer}
                  onChange={handleToggle}
                />
                <span className="settings-switch__track"></span>
              </label>
            </li>

            <li className="settings-toggle-row">
              <div className="settings-toggle-text">
                <p className="settings-toggle-title">Failed payment alerts</p>
                <p className="settings-toggle-desc">
                  Get alerted right away when a payment fails.
                </p>
              </div>
              <label className="settings-switch">
                <input
                  type="checkbox"
                  role="switch"
                  name="failedPayment"
                  checked={form.notifications.failedPayment}
                  onChange={handleToggle}
                />
                <span className="settings-switch__track"></span>
              </label>
            </li>
          </ul>
        </section>

        {/* ---------- Account ---------- */}
        <section className="settings-panel glass">
          <div className="settings-panel__head">
            <h2 className="settings-panel__title">Account</h2>
            <p className="settings-panel__desc">
              Security and account management.
            </p>
          </div>

          <div className="settings-account-row">
            <div className="settings-toggle-text">
              <p className="settings-toggle-title">Password</p>
              <p className="settings-toggle-desc">Last changed 3 months ago.</p>
            </div>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleChangePassword}
            >
              Change password
            </button>
          </div>

          <div className="settings-account-row">
            <div className="settings-toggle-text">
              <p className="settings-toggle-title">Reset demo data</p>
              <p className="settings-toggle-desc">
                Clear saved settings and restore the defaults.
              </p>
            </div>
            <button
              type="button"
              className="btn settings-btn-danger"
              onClick={handleDeleteAccount}
            >
              Reset data
            </button>
          </div>
        </section>

        {/* ---------- Save bar ---------- */}
        <div className="settings-actions">
          {notice && (
            <span className="settings-saved" role="status">
              {notice}
            </span>
          )}
          <button
            type="button"
            className="btn btn-ghost"
            onClick={handleCancel}
            disabled={!hasChanges}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
            disabled={!hasChanges}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;