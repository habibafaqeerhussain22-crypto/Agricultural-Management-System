import React, { useState } from "react";
import { validateName, validateCnic, validateImage, formatCnicInput } from "../../utils/validators";

export default function BuyerForm({ crops, onAddBuyer }) {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [selectedCropId, setSelectedCropId] = useState(crops[0]?.id || "");
  const [quantity, setQuantity] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [errors, setErrors] = useState({});

  const handleCnicChange = (e) => {
    const formatted = formatCnicInput(e.target.value);
    setCnic(formatted);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imgErr = validateImage(file);
    if (imgErr) {
      setErrors((prev) => ({ ...prev, image: imgErr }));
      setImagePreview("");
      return;
    }
    setErrors((prev) => ({ ...prev, image: "" }));

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameErr = validateName(name);
    const cnicErr = validateCnic(cnic);
    const selectedCrop = crops.find((c) => c.id === selectedCropId);

    let qtyErr = "";
    if (!quantity || Number(quantity) <= 0) {
      qtyErr = "Please enter a valid quantity.";
    } else if (selectedCrop && Number(quantity) > selectedCrop.stockRemaining) {
      qtyErr = `Quantity exceeds available stock (${selectedCrop.stockRemaining} Kg).`;
    }

    let imgErr = "";
    if (!imagePreview) {
      imgErr = "Buyer photo is required.";
    }

    if (nameErr || cnicErr || qtyErr || imgErr) {
      setErrors({ name: nameErr, cnic: cnicErr, quantity: qtyErr, image: imgErr });
      return;
    }

    const newBuyer = {
      id: "B" + Date.now(),
      name,
      cnic,
      cropName: selectedCrop?.name || "",
      cropId: selectedCropId,
      quantity: Number(quantity),
      date: new Date().toISOString().split("T")[0],
      imageBase64: imagePreview,
    };

    onAddBuyer(newBuyer);
    setName("");
    setCnic("");
    setQuantity("");
    setImagePreview("");
    setErrors({});
    alert("Buyer Record Successfully Saved!");
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Register Buyer & Sale Record</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ali Raza"
            style={styles.input}
          />
          {errors.name && <span style={styles.err}>{errors.name}</span>}
        </div>

        <div>
          <label style={styles.label}>CNIC Number (13 Digits)</label>
          <input
            type="text"
            value={cnic}
            onChange={handleCnicChange}
            placeholder="12345-1234567-1"
            maxLength={15}
            style={styles.input}
          />
          {errors.cnic && <span style={styles.err}>{errors.cnic}</span>}
        </div>

        <div>
          <label style={styles.label}>Select Crop</label>
          <select
            value={selectedCropId}
            onChange={(e) => setSelectedCropId(e.target.value)}
            style={styles.input}
          >
            {crops.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} (Available: {c.stockRemaining} Kg)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={styles.label}>Quantity (Kg)</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 50"
            style={styles.input}
          />
          {errors.quantity && <span style={styles.err}>{errors.quantity}</span>}
        </div>

        <div>
          <label style={styles.label}>Buyer Photo (JPG/PNG, Max 1MB)</label>
          <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} style={{ fontSize: "14px" }} />
          {errors.image && <span style={styles.err}>{errors.image}</span>}
          {imagePreview && (
            <div style={{ marginTop: "10px" }}>
              <img src={imagePreview} alt="Preview" style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "4px" }} />
            </div>
          )}
        </div>

        <button type="submit" style={styles.btn}>Save Buyer Record</button>
      </form>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "24px", borderRadius: "6px", border: "1px solid #e0e0e0" },
  title: { margin: "0 0 15px 0", color: "#1e4620", fontSize: "18px" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  label: { fontSize: "13px", fontWeight: "600", color: "#333", marginBottom: "4px", display: "block" },
  input: { width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ced4da", fontSize: "14px", boxSizing: "border-box" },
  err: { color: "#d32f2f", fontSize: "12px", marginTop: "2px", display: "block" },
  btn: { padding: "12px", background: "#1e4620", color: "#fff", border: "none", borderRadius: "4px", fontWeight: "600", cursor: "pointer", marginTop: "10px" }
};