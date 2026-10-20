import React, { useState } from "react";

export default function CropForm({ onAddCrop }) {
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [cuttingDate, setCuttingDate] = useState("");
  const [healthScore, setHealthScore] = useState(80);
  const [totalStock, setTotalStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !field || !cuttingDate || !totalStock) {
      alert("Please fill all fields!");
      return;
    }

    const newCrop = {
      id: "C" + Date.now(),
      name,
      field,
      cuttingDate,
      healthScore: Number(healthScore),
      totalStock: Number(totalStock),
      stockRemaining: Number(totalStock),
      status: healthScore >= 80 ? "Healthy" : healthScore >= 60 ? "Needs Attention" : "Critical"
    };

    if (onAddCrop) onAddCrop(newCrop);

    setName("");
    setField("");
    setCuttingDate("");
    setHealthScore(80);
    setTotalStock("");
    alert("New Crop Added Successfully!");
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Add New Crop Record</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label style={styles.label}>Crop Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Wheat, Sugarcane" style={styles.input} />
        </div>
        <div>
          <label style={styles.label}>Field Name / Location</label>
          <input type="text" value={field} onChange={(e) => setField(e.target.value)} placeholder="e.g. North Field 01" style={styles.input} />
        </div>
        <div>
          <label style={styles.label}>Harvest / Cutting Date</label>
          <input type="date" value={cuttingDate} onChange={(e) => setCuttingDate(e.target.value)} style={styles.input} />
        </div>
        <div>
          <label style={styles.label}>Initial Yield Quantity (Kg)</label>
          <input type="number" value={totalStock} onChange={(e) => setTotalStock(e.target.value)} placeholder="e.g. 5000" style={styles.input} />
        </div>
        <div>
          <label style={styles.label}>Health Score (0-100%): {healthScore}%</label>
          <input type="range" min="0" max="100" value={healthScore} onChange={(e) => setHealthScore(e.target.value)} style={{ width: "100%" }} />
        </div>
        <button type="submit" style={styles.btn}>Save Crop Record</button>
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
  btn: { padding: "10px", background: "#14532d", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "600", cursor: "pointer", marginTop: "10px" }
};