import React, { useState } from "react";
import CropForm from "../components/crops/CropForm";
import CropTable from "../components/crops/CropTable";
import OrderForm from "../components/harvest/OrderForm";
import OrdersTable from "../components/harvest/OrdersTable";
import BuyerTable from "../components/buyers/BuyerTable";
import { SearchBar } from "../components/common/SearchBar";
import { exportToCsv } from "../utils/exportCsv";

export default function AdminPage({ buyers = [], onStatusChange, crops = [], setCrops, orders = [], setOrders }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("agri_admin_auth") === "true";
  });
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [activeAdminTab, setActiveAdminTab] = useState("crops");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      sessionStorage.setItem("agri_admin_auth", "true");
      setIsAuthenticated(true);
      setAuthError("");
      setPassword("");
    } else {
      setAuthError("Invalid Security Passcode! Access Denied.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("agri_admin_auth");
    setIsAuthenticated(false);
  };

  const handleAddCrop = (newCrop) => {
    if (setCrops) setCrops((prev) => [newCrop, ...prev]);
  };

  const handleDeleteCrop = (cropId) => {
    if (setCrops) setCrops((prev) => prev.filter((c) => c.id !== cropId));
  };

  const handleAddOrder = (newOrder) => {
    if (setOrders) setOrders((prev) => [newOrder, ...prev]);
  };

  const handleExportBuyers = () => {
    exportToCsv("buyer_records.csv", buyers);
  };

  const filteredBuyers = buyers.filter((b) =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.cnic.includes(searchTerm)
  );

  // SECURE AUTHENTICATION SCREEN
  if (!isAuthenticated) {
    return (
      <div style={styles.loginCard}>
        <div style={styles.loginHeader}>
          <h3 style={{ margin: 0, color: "#14532d", fontSize: "18px", fontWeight: "700" }}>
            Admin Control Panel Authentication
          </h3>
          <p style={{ margin: "4px 0 0 0", color: "#64748b", fontSize: "12px" }}>
            Enter your system access passcode to manage sensitive records.
          </p>
        </div>
        <form onSubmit={handleLogin} style={styles.loginForm}>
          <div>
            <label style={styles.label}>Admin Passcode</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter security passcode"
              style={styles.input}
            />
            {authError && <span style={styles.err}>{authError}</span>}
          </div>
          <button type="submit" style={styles.loginBtn}>Authenticate Admin Access</button>
        </form>
      </div>
    );
  }

  // AUTHENTICATED ADMIN PANEL VIEW
  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <div style={styles.tabHeader}>
          <button
            onClick={() => setActiveAdminTab("crops")}
            style={activeAdminTab === "crops" ? styles.activeTabBtn : styles.tabBtn}
          >
            Crop Inventory Management
          </button>
          <button
            onClick={() => setActiveAdminTab("orders")}
            style={activeAdminTab === "orders" ? styles.activeTabBtn : styles.tabBtn}
          >
            Market Orders
          </button>
          <button
            onClick={() => setActiveAdminTab("buyers")}
            style={activeAdminTab === "buyers" ? styles.activeTabBtn : styles.tabBtn}
          >
            Registered Buyers & Fulfillment
          </button>
        </div>
        
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout Admin
        </button>
      </div>

      {activeAdminTab === "crops" && (
        <div style={styles.gridTwoCol}>
          <CropForm onAddCrop={handleAddCrop} />
          <CropTable crops={crops} onDeleteCrop={handleDeleteCrop} />
        </div>
      )}

      {activeAdminTab === "orders" && (
        <div style={styles.gridTwoCol}>
          <OrderForm crops={crops} onAddOrder={handleAddOrder} />
          <OrdersTable orders={orders} crops={crops} />
        </div>
      )}

      {activeAdminTab === "buyers" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={styles.actionsBar}>
            <div style={{ flex: 1, maxWidth: "360px" }}>
              <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search buyer by name or CNIC..." />
            </div>
            <button onClick={handleExportBuyers} style={styles.exportBtn}>
              Export Buyer CSV
            </button>
          </div>
          <BuyerTable buyers={filteredBuyers} onStatusChange={onStatusChange} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", gap: "20px" },
  topBar: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #e2e8f0", paddingBottom: "12px" },
  tabHeader: { display: "flex", gap: "12px" },
  tabBtn: { padding: "10px 18px", border: "none", background: "#f1f5f9", color: "#475569", borderRadius: "8px", cursor: "pointer", fontWeight: "600", fontSize: "13px" },
  activeTabBtn: { padding: "10px 18px", border: "none", background: "#14532d", color: "#ffffff", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" },
  logoutBtn: { padding: "8px 16px", background: "#dc2626", color: "#ffffff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: "700" },
  gridTwoCol: { display: "grid", gridTemplateColumns: "1fr 2fr", gap: "20px" },
  actionsBar: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" },
  exportBtn: { padding: "9px 18px", background: "#0284c7", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "600", cursor: "pointer", fontSize: "13px", whiteSpace: "nowrap" },
  loginCard: { maxWidth: "420px", margin: "60px auto", background: "#ffffff", padding: "28px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  loginHeader: { marginBottom: "20px" },
  loginForm: { display: "flex", flexDirection: "column", gap: "16px" },
  label: { fontSize: "12px", fontWeight: "600", color: "#334155", marginBottom: "6px", display: "block" },
  input: { width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" },
  err: { color: "#dc2626", fontSize: "12px", marginTop: "4px", display: "block", fontWeight: "500" },
  loginBtn: { padding: "12px", background: "#14532d", color: "#ffffff", border: "none", borderRadius: "6px", fontWeight: "700", cursor: "pointer", fontSize: "13px" }
};