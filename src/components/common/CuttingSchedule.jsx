import React from "react";

export default function CuttingSchedule({ crops = [] }) {
  return (
    <div style={styles.card}>
      <div style={styles.headerBanner}>
        <h3 style={styles.title}>Harvest & Cutting Schedule Table</h3>
      </div>
      <div style={styles.content}>
        <table style={styles.table}>
          <thead>
            <tr style={{ background: "#f8fafc", textAlign: "left" }}>
              <th style={styles.th}>Crop</th>
              <th style={styles.th}>Field Name</th>
              <th style={styles.th}>Cutting Date</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop) => {
              const today = new Date();
              const cutDate = new Date(crop.cuttingDate);
              const diffTime = cutDate - today;
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

              return (
                <tr key={crop.id || crop.name} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={styles.td}><strong>{crop.name}</strong></td>
                  <td style={styles.td}>{crop.field}</td>
                  <td style={styles.td}>{crop.cuttingDate}</td>
                  <td style={styles.td}>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: "bold",
                        background: diffDays <= 5 ? "#fee2e2" : "#dcfce7",
                        color: diffDays <= 5 ? "#b91c1c" : "#15803d",
                      }}
                    >
                      {diffDays > 0 ? `${diffDays} Days Left` : "Due Now"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
  },
  headerBanner: {
    background: "#14532d",
    padding: "14px 20px",
  },
  title: {
    margin: 0,
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "700",
  },
  content: {
    padding: "16px 20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
  },
  th: {
    padding: "10px",
    borderBottom: "2px solid #e2e8f0",
    color: "#475569",
    fontWeight: "700",
  },
  td: {
    padding: "12px 10px",
    color: "#334155",
  },
};