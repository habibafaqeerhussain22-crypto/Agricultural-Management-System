import React from "react";

export default function HumidityGauge({ humidity }) {
  const getHumidityStatus = (val) => {
    if (val < 40) return { label: "Low", color: "#ef6c00" };
    if (val >= 40 && val <= 70) return { label: "Optimal", color: "#2e7d32" };
    return { label: "High", color: "#c62828" };
  };

  const status = getHumidityStatus(humidity || 50);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Soil / Air Humidity</h3>
      <div style={styles.flex}>
        <div style={styles.bigVal}>{humidity || "--"}%</div>
        <div>
          <span style={{ ...styles.statusTag, background: status.color }}>
            {status.label}
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "6px", border: "1px solid #e0e0e0" },
  title: { margin: "0 0 15px 0", color: "#1e4620", fontSize: "16px" },
  flex: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  bigVal: { fontSize: "32px", fontWeight: "700", color: "#212529" },
  statusTag: { color: "#fff", padding: "4px 12px", borderRadius: "12px", fontSize: "13px", fontWeight: "600" }
};