import React from "react";

export default function HarvestChart({ crops = [] }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Yield Comparison Chart</h3>
      <div style={{ display: "flex", alignItems: "flex-end", height: "150px", gap: "20px", borderBottom: "2px solid #e2e8f0", paddingBottom: "10px" }}>
        {crops.slice(0, 4).map((c) => (
          <div key={c.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
            <div style={{ height: `${Math.min(120, (c.totalStock || 1000) / 40)}px`, width: "30px", background: "#16a34a", borderRadius: "4px 4px 0 0" }} />
            <span style={{ fontSize: "11px", fontWeight: "bold", marginTop: "6px" }}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0" },
  title: { margin: "0 0 15px 0", color: "#14532d", fontSize: "16px", fontWeight: "700" }
};