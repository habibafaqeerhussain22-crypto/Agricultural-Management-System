import React, { useState } from "react";

export default function OrderForm({ crops = [], onAddOrder }) {
  const [cropId, setCropId] = useState(crops[0]?.id || "");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quantity || quantity <= 0) {
      alert("Please enter a valid quantity!");
      return;
    }
    const newOrder = {
      id: "O" + Date.now(),
      cropId,
      quantity: Number(quantity),
      orderDate: new Date().toISOString().split("T")[0],
      status: "Pending"
    };
    if (onAddOrder) onAddOrder(newOrder);
    setQuantity("");
    alert("Order Created Successfully!");
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Create New Market Order</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label style={styles.label}>Select Crop</label>
          <select value={cropId} onChange={(e) => setCropId(e.target.value)} style={styles.input}>
            {crops.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={styles.label}>Order Quantity (Kg)</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="e.g. 200" style={styles.input} />
        </div>
        <button type="submit" style={styles.btn}>Submit Order</button>
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
  btn: { padding: "10px", background: "#14532d", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "600", cursor: "pointer" }
};