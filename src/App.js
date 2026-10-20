import React, { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import LandingPage from "./components/common/LandingPage";
import WeatherCard from "./components/dashboard/WeatherCard";
import HumidityGauge from "./components/dashboard/HumidityGauge";
import CropHealthList from "./components/dashboard/CropHealthList";
import CuttingSchedule from "./components/common/CuttingSchedule";
import ThreeDayGraph from "./components/dashboard/ThreeDayGraph";
import BuyerForm from "./components/buyers/BuyerForm";
import AdminPage from "./pages/AdminPage";
import EnterpriseDashboard from "./components/dashboard/EnterpriseDashboard";
import HarvestSummary from "./components/harvest/HarvestSummary";

import { useWeather } from "./hooks/useWeather";
import { getLocalStorageData, setLocalStorageData } from "./services/storageService";
import { initialCrops, initialBuyers } from "./data/mockData";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const { weatherData, loading, error } = useWeather();

  const [crops, setCrops] = useState(() => getLocalStorageData("agri_crops", initialCrops));
  const [buyers, setBuyers] = useState(() => getLocalStorageData("agri_buyers", initialBuyers));
  const [orders, setOrders] = useState(() => getLocalStorageData("agri_orders", []));

  useEffect(() => {
    setLocalStorageData("agri_crops", crops);
  }, [crops]);

  useEffect(() => {
    setLocalStorageData("agri_buyers", buyers);
  }, [buyers]);

  useEffect(() => {
    setLocalStorageData("agri_orders", orders);
  }, [orders]);

  const handleAddBuyer = (newBuyer) => {
    const buyerWithStatus = { ...newBuyer, status: "Pending" };
    setBuyers([buyerWithStatus, ...buyers]);
    setCrops((prevCrops) =>
      prevCrops.map((c) =>
        c.id === newBuyer.cropId
          ? { ...c, stockRemaining: Math.max(0, c.stockRemaining - newBuyer.quantity) }
          : c
      )
    );
    alert("Buyer record successfully registered.");
  };

  const handleStatusChange = (buyerId, newStatus) => {
    setBuyers(
      buyers.map((b) => (b.id === buyerId ? { ...b, status: newStatus } : b))
    );
  };

  return (
    <div style={styles.appWrapper}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={styles.mainContent}>
        <div style={styles.container}>
          
          {/* 1. LANDING PAGE VIEW */}
          {activeTab === "home" && (
            <LandingPage onNavigate={setActiveTab} />
          )}

          {/* 2. DASHBOARD VIEW */}
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

          {/* 3. BUYER PORTAL VIEW */}
          {activeTab === "buyers" && (
            <div style={{ maxWidth: "750px", margin: "20px auto", width: "100%" }}>
              <BuyerForm crops={crops} onAddBuyer={handleAddBuyer} />
            </div>
          )}

          {/* 4. ADMIN CONTROL PANEL VIEW */}
          {activeTab === "admin" && (
            <div style={{ margin: "10px 0" }}>
              <AdminPage
                buyers={buyers}
                onStatusChange={handleStatusChange}
                crops={crops}
                setCrops={setCrops}
                orders={orders}
                setOrders={setOrders}
              />
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  appWrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#f8fafc",
    fontFamily: "'Segoe UI', Roboto, -apple-system, sans-serif",
  },
  mainContent: {
    padding: "30px 20px",
    flex: 1,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  gridTop: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "24px",
  },
  gridBottom: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
};