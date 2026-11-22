import React from "react";
import { NavLink } from "react-router";
import { LayoutDashboard, LineChart, Users, DollarSign, Settings } from "lucide-react";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Analytics", icon: LineChart, path: "/analytics" },
  { label: "Customers", icon: Users, path: "/customers" },
  { label: "Revenue", icon: DollarSign, path: "/revenue" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <div className="sidebar-logo">GF</div>
          <span className="sidebar-title">GlassFlow</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === "/"}
                className="nav-item"
                onClick={onClose}
              >
                <Icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-status-card">
        <p className="status-label">Status</p>
        <p className="status-value">
          <span className="status-indicator"></span>
          Active
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;