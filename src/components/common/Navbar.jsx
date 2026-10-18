import React from "react";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav style={styles.navBar}>
      {/* Brand Logo with Professional SVG Icon */}
      <div style={styles.brandContainer}>
        <div style={styles.logoIconBox}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div>
          <h1 style={styles.title}>AgriCorp Enterprise</h1>
          <span style={styles.subtitle}>Smart Farm Operations & Analytics</span>
        </div>
      </div>

      {/* Navigation Menu on the Right */}
      <div style={styles.menu}>
        <button
          onClick={() => setActiveTab("dashboard")}
          style={activeTab === "dashboard" ? styles.activeBtn : styles.btn}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab("buyers")}
          style={activeTab === "buyers" ? styles.activeBtn : styles.btn}
        >
          Buyer Portal
        </button>
        <button
          onClick={() => setActiveTab("admin")}
          style={activeTab === "admin" ? styles.activeBtn : styles.btn}
        >
          Admin Control
        </button>
      </div>
    </nav>
  );
}

const styles = {
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    padding: "16px 40px",
    borderBottom: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logoIconBox: {
    width: "38px",
    height: "38px",
    background: "#1b4332",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 0,
    color: "#1b4332",
    fontSize: "18px",
    fontWeight: "700",
    letterSpacing: "-0.3px",
  },
  subtitle: {
    margin: 0,
    fontSize: "11px",
    color: "#64748b",
    fontWeight: "500",
  },
  menu: {
    display: "flex",
    gap: "10px",
  },
  btn: {
    padding: "8px 18px",
    border: "1px solid #cbd5e1",
    background: "#ffffff",
    color: "#475569",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    transition: "all 0.2s ease",
  },
  activeBtn: {
    padding: "8px 18px",
    border: "none",
    background: "#1b4332",
    color: "#ffffff",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    boxShadow: "0 2px 4px rgba(27, 67, 50, 0.2)",
  },
};