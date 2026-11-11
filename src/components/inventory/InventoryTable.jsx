import React from "react";
import { useSelector } from "react-redux";

export default function InventoryTable() {
  const inventory = useSelector((state) => state.inventory.list);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Inputs Inventory Stock Status</h3>
      <table style={styles.table}>
        <thead>
          <tr style={{ background: "#f8fafc", textAlign: "left" }}>
            <th style={styles.th}>Item</th>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Stock Qty</th>
            <th style={styles.th}>Min Required</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((i) => {
            const isLowStock = i.qty <= i.minQty;
            return (
              <tr key={i.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                <td style={styles.td}><strong>{i.item}</strong></td>
                <td style={styles.td}>{i.type}</td>
                <td style={styles.td}>{i.qty} {i.unit}</td>
                <td style={styles.td}>{i.minQty} {i.unit}</td>
                <td style={styles.td}>
                  <span style={{
                    padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "bold",
                    background: isLowStock ? "#fee2e2" : "#dcfce7",
                    color: isLowStock ? "#b91c1c" : "#15803d"
                  }}>
                    {isLowStock ? "Low Stock Alert" : "Sufficient"}
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
  card: { background: "#fff", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0" },
  title: { margin: "0 0 15px 0", color: "#14532d", fontSize: "16px", fontWeight: "700" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "13px" },
  th: { padding: "10px", borderBottom: "2px solid #e2e8f0", color: "#475569" },
  td: { padding: "10px", color: "#334155" }
};