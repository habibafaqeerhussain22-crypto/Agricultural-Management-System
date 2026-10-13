import React from "react";

export default function StatsCards({ stats }) {
  return (
    <div style={styles.grid}>
      {/* Air & Soil Humidity Card */}
      <div style={{ ...styles.card, borderLeft: "5px solid #0288d1" }}>
        <div style={styles.cardHeader}>
          <h4>💧 Humidity & Moisture</h4>
          <span style={styles.badge}>Live</span>
        </div>
        <h2>{stats.humidity}</h2>
        <p style={styles.subText}>Air: 68% | Soil Moisture: Optimal</p>
      </div>

      {/* Today's Crop Growth & Yield */}
      <div style={{ ...styles.card, borderLeft: "5px solid #2e7d32" }}>
        <div style={styles.cardHeader}>
          <h4>🌾 Crop Growth & Yield</h4>
          <span style={styles.badgeSuccess}>+5% Today</span>
        </div>
        <h2>{stats.cropGrowth}</h2>
        <p style={styles.subText}>Target: 300 kg | Progress: 80%</p>
      </div>

      {/* Weather Forecast */}
      <div style={{ ...styles.card, borderLeft: "5px solid #ed6c02" }}>
        <div style={styles.cardHeader}>
          <h4>☀️ Weather Today</h4>
        </div>
        <h2>{stats.temp}</h2>
        <p style={styles.subText}>{stats.condition} | Wind: 12 km/h</p>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "15px",
    marginBottom: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "18px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  badge: {
    background: "#e1f5fe",
    color: "#0288d1",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  badgeSuccess: {
    background: "#e8f5e9",
    color: "#2e7d32",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  subText: {
    color: "#666",
    fontSize: "13px",
    marginTop: "5px",
  },
};