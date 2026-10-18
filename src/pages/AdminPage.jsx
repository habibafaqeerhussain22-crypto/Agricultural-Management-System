import React, { useState } from "react";
import BuyerTable from "../components/buyers/BuyerTable";

export default function AdminPage({ buyers, onStatusChange }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
      setPassword("");
    } else {
      alert("Invalid password. Please try again.");
    }
  };

  return (
    <div style={styles.wrapper}>
      {!isLoggedIn ? (
        <div style={styles.loginCard}>
          <div style={styles.lockIconBox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h3 style={styles.loginTitle}>Admin Portal Authentication</h3>
          <p style={styles.loginSubtitle}>
            Enter credentials to access secure buyer records and fulfillment pipeline.
          </p>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.loginBtn}> Login </button>
          </form>
        </div>
      ) : (
        <div style={styles.tableContainer}>
          <div style={styles.headerRow}>
            <h2 style={styles.panelTitle}>Admin Control Panel - Buyer Fulfillment Records</h2>
            <button onClick={() => setIsLoggedIn(false)} style={styles.logoutBtn}>Logout Session</button>
          </div>
          <BuyerTable buyers={buyers} onStatusChange={onStatusChange} />
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px 0",
  },
  loginCard: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(12px)",
    padding: "40px",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    textAlign: "center",
    maxWidth: "420px",
    width: "100%",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
    marginTop: "30px",
  },
  lockIconBox: {
    width: "50px",
    height: "50px",
    background: "#ecfdf5",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px auto",
    border: "1px solid #a7f3d0",
  },
  loginTitle: { margin: "0 0 8px 0", color: "#1b4332", fontSize: "18px", fontWeight: "700" },
  loginSubtitle: { margin: "0 0 24px 0", fontSize: "13px", color: "#64748b", lineHeight: "1.5" },
  form: { display: "flex", flexDirection: "column", gap: "14px" },
  input: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  },
  loginBtn: {
    padding: "12px",
    background: "#1b4332",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    boxShadow: "0 4px 12px rgba(27, 67, 50, 0.3)",
  },
  tableContainer: {
    width: "100%",
    background: "rgba(255, 255, 255, 0.98)",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "10px",
  },
  panelTitle: { margin: 0, color: "#1b4332", fontSize: "18px", fontWeight: "700" },
  logoutBtn: {
    padding: "8px 16px",
    background: "#ef4444",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
  },
};