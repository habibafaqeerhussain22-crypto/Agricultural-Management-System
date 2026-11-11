import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeEquipment } from '../../store/slices/equipmentSlice';

export default function EquipmentTable() {
  const dispatch = useDispatch();
  const equipmentList = useSelector((state) => state.equipment?.list || []);

  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: '15px', color: '#1e293b' }}>Equipment Inventory</h3>
      {equipmentList.length === 0 ? (
        <p style={{ color: '#64748b' }}>No equipment added yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8fafc', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Last Service</th>
              <th style={thStyle}>Interval (Days)</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.type}</td>
                <td style={tdStyle}>
                  <span style={{
                    padding: '4px 8px', borderRadius: '4px', fontSize: '12px',
                    background: item.status === 'Active' ? '#dcfce7' : item.status === 'Under Repair' ? '#fee2e2' : '#fef9c3',
                    color: item.status === 'Active' ? '#15803d' : item.status === 'Under Repair' ? '#b91c1c' : '#854d0e'
                  }}>
                    {item.status}
                  </span>
                </td>
                <td style={tdStyle}>{item.lastServiceDate || 'N/A'}</td>
                <td style={tdStyle}>{item.serviceIntervalDays} days</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => dispatch(removeEquipment(item.id))}
                    style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const cardStyle = { background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginTop: '20px' };
const thStyle = { padding: '12px', color: '#475569', fontSize: '14px' };
const tdStyle = { padding: '12px', fontSize: '14px', color: '#334155' };