import React from "react";

export default function HarvestSummary({ crops = [] }) {
  const totalHarvested = crops.reduce((acc, c) => acc + (c.totalStock || 1000), 0);
  const totalRemaining = crops.reduce((acc, c) => acc + (c.stockRemaining !== undefined ? c.stockRemaining : 400), 0);
  const totalSold = totalHarvested - totalRemaining;

  return (
    <div style={styles.grid}>
      <div style={styles.card}>
        <span style={styles.label}>TOTAL HARVESTED YIELD</span>
        <div style={{ ...styles.val, color: "#16a34a" }}>{totalHarvested.toLocaleString()} Kg</div>
      </div>
      <div style={styles.card}>
        <span style={styles.label}>TOTAL QUANTITY SOLD</span>
        <div style={{ ...styles.val, color: "#0284c7" }}>{totalSold.toLocaleString()} Kg</div>
      </div>
      <div style={styles.card}>
        <span style={styles.label}>REMAINING IN STOCK</span>
        <div style={{ ...styles.val, color: "#d97706" }}>{totalRemaining.toLocaleString()} Kg</div>
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