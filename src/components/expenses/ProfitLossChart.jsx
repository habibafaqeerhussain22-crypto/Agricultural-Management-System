import React from "react";
import { useSelector } from "react-redux";

export default function ProfitLossChart() {
  const crops = useSelector((state) => state.crops.list);
  const expenses = useSelector((state) => state.expenses.list);
  const buyers = useSelector((state) => state.buyers.list);

  // Revenue calculate per crop (Assumed standard rate PKR 120 / Kg)
  const totalRevenue = buyers.reduce((sum, b) => sum + (b.quantity * 120), 0);
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
  const netProfit = totalRevenue - totalExpense;

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Profitability & P/L Summary</h3>
      
      <div style={styles.grid}>
        <div style={styles.metricBox}>
          <span style={styles.label}>ESTIMATED REVENUE</span>
          <div style={{ ...styles.val, color: "#16a34a" }}>PKR {totalRevenue.toLocaleString()}</div>
        </div>

        <div style={styles.metricBox}>
          <span style={styles.label}>TOTAL CROP EXPENSES</span>
          <div style={{ ...styles.val, color: "#dc2626" }}>PKR {totalExpense.toLocaleString()}</div>
        </div>

        <div style={styles.metricBox}>
          <span style={styles.label}>NET PROFIT / LOSS</span>
          <div style={{ ...styles.val, color: netProfit >= 0 ? "#15803d" : "#b91c1c" }}>
            PKR {netProfit.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0" },
  title: { margin: "0 0 15px 0", color: "#14532d", fontSize: "16px", fontWeight: "700" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" },
  metricBox: { background: "#f8fafc", padding: "16px", borderRadius: "6px", border: "1px solid #e2e8f0" },
  label: { fontSize: "11px", fontWeight: "700", color: "#64748b" },
  val: { fontSize: "22px", fontWeight: "800", marginTop: "6px" }
};