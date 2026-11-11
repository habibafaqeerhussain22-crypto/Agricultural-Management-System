import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskStatus, deleteTask } from "../../store/slices/tasksSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  const crops = useSelector((state) => state.crops.list);
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((t) => {
    if (filter === "All") return true;
    return t.status === filter;
  });

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>Farm Operational Tasks</h3>
        <div style={styles.filterGroup}>
          <button onClick={() => setFilter("All")} style={filter === "All" ? styles.activeFilter : styles.filterBtn}>All</button>
          <button onClick={() => setFilter("Pending")} style={filter === "Pending" ? styles.activeFilter : styles.filterBtn}>Pending</button>
          <button onClick={() => setFilter("Done")} style={filter === "Done" ? styles.activeFilter : styles.filterBtn}>Done</button>
          <button onClick={() => setFilter("Overdue")} style={filter === "Overdue" ? styles.activeFilter : styles.filterBtn}>Overdue</button>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr style={{ background: "#f8fafc", textAlign: "left" }}>
            <th style={styles.th}>Task</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Crop</th>
            <th style={styles.th}>Due Date</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((t) => {
            const crop = crops.find((c) => c.id === t.cropId);
            return (
              <tr key={t.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                <td style={styles.td}><strong>{t.title}</strong></td>
                <td style={styles.td}>{t.type}</td>
                <td style={styles.td}>{crop?.name || "N/A"}</td>
                <td style={styles.td}>{t.dueDate}</td>
                <td style={styles.td}>
                  <span style={{
                    padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "bold",
                    background: t.status === "Done" ? "#dcfce7" : t.status === "Overdue" ? "#fee2e2" : "#fef3c7",
                    color: t.status === "Done" ? "#15803d" : t.status === "Overdue" ? "#b91c1c" : "#b45309"
                  }}>
                    {t.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <button onClick={() => dispatch(toggleTaskStatus(t.id))} style={styles.actionBtn}>
                    {t.status === "Done" ? "Undo" : "Mark Done"}
                  </button>
                  <button onClick={() => dispatch(deleteTask(t.id))} style={styles.deleteBtn}>
                    Delete
                  </button>
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
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" },
  title: { margin: 0, color: "#14532d", fontSize: "16px", fontWeight: "700" },
  filterGroup: { display: "flex", gap: "6px" },
  filterBtn: { padding: "4px 10px", border: "1px solid #cbd5e1", background: "#fff", borderRadius: "4px", fontSize: "11px", cursor: "pointer" },
  activeFilter: { padding: "4px 10px", border: "none", background: "#14532d", color: "#fff", borderRadius: "4px", fontSize: "11px", cursor: "pointer", fontWeight: "bold" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "13px" },
  th: { padding: "10px", borderBottom: "2px solid #e2e8f0", color: "#475569" },
  td: { padding: "10px", color: "#334155" },
  actionBtn: { padding: "4px 8px", background: "#0284c7", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "11px", marginRight: "6px" },
  deleteBtn: { padding: "4px 8px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "11px" }
};