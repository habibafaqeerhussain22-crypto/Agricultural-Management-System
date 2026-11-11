import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

export default function Navbar({ activeTab, setActiveTab }) {
  const dispatch = useDispatch();
  const { isAuthenticated, user, role } = useSelector((state) => state.auth);

  return (
    <nav style={styles.navBar}>
      <div style={styles.brandContainer}>
        <div style={styles.logoIconBox}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div>
          <h1 style={styles.title}>AgriCorp Enterprise</h1>
          <span style={styles.subtitle}>Smart Farm Operations & Redux Telemetry</span>
        </div>
      </div>

      <div style={styles.menu}>
        <button onClick={() => setActiveTab("home")} style={activeTab === "home" ? styles.activeBtn : styles.btn}>Home</button>
        <button onClick={() => setActiveTab("dashboard")} style={activeTab === "dashboard" ? styles.activeBtn : styles.btn}>Dashboard</button>
        <button onClick={() => setActiveTab("buyers")} style={activeTab === "buyers" ? styles.activeBtn : styles.btn}>Buyer Portal</button>
        <button onClick={() => setActiveTab("tasks")} style={activeTab === "tasks" ? styles.activeBtn : styles.btn}>Tasks</button>
        <button onClick={() => setActiveTab("expenses")} style={activeTab === "expenses" ? styles.activeBtn : styles.btn}>Expenses</button>
        <button onClick={() => setActiveTab("inventory")} style={activeTab === "inventory" ? styles.activeBtn : styles.btn}>Inventory</button>
        <button onClick={() => setActiveTab("workers")} style={activeTab === "workers" ? styles.activeBtn : styles.btn}>Workers</button>
        <button onClick={() => setActiveTab("equipment")} style={activeTab === "equipment" ? styles.activeBtn : styles.btn}>Equipment</button>
        <button onClick={() => setActiveTab("reports")} style={activeTab === "reports" ? styles.activeBtn : styles.btn}>Reports</button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {isAuthenticated ? (
          <>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#14532d" }}>
              {user} ({role})
            </span>
            <button onClick={() => dispatch(logout())} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <button onClick={() => setActiveTab("login")} style={styles.loginBtn}>Login</button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navBar: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#ffffff", padding: "12px 30px", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 1000 },
  brandContainer: { display: "flex", alignItems: "center", gap: "10px" },
  logoIconBox: { width: "34px", height: "34px", background: "#14532d", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" },
  title: { margin: 0, color: "#14532d", fontSize: "16px", fontWeight: "700" },
  subtitle: { margin: 0, fontSize: "10px", color: "#64748b" },
  menu: { display: "flex", gap: "6px" },
  btn: { padding: "6px 12px", border: "1px solid #cbd5e1", background: "#ffffff", color: "#475569", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: "600" },
  activeBtn: { padding: "6px 12px", border: "none", background: "#14532d", color: "#ffffff", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: "600" },
  loginBtn: { padding: "6px 14px", background: "#14532d", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: "bold" },
  logoutBtn: { padding: "6px 12px", background: "#dc2626", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: "bold" }
};