import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEquipment } from '../../store/slices/equipmentSlice';

export default function EquipmentForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    type: 'Tractor',
    purchaseDate: '',
    status: 'Active',
    lastServiceDate: '',
    serviceIntervalDays: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.purchaseDate || !formData.serviceIntervalDays) {
      alert("Please fill all required fields!");
      return;
    }
    dispatch(addEquipment(formData));
    setFormData({ name: '', type: 'Tractor', purchaseDate: '', status: 'Active', lastServiceDate: '', serviceIntervalDays: '' });
    alert("Equipment registered successfully!");
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: '15px', color: '#1e293b' }}>Add New Equipment</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <input
          type="text"
          placeholder="Equipment Name (e.g. John Deere Tractor)"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={inputStyle}
          required
        />
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          style={inputStyle}
        >
          <option value="Tractor">Tractor</option>
          <option value="Water Pump">Water Pump</option>
          <option value="Sprayer">Sprayer</option>
          <option value="Harvester">Harvester</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          placeholder="Purchase Date"
          value={formData.purchaseDate}
          onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
          style={inputStyle}
          required
        />
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          style={inputStyle}
        >
          <option value="Active">Active</option>
          <option value="Under Repair">Under Repair</option>
          <option value="Idle">Idle</option>
        </select>
        <input
          type="date"
          placeholder="Last Service Date"
          value={formData.lastServiceDate}
          onChange={(e) => setFormData({ ...formData, lastServiceDate: e.target.value })}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Service Interval (Days)"
          value={formData.serviceIntervalDays}
          onChange={(e) => setFormData({ ...formData, serviceIntervalDays: e.target.value })}
          style={inputStyle}
          required
        />
        <button type="submit" style={btnStyle}>Save Equipment</button>
      </form>
    </div>
  );
}

const cardStyle = { background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' };
const inputStyle = { padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', width: '100%', boxSizing: 'border-box' };
const btnStyle = { gridColumn: 'span 2', padding: '12px', background: '#14532d', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' };