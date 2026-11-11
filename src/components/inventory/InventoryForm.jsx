import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addInventoryItem } from "../../store/slices/inventorySlice";

export default function InventoryForm() {
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  const [type, setType] = useState("Fertilizer");
  const [qty, setQty] = useState("");
  const [minQty, setMinQty] = useState("");
  const [unit, setUnit] = useState("Bags");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item || !qty || !minQty) {
      alert("Please fill all inventory fields.");
      return;
    }

    const newItem = {
      id: "I" + Date.now(),
      item,
      type,
      qty: Number(qty),
      minQty: Number(minQty),
      unit
    };

    dispatch(addInventoryItem(newItem));
    setItem("");
    setQty("");
    setMinQty("");
    alert("Inventory Stock Added!");
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Add Farm Input Inventory</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label style={styles.label}>Item Name</label>
          <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="e.g. Urea Bags, Spray A" style={styles.input} />
        </div>

        <div>
          <label style={styles.label}>Item Category</label>
          <select value={type} onChange={(e) => setType(e.target.value)} style={styles.input}>
            <option value="Fertilizer">Fertilizer</option>
            <option value="Pesticide">Pesticide</option>
            <option value="Seed">Seed</option>
          </select>
        </div>

        <div>
          <label style={styles.label}>Available Quantity</label>
          <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="e.g. 50" style={styles.input} />
        </div>

        <div>
          <label style={styles.label}>Minimum Stock Threshold (Alert level)</label>
          <input type="number" value={minQty} onChange={(e) => setMinQty(e.target.value)} placeholder="e.g. 10" style={styles.input} />
        </div>

        <div>
          <label style={styles.label}>Measurement Unit</label>
          <select value={unit} onChange={(e) => setUnit(e.target.value)} style={styles.input}>
            <option value="Bags">Bags</option>
            <option value="Liters">Liters</option>
            <option value="Kg">Kg</option>
            <option value="Packets">Packets</option>
          </select>
        </div>

        <button type="submit" style={styles.btn}>Save Inventory Item</button>
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