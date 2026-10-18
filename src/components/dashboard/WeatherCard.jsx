import React from "react";

export default function WeatherCard({ weather, loading, error }) {
  if (loading) return <div style={styles.card}>Loading Live Weather...</div>;
  if (error) return <div style={styles.card}>Weather Error: {error}</div>;

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Live Weather (Lahore)</h3>
      <div style={styles.grid}>
        <div>
          <span style={styles.label}>Temperature</span>
          <div style={styles.val}>{weather?.temperature}°C</div>
        </div>
        <div>
          <span style={styles.label}>Wind Speed</span>
          <div style={styles.val}>{weather?.windSpeed} km/h</div>
        </div>
        <div>
          <span style={styles.label}>Precipitation</span>
          <div style={styles.val}>{weather?.rainChance} mm</div>
        </div>
        <div>
          <span style={styles.label}>Last Updated</span>
          <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>{weather?.lastUpdated}</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "6px", border: "1px solid #e0e0e0", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" },
  title: { margin: "0 0 15px 0", color: "#1e4620", fontSize: "16px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "15px" },
  label: { fontSize: "12px", color: "#6c757d" },
  val: { fontSize: "18px", fontWeight: "700", color: "#212529", marginTop: "4px" }
};