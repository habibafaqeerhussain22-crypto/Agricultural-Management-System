import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/slices/tasksSlice";

export default function TaskForm() {
  const dispatch = useDispatch();
  const crops = useSelector((state) => state.crops.list);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("Irrigation");
  const [cropId, setCropId] = useState(crops[0]?.id || "");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert("Please enter title and due date.");
      return;
    }

    const newTask = {
      id: "T" + Date.now(),
      title,
      type,
      cropId,
      dueDate,
      status: "Pending"
    };

    dispatch(addTask(newTask));
    setTitle("");
    setDueDate("");
    alert("Farm Task Scheduled!");
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Schedule Farm Task</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label style={styles.label}>Task Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Water North Field" style={styles.input} />
        </div>

        <div>
          <label style={styles.label}>Task Category</label>
          <select value={type} onChange={(e) => setType(e.target.value)} style={styles.input}>
            <option value="Irrigation">Irrigation</option>
            <option value="Fertilizer">Fertilizer Application</option>
            <option value="Spraying">Pesticide Spraying</option>
            <option value="Labor">Labor Work</option>
          </select>
        </div>

        <div>
          <label style={styles.label}>Related Crop</label>
          <select value={cropId} onChange={(e) => setCropId(e.target.value)} style={styles.input}>
            {crops.map((c) => (
              <option key={c.id} value={c.id}>{c.name} ({c.field})</option>
            ))}
          </select>
        </div>

        <div>
          <label style={styles.label}>Due Date</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} style={styles.input} />
        </div>

        <button type="submit" style={styles.btn}>Save Scheduled Task</button>
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