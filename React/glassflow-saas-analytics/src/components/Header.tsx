import React from "react";
import { Bell, User, Menu } from "lucide-react";
import "./Header.css";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="header">
      <button
        type="button"
        className="menu-btn"
        aria-label="Open menu"
        onClick={onMenuClick}
      >
        <Menu className="bell-icon" />
      </button>

      <div className="header-actions">
        <button className="notification-btn">
          <Bell className="bell-icon" />
          <span className="notification-badge"></span>
        </button>
        <div className="user-profile">
          <div className="avatar">
            <User className="avatar-icon" />
          </div>
          <div className="user-info">
            <p className="user-name">Arshiyan</p>
            <p className="user-role">Frontend Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;