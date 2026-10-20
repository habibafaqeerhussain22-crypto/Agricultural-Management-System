import React from "react";

export default function OrdersTable({ orders = [], crops = [] }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Recent Orders List</h3>
      <table style={styles.table}>
        <thead>
          <tr style={{ background: "#f8fafc", textAlign: "left" }}>
            <th style={styles.th}>Order ID</th>
            <th style={styles.th}>Crop</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => {
            const crop = crops.find(c => c.id === o.cropId);
            return (
              <tr key={o.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                <td style={styles.td}>#{o.id}</td>
                <td style={styles.td}><strong>{crop ? crop.name : "Wheat"}</strong></td>
                <td style={styles.td}>{o.quantity} Kg</td>
                <td style={styles.td}>{o.orderDate}</td>
                <td style={styles.td}>
                  <span style={{
                    padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "bold",
                    background: o.status === "Delivered" ? "#dcfce7" : "#fef3c7",
                    color: o.status === "Delivered" ? "#15803d" : "#b45309"
                  }}>
                    {o.status}
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