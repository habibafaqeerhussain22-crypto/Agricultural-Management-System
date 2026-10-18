import React from "react";
import StatusBadge from "../common/StatusBadge";

export default function CropHealthList({ crops }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Crop Health Status</h3>
      <div style={styles.list}>
        {crops.map((crop) => (
          <div key={crop.id} style={styles.item}>
            <div>
              <strong>{crop.name}</strong>
              <div style={{ fontSize: "12px", color: "#666" }}>Field: {crop.field}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <StatusBadge status={crop.status} />
              <div style={{ fontSize: "12px", fontWeight: "bold", marginTop: "4px" }}>Score: {crop.healthScore}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "6px", border: "1px solid #e0e0e0" },
  title: { margin: "0 0 15px 0", color: "#1e4620", fontSize: "16px" },
  list: { display: "flex", flexDirection: "column", gap: "12px" },
  item: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", borderBottom: "1px solid #f1f3f5" }
};