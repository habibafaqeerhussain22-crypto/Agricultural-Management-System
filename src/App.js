import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import LandingPage from "./components/common/LandingPage";
import WeatherCard from "./components/dashboard/WeatherCard";
import HumidityGauge from "./components/dashboard/HumidityGauge";
import CropHealthList from "./components/dashboard/CropHealthList";
import CuttingSchedule from "./components/common/CuttingSchedule";
import ThreeDayGraph from "./components/dashboard/ThreeDayGraph";
import BuyerForm from "./components/buyers/BuyerForm";
import EnterpriseDashboard from "./components/dashboard/EnterpriseDashboard";
import HarvestSummary from "./components/harvest/HarvestSummary";

import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";
import ExpenseForm from "./components/expenses/ExpenseForm";
import ExpenseTable from "./components/expenses/ExpenseTable";
import ProfitLossChart from "./components/expenses/ProfitLossChart";
import InventoryForm from "./components/inventory/InventoryForm";
import InventoryTable from "./components/inventory/InventoryTable";
import ActivityLog from "./components/reports/ActivityLog";
import ReportBuilder from "./components/reports/ReportBuilder";

// [NEW] Workers & Equipment imports added safely
import WorkerForm from "./components/workers/WorkerForm";
import WorkerTable from "./components/workers/WorkerTable";
import EquipmentForm from "./components/equipment/EquipmentForm";
import EquipmentTable from "./components/equipment/EquipmentTable";

import { fetchLiveWeather } from "./store/slices/weatherSlice";
import { addBuyer } from "./store/slices/buyersSlice";
import { updateCropStock } from "./store/slices/cropsSlice";

export default function App() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("home");

  // Safe selectors with optional chaining to prevent undefined errors
  const crops = useSelector((state) => state.crops?.list || []);
  const buyers = useSelector((state) => state.buyers?.list || []);
  const { data: weatherData, loading, error } = useSelector((state) => state.weather || {});

  useEffect(() => {
    dispatch(fetchLiveWeather());
    const interval = setInterval(() => {
      dispatch(fetchLiveWeather());
    }, 300000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const handleAddBuyer = (newBuyer) => {
    dispatch(addBuyer(newBuyer));
    dispatch(updateCropStock({ cropId: newBuyer.cropId, quantity: newBuyer.quantity }));
    alert("Buyer record registered successfully with Redux!");
  };

  return (
    <div style={styles.appWrapper}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={styles.mainContent}>
        <div style={styles.container}>
          
          {/* 1. LANDING PAGE */}
          {activeTab === "home" && <LandingPage onNavigate={setActiveTab} />}

          {/* 2. LOGIN PAGE */}
          {activeTab === "login" && <LoginForm />}

          {/* 3. DASHBOARD */}
          {activeTab === "dashboard" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <EnterpriseDashboard crops={crops} buyers={buyers} />
              <HarvestSummary crops={crops} />

              <div style={styles.gridTop}>
                <WeatherCard weather={weatherData} loading={loading} error={error} />
                <HumidityGauge humidity={weatherData?.humidity} />
              </div>

              <ThreeDayGraph />

              <div style={styles.gridBottom}>
                <CropHealthList crops={crops} />
                <CuttingSchedule crops={crops} />
              </div>
            </div>
          )}

          {/* 4. BUYER PORTAL */}
          {activeTab === "buyers" && (
            <div style={{ maxWidth: "750px", margin: "20px auto", width: "100%" }}>
              <BuyerForm crops={crops} onAddBuyer={handleAddBuyer} />
            </div>
          )}

          {/* 5. TASKS */}
          {activeTab === "tasks" && (
            <ProtectedRoute>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "20px" }}>
                <TaskForm />
                <TaskList />
              </div>
            </ProtectedRoute>
          )}

          {/* 6. EXPENSES */}
          {activeTab === "expenses" && (
            <ProtectedRoute>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <ProfitLossChart />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "20px" }}>
                  <ExpenseForm />
                  <ExpenseTable />
                </div>
              </div>
            </ProtectedRoute>
          )}

          {/* 7. INVENTORY */}
          {activeTab === "inventory" && (
            <ProtectedRoute>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "20px" }}>
                <InventoryForm />
                <InventoryTable />
              </div>
            </ProtectedRoute>
          )}

          {/* 8. REPORTS */}
          {activeTab === "reports" && (
            <ProtectedRoute>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <ReportBuilder />
                <ActivityLog />
              </div>
            </ProtectedRoute>
          )}

          {/* 9. WORKERS & LABOUR MANAGEMENT [NEW v2] */}
          {activeTab === "workers" && (
            <ProtectedRoute>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <WorkerForm />
                <WorkerTable />
              </div>
            </ProtectedRoute>
          )}

          {/* 10. EQUIPMENT & MAINTENANCE TRACKER [NEW v2] */}
          {activeTab === "equipment" && (
            <ProtectedRoute>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <EquipmentForm />
                <EquipmentTable />
              </div>
            </ProtectedRoute>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  appWrapper: { minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f8fafc", fontFamily: "'Segoe UI', Roboto, sans-serif" },
  mainContent: { padding: "30px 20px", flex: 1 },
  container: { maxWidth: "1200px", margin: "0 auto", width: "100%" },
  gridTop: { display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" },
  gridBottom: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" },
};