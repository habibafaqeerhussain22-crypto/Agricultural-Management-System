import React from "react";

export default function CropHealthList({ crops = [] }) {
  return (
    <div style={styles.card}>
      <div style={styles.headerBanner}>
        <h3 style={styles.title}>Crop Health Status Overview</h3>
      </div>
      <div style={styles.content}>
        <div style={styles.list}>
          {crops.map((crop) => (
            <div key={crop.id || crop.name} style={styles.item}>
              <div>
                <strong style={{ fontSize: "14px", color: "#1e293b" }}>{crop.name}</strong>
                <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>Field: {crop.field}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "11px",
                    fontWeight: "bold",
                    background: crop.healthScore >= 80 ? "#dcfce7" : crop.healthScore >= 60 ? "#fef3c7" : "#fee2e2",
                    color: crop.healthScore >= 80 ? "#15803d" : crop.healthScore >= 60 ? "#b45309" : "#b91c1c",
                  }}
                >
                  {crop.status || (crop.healthScore >= 80 ? "Healthy" : "Needs Attention")}
                </span>
                <div style={{ fontSize: "12px", fontWeight: "bold", color: "#334155", marginTop: "4px" }}>
                  Score: {crop.healthScore}%
                </div>
              </div>
            </div>
          ))}
        </div>
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
    padding: "20px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "12px",
    borderBottom: "1px solid #f1f5f9",
  },
};