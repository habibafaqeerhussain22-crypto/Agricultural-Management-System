import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorker } from '../../store/slices/workersSlice';

export default function WorkerForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: '',
    cnic: '',
    phone: '',
    role: 'Farm Hand',
    dailyWage: '',
    status: 'Active'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.cnic || !formData.dailyWage) {
      alert("Please fill all required fields!");
      return;
    }
    dispatch(addWorker(formData));
    setFormData({ fullName: '', cnic: '', phone: '', role: 'Farm Hand', dailyWage: '', status: 'Active' });
    alert("Worker added successfully!");
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: '15px', color: '#1e293b' }}>Add New Worker</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="CNIC (e.g. 35201-1234567-1)"
          value={formData.cnic}
          onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          style={inputStyle}
        />
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          style={inputStyle}
        >
          <option value="Farm Hand">Farm Hand</option>
          <option value="Driver">Driver</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Sprayer">Sprayer</option>
        </select>
        <input
          type="number"
          placeholder="Daily Wage (PKR)"
          value={formData.dailyWage}
          onChange={(e) => setFormData({ ...formData, dailyWage: e.target.value })}
          style={inputStyle}
          required
        />
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          style={inputStyle}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit" style={btnStyle}>Save Worker</button>
      </form>
    </div>
  );
}

const cardStyle = { background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' };
const inputStyle = { padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', width: '100%', boxSizing: 'border-box' };
const btnStyle = { gridColumn: 'span 2', padding: '12px', background: '#14532d', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' };