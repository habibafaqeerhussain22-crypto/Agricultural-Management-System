import React, { useState } from "react";
import StatsCards from "./components/StatsCards";
import WeatherChart from "./components/WeatherChart";
import OrderForm from "./components/OrderForm";
import SupplierList from "./components/SupplierList";
import { initialWeatherStats, weatherChartData, initialOrders } from "./data/mockData";

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const handleAddOrder = (newOrder) => {
    setOrders([{ ...newOrder, status: "Pending" }, ...orders]);
    alert("Order successfully placed!");
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
      setPassword("");
    } else {
      alert("Invalid Password. Please try again.");
    }
  };

  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Professional Clean Navbar */}
      <div style={styles.navBar}>
        <div style={styles.brandSection}>
          <h2 style={styles.brandTitle}>Agri Management System</h2>
        </div>
        <div style={styles.navButtons}>
          <button
            onClick={() => setCurrentPage("dashboard")}
            style={{
              ...styles.navBtn,
              background: currentPage === "dashboard" ? "#1e4620" : "#e9ecef",
              color: currentPage === "dashboard" ? "#ffffff" : "#495057",
            }}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentPage("form")}
            style={{
              ...styles.navBtn,
              background: currentPage === "form" ? "#1e4620" : "#e9ecef",
              color: currentPage === "form" ? "#ffffff" : "#495057",
            }}
          >
            Order Form
          </button>
          <button
            onClick={() => setCurrentPage("admin")}
            style={{
              ...styles.navBtn,
              background: currentPage === "admin" ? "#1e4620" : "#e9ecef",
              color: currentPage === "admin" ? "#ffffff" : "#495057",
            }}
          >
            Admin Panel
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ padding: "30px 40px" }}>
        {currentPage === "dashboard" && (
          <div>
            <h2 style={styles.pageHeading}>Weather & Crop Growth Overview</h2>
            <StatsCards stats={initialWeatherStats} />
            <WeatherChart data={weatherChartData} />
          </div>
        )}

        {currentPage === "form" && (
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={styles.pageHeading}>Place New Supplier Order</h2>
            <OrderForm onAddOrder={handleAddOrder} />
          </div>
        )}

        {currentPage === "admin" && (
          <div>
            {!isLoggedIn ? (
              <div style={styles.loginCard}>
                <h3 style={styles.loginTitle}>Admin Portal Login</h3>
                <p style={{ fontSize: "13px", color: "#6c757d", marginBottom: "20px" }}>
                  Please enter your password to access order management.
                </p>
                <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <input
                    type="password"
                    placeholder="Enter Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                  />
                  <button type="submit" style={styles.loginBtn}>Login</button>
                </form>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <h2 style={styles.pageHeading}>Admin Control Panel</h2>
                  <button onClick={() => setIsLoggedIn(false)} style={styles.logoutBtn}>Logout</button>
                </div>
                <SupplierList orders={orders} onStatusChange={handleStatusChange} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    padding: "16px 40px",
    borderBottom: "1px solid #e0e0e0",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  brandSection: { display: "flex", alignItems: "center" },
  brandTitle: { color: "#1e4620", margin: 0, fontSize: "20px", fontWeight: "600", letterSpacing: "0.5px" },
  navButtons: { display: "flex", gap: "8px" },
  navBtn: {
    padding: "8px 18px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "14px",
    transition: "all 0.2s ease",
  },
  pageHeading: { color: "#212529", marginBottom: "20px", fontSize: "22px", fontWeight: "600" },
  loginCard: {
    maxWidth: "360px",
    margin: "60px auto",
    background: "#ffffff",
    padding: "32px",
    borderRadius: "6px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  loginTitle: { margin: "0 0 8px 0", color: "#212529", fontSize: "18px" },
  input: { padding: "10px 12px", borderRadius: "4px", border: "1px solid #ced4da", fontSize: "14px", outline: "none" },
  loginBtn: { padding: "10px", background: "#1e4620", color: "#ffffff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "600", fontSize: "14px" },
  logoutBtn: { padding: "7px 14px", background: "#d32f2f", color: "#ffffff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "13px", fontWeight: "500" },
};
