import React from "react";

export default function OrdersSummary({ buyers = [] }) {
  const totalOrders = buyers.length;
  const pending = buyers.filter(b => b.status === "Pending").length;
  const delivered = buyers.filter(b => b.status === "Delivered").length;

  return (
    <div style={styles.grid}>
      <div style={styles.card}>
        <span style={styles.label}>TOTAL MARKET ORDERS</span>
        <div style={{ ...styles.val, color: "#0f5132" }}>{totalOrders}</div>
      </div>
      <div style={styles.card}>
        <span style={styles.label}>PENDING ORDERS</span>
        <div style={{ ...styles.val, color: "#d97706" }}>{pending}</div>
      </div>
      <div style={styles.card}>
        <span style={styles.label}>DELIVERED ORDERS</span>
        <div style={{ ...styles.val, color: "#16a34a" }}>{delivered}</div>
      </div>
    </div>
  );
}

const styles = {
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" },
  card: { background: "#fff", padding: "18px", borderRadius: "8px", border: "1px solid #e2e8f0" },
  label: { fontSize: "11px", fontWeight: "700", color: "#64748b" },
  val: { fontSize: "24px", fontWeight: "800", marginTop: "6px" }
};