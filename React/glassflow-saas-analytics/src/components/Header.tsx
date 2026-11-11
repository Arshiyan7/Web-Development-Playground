import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import './header.css'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="search-container">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search metrics, reports, or customers..."
          className="search-input"
        />
      </div>

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