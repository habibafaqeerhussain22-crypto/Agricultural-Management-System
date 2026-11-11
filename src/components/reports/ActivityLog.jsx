import React from "react";
import { useSelector } from "react-redux";

export default function ActivityLog() {
  const logs = useSelector((state) => state.activity.logs);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>System Audit & Activity Log</h3>
      <table style={styles.table}>
        <thead>
          <tr style={{ background: "#f8fafc", textAlign: "left" }}>
            <th style={styles.th}>Timestamp</th>
            <th style={styles.th}>User</th>
            <th style={styles.th}>Action</th>
            <th style={styles.th}>Entity / Target</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
              <td style={styles.td}>{log.timestamp}</td>
              <td style={styles.td}><strong>{log.user}</strong></td>
              <td style={styles.td}>
                <span style={{
                  padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "bold",
                  background: log.action === "ADDED" ? "#dcfce7" : "#fee2e2",
                  color: log.action === "ADDED" ? "#15803d" : "#b91c1c"
                }}>
                  {log.action}
                </span>
              </td>
              <td style={styles.td}>{log.entity}</td>
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
  td: { padding: "10px", color: "#334155" }
};