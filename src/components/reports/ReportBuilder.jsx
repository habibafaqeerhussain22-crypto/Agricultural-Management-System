import React, { useState } from "react";
import { useSelector } from "react-redux";
import { exportToCsv } from "../../utils/exportCsv";

export default function ReportBuilder() {
  const buyers = useSelector((state) => state.buyers.list);
  const expenses = useSelector((state) => state.expenses.list);
  const crops = useSelector((state) => state.crops.list);

  const [reportType, setReportType] = useState("buyers");

  const handleExport = () => {
    if (reportType === "buyers") {
      exportToCsv("buyers_report.csv", buyers);
    } else if (reportType === "expenses") {
      exportToCsv("expenses_report.csv", expenses);
    } else {
      exportToCsv("crops_inventory_report.csv", crops);
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Export Monthly Farm Reports</h3>
      <div style={styles.flex}>
        <div>
          <label style={styles.label}>Select Report Data</label>
          <select value={reportType} onChange={(e) => setReportType(e.target.value)} style={styles.input}>
            <option value="buyers">Buyers & Sales Orders</option>
            <option value="expenses">Crop Expenses Log</option>
            <option value="crops">Crop Inventory & Yield</option>
          </select>
        </div>

        <button onClick={handleExport} style={styles.btn}>
          Export Selected CSV
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0" },
  title: { margin: "0 0 15px 0", color: "#14532d", fontSize: "16px", fontWeight: "700" },
  flex: { display: "flex", gap: "16px", alignItems: "flex-end" },
  label: { fontSize: "12px", fontWeight: "600", color: "#475569", marginBottom: "4px", display: "block" },
  input: { padding: "8px 12px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "13px", minWidth: "220px" },
  btn: { padding: "10px 20px", background: "#0284c7", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "600", cursor: "pointer" }
};