import React from "react";

export default function SupplierList({ orders, onStatusChange }) {
  return (
    <div style={styles.listCard}>
      <h3>📋 Supplier Orders List</h3>

      {!orders || orders.length === 0 ? (
        <p style={{ color: "#666", marginTop: "10px" }}>Koi order available nahi hai.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr style={{ textAlign: "left", background: "#f5f5f5" }}>
              <th style={styles.td}>Supplier</th>
              <th style={styles.td}>Crop / Item</th>
              <th style={styles.td}>Quantity</th>
              <th style={styles.td}>Date</th>
              <th style={styles.td}>Status</th>
              <th style={styles.td}>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={styles.td}><strong>{order.supplierName}</strong></td>
                <td style={styles.td}>{order.cropName}</td>
                <td style={styles.td}>{order.quantity}</td>
                <td style={styles.td}>{order.date}</td>
                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.badge,
                      background: order.status === "Delivered" ? "#e8f5e9" : "#fff3e0",
                      color: order.status === "Delivered" ? "#2e7d32" : "#e65100",
                    }}
                  >
                    {order.status || "Pending"}
                  </span>
                </td>
                <td style={styles.td}>
                  {order.status !== "Delivered" ? (
                    <button
                      onClick={() => onStatusChange(order.id, "Delivered")}
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
  listCard: { background: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "10px" },
  td: { padding: "12px 10px", fontSize: "14px" },
  badge: { padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold" },
  actionBtn: { padding: "5px 10px", background: "#2e7d32", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "12px" },
};