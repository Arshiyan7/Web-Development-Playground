import React from "react";
import PageHeader from "../components/PageHeader";
import "./SettingsView.css";

export const SettingsView: React.FC = () => {
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
                type="text"
                className="settings-input"
                defaultValue="Arshiyan"
              />
            </div>

            <div className="settings-field">
              <label htmlFor="settings-role" className="settings-label">
                Role
              </label>
              <input
                id="settings-role"
                type="text"
                className="settings-input"
                defaultValue="Frontend Admin"
              />
            </div>

            <div className="settings-field settings-field--full">
              <label htmlFor="settings-email" className="settings-label">
                Email address
              </label>
              <input
                id="settings-email"
                type="email"
                className="settings-input"
                defaultValue="arshiyan@example.com"
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
                <input type="checkbox" role="switch" defaultChecked />
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
                <input type="checkbox" role="switch" defaultChecked />
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
                <input type="checkbox" role="switch" />
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
                <input type="checkbox" role="switch" defaultChecked />
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
              <p className="settings-toggle-desc">
                Last changed 3 months ago.
              </p>
            </div>
            <button type="button" className="btn btn-ghost">
              Change password
            </button>
          </div>

          <div className="settings-account-row">
            <div className="settings-toggle-text">
              <p className="settings-toggle-title">Delete account</p>
              <p className="settings-toggle-desc">
                Permanently remove your account and all data.
              </p>
            </div>
            <button type="button" className="btn settings-btn-danger">
              Delete account
            </button>
          </div>
        </section>

        {/* ---------- Save bar ---------- */}
        <div className="settings-actions">
          <button type="button" className="btn btn-ghost">
            Cancel
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;