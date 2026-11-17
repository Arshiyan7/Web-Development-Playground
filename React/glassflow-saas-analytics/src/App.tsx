import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
import { Routes, Route } from "react-router";
import CustomersView from "./views/CustomersView";
import SettingsView from './views/SettingsView';
import AnalyticsView from "./views/AnalyticsView";
import RevenueView from './views/RevenueView';
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
            <Route path="/customers" element={<CustomersView />} />X
            <Route path="/settings" element={<SettingsView />} /> 
            ◘<Route path="/analytics" element={<AnalyticsView />} />
            ◘<Route path="/revenue" element={<RevenueView />} />
            
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;