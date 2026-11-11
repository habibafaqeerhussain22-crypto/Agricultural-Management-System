import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../../store/slices/expensesSlice";

export default function ExpenseTable() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.list);
  const crops = useSelector((state) => state.crops.list);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Expense History Log</h3>
      <table style={styles.table}>
        <thead>
          <tr style={{ background: "#f8fafc", textAlign: "left" }}>
            <th style={styles.th}>Crop</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Note</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => {
            const crop = crops.find((c) => c.id === e.cropId);
            return (
              <tr key={e.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                <td style={styles.td}><strong>{crop?.name || "N/A"}</strong></td>
                <td style={styles.td}>{e.category}</td>
                <td style={{ ...styles.td, color: "#dc2626", fontWeight: "bold" }}>PKR {e.amount.toLocaleString()}</td>
                <td style={styles.td}>{e.date}</td>
                <td style={styles.td}>{e.note || "N/A"}</td>
                <td style={styles.td}>
                  <button onClick={() => dispatch(deleteExpense(e.id))} style={styles.deleteBtn}>
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
  title: { margin: "0 0 15px 0", color: "#14532d", fontSize: "16px", fontWeight: "700" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "13px" },
  th: { padding: "10px", borderBottom: "2px solid #e2e8f0", color: "#475569" },
  td: { padding: "10px", color: "#334155" },
  deleteBtn: { padding: "4px 8px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "11px" }
};