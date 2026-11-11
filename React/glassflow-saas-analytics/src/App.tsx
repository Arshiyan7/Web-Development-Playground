import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
import { Routes, Route } from "react-router";
import './App.css';
import "./App.css";

export function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<DashboardView />} />
            {/* add each page as you build it:
            <Route path="/analytics" element={<AnalyticsView />} />
            <Route path="/customers" element={<CustomersView />} />
            <Route path="/revenue" element={<RevenueView />} />
            <Route path="/settings" element={<SettingsView />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;