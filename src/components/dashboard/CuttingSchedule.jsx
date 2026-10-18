import React from "react";

export default function CuttingSchedule({ crops }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Harvest & Cutting Schedule</h3>
      <table style={styles.table}>
        <thead>
          <tr style={{ background: "#f8f9fa", textAlign: "left" }}>
            <th style={styles.th}>Crop</th>
            <th style={styles.th}>Field Name</th>
            <th style={styles.th}>Cutting Date</th>
            <th style={styles.th}>Days Left</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop) => {
            const today = new Date();
            const cutDate = new Date(crop.cuttingDate);
            const diffTime = cutDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            return (
              <tr key={crop.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={styles.td}><strong>{crop.name}</strong></td>
                <td style={styles.td}>{crop.field}</td>
                <td style={styles.td}>{crop.cuttingDate}</td>
                <td style={styles.td}>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      background: diffDays <= 5 ? "#ffebee" : "#e8f5e9",
                      color: diffDays <= 5 ? "#c62828" : "#2e7d32",
                    }}
                  >
                    {diffDays > 0 ? `${diffDays} Days` : "Due Now"}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "6px", border: "1px solid #e0e0e0" },
  title: { margin: "0 0 15px 0", color: "#1e4620", fontSize: "16px" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "14px" },
  th: { padding: "10px", borderBottom: "2px solid #dee2e6", color: "#495057" },
  td: { padding: "10px" },
};