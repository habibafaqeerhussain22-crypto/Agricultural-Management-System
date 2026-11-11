import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../../store/slices/expensesSlice";

export default function ExpenseForm() {
  const dispatch = useDispatch();
  const crops = useSelector((state) => state.crops.list);

  const [cropId, setCropId] = useState(crops[0]?.id || "");
  const [category, setCategory] = useState("Seeds");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid expense amount.");
      return;
    }

    const newExpense = {
      id: "E" + Date.now(),
      cropId,
      category,
      amount: Number(amount),
      date,
      note,
    };

    dispatch(addExpense(newExpense));
    setAmount("");
    setNote("");
    alert("Expense recorded successfully!");
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Record Crop Expense</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label style={styles.label}>Select Crop</label>
          <select value={cropId} onChange={(e) => setCropId(e.target.value)} style={styles.input}>
            {crops.map((c) => (
              <option key={c.id} value={c.id}>{c.name} ({c.field})</option>
            ))}
          </select>
        </div>

        <div>
          <label style={styles.label}>Expense Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.input}>
            <option value="Seeds">Seeds</option>
            <option value="Fertilizer">Fertilizer</option>
            <option value="Labor">Labor</option>
            <option value="Fuel & Machinery">Fuel & Machinery</option>
            <option value="Pesticides">Pesticides</option>
          </select>
        </div>

        <div>
          <label style={styles.label}>Amount (PKR)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 5000" style={styles.input} />
        </div>

        <div>
          <label style={styles.label}>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={styles.input} />
        </div>

        <div>
          <label style={styles.label}>Note / Details</label>
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. Purchased Urea Bags" style={styles.input} />
        </div>

        <button type="submit" style={styles.btn}>Save Expense</button>
      </form>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0" },
  title: { margin: "0 0 15px 0", color: "#14532d", fontSize: "16px", fontWeight: "700" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  label: { fontSize: "12px", fontWeight: "600", color: "#475569", marginBottom: "4px", display: "block" },
  input: { width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" },
  btn: { padding: "10px", background: "#14532d", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "600", cursor: "pointer", marginTop: "6px" }
};