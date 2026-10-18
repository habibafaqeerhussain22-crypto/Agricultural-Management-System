import React from "react";

export default function BuyerTable({ buyers, onStatusChange }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Admin Panel - Order & Buyer Records</h3>
      {buyers.length === 0 ? (
        <p style={{ color: "#666" }}>No purchase records found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr style={{ background: "#f8f9fa", textAlign: "left" }}>
              <th style={styles.th}>Photo</th>
              <th style={styles.th}>Buyer Name</th>
              <th style={styles.th}>CNIC</th>
              <th style={styles.th}>Crop Purchased</th>
              <th style={styles.th}>Quantity</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((b) => (
              <tr key={b.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={styles.td}>
                  {b.imageBase64 ? (
                    <img src={b.imageBase64} alt="Buyer" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
                  ) : (
                    <span style={{ fontSize: "11px", color: "#999" }}>No Photo</span>
                  )}
                </td>
                <td style={styles.td}><strong>{b.name}</strong></td>
                <td style={styles.td}>{b.cnic}</td>
                <td style={styles.td}>{b.cropName}</td>
                <td style={styles.td}>{b.quantity} Kg</td>
                <td style={styles.td}>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      background: b.status === "Delivered" ? "#e8f5e9" : "#fff3e0",
                      color: b.status === "Delivered" ? "#2e7d32" : "#e65100",
                    }}
                  >
                    {b.status || "Pending"}
                  </span>
                </td>
                <td style={styles.td}>
                  {b.status !== "Delivered" ? (
                    <button
                      onClick={() => onStatusChange(b.id, "Delivered")}
                      style={styles.actionBtn}
                    >
                      Mark Delivered
                    </button>
                  ) : (
                    <span style={{ fontSize: "12px", color: "#2e7d32" }}>✓ Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "6px", border: "1px solid #e0e0e0" },
  title: { margin: "0 0 15px 0", color: "#1e4620", fontSize: "18px" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "13px" },
  th: { padding: "10px", borderBottom: "2px solid #dee2e6", color: "#495057" },
  td: { padding: "10px" },
  actionBtn: { padding: "5px 10px", background: "#1e4620", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "12px" },
};