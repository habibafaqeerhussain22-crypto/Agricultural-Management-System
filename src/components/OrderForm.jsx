import React, { useState } from "react";

export default function OrderForm({ onAddOrder }) {
  const [supplierName, setSupplierName] = useState("");
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!supplierName.trim() || !cropName.trim() || !quantity.trim()) {
      setError("Please fill all fields!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      supplierName,
      cropName,
      quantity,
      date: new Date().toISOString().split("T")[0],
    };

    onAddOrder(newOrder);

    setSuccessMsg(`Order placed successfully for "${supplierName}"!`);
    setError("");

    setSupplierName("");
    setCropName("");
    setQuantity("");

    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);
  };

  return (
    <div style={styles.formCard}>
      <h3>New Supplier Order</h3>

      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
      {successMsg && <div style={styles.alertSuccess}>{successMsg}</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Supplier Name"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Crop / Item Name"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Quantity (e.g. 10 Bags)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.btn}>Submit Order</button>
      </form>
    </div>
  );
}

const styles = {
  formCard: { background: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  form: { display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" },
  input: { padding: "10px", borderRadius: "4px", border: "1px solid #ccc" },
  btn: { padding: "10px", background: "#2e7d32", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" },
  alertSuccess: { padding: "10px", background: "#e8f5e9", color: "#2e7d32", border: "1px solid #a5d6a7", borderRadius: "4px", fontSize: "14px" },
};