import React from "react";

export default function CropTable({ crops = [], onDeleteCrop }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Crop Management Inventory</h3>
      <table style={styles.table}>
        <thead>
          <tr style={{ background: "#f8fafc", textAlign: "left" }}>
            <th style={styles.th}>Crop Name</th>
            <th style={styles.th}>Field</th>
            <th style={styles.th}>Health Score</th>
            <th style={styles.th}>Remaining Stock</th>
            <th style={styles.th}>Cutting Date</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop) => (
            <tr key={crop.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
              <td style={styles.td}><strong>{crop.name}</strong></td>
              <td style={styles.td}>{crop.field}</td>
              <td style={styles.td}>
                <span style={{
                  padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "bold",
                  background: crop.healthScore >= 80 ? "#dcfce7" : crop.healthScore >= 60 ? "#fef3c7" : "#fee2e2",
                  color: crop.healthScore >= 80 ? "#15803d" : crop.healthScore >= 60 ? "#b45309" : "#b91c1c"
                }}>
                  {crop.healthScore}% ({crop.status || "Healthy"})
                </span>
              </td>
              <td style={styles.td}>{crop.stockRemaining ?? crop.totalStock} Kg</td>
              <td style={styles.td}>{crop.cuttingDate}</td>
              <td style={styles.td}>
                {onDeleteCrop && (
                  <button onClick={() => onDeleteCrop(crop.id)} style={styles.deleteBtn}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0" },
  title: { margin: "0 0 15px 0", color: "#14532d", fontSize: "16px", fontWeight: "700" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "13px" },
  th: { padding: "10px", borderBottom: "2px solid #e2e8f0", color: "#475569" },
  td: { padding: "10px", color: "#334155" },
  deleteBtn: { padding: "4px 8px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "11px" }
};