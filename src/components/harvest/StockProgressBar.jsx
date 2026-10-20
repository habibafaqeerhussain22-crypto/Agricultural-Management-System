import React from "react";

export default function StockProgressBar({ cropName, sold, total }) {
  const pct = Math.min(100, Math.round((sold / total) * 100));

  return (
    <div style={{ marginBottom: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
        <strong>{cropName}</strong>
        <span>{sold} Kg / {total} Kg ({pct}%)</span>
      </div>
      <div style={{ height: "8px", background: "#e2e8f0", borderRadius: "4px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: pct > 80 ? "#dc2626" : "#16a34a", borderRadius: "4px" }} />
      </div>
    </div>
  );
}