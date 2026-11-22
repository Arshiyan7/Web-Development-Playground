import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardView from "./views/DashboardView";
import AnalyticsView from "./views/AnalyticsView";
import CustomersView from "./views/CustomersView";
import RevenueView from "./views/RevenueView";
import SettingsView from "./views/SettingsView";
import NotFoundView from "./views/NotFoundView";
import "./App.css";

export function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-container">
      <Sidebar isOpen={menuOpen} onClose={closeMenu} />
      {menuOpen && <div className="sidebar-backdrop" onClick={closeMenu} />}

      <div className="main-wrapper">
        <Header onMenuClick={openMenu} />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<DashboardView />} />
            <Route path="/analytics" element={<AnalyticsView />} />
            <Route path="/customers" element={<CustomersView />} />
            <Route path="/revenue" element={<RevenueView />} />
            <Route path="/settings" element={<SettingsView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;