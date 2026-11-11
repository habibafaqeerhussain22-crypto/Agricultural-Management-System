import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorkers, removeWorker } from '../../store/slices/workersSlice';

export default function WorkerTable() {
  const dispatch = useDispatch();
  const workers = useSelector((state) => state.workers?.list || []);

  // Page load hotay hi backend database se workers fetch karne ke liye
  useEffect(() => {
    dispatch(fetchWorkers());
  }, [dispatch]);

  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: '15px', color: '#1e293b' }}>Workers List (Live Database)</h3>
      {workers.length === 0 ? (
        <p style={{ color: '#64748b' }}>No workers registered yet or connecting to database...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8fafc', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>CNIC</th>
              <th style={thStyle}>Role</th>
              <th style={thStyle}>Daily Wage</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((worker) => (
              <tr key={worker.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={tdStyle}>{worker.fullName}</td>
                <td style={tdStyle}>{worker.cnic}</td>
                <td style={tdStyle}>{worker.role}</td>
                <td style={tdStyle}>Rs. {worker.dailyWage}</td>
                <td style={tdStyle}>
                  <span style={{
                    padding: '4px 8px', borderRadius: '4px', fontSize: '12px',
                    background: worker.status === 'Active' ? '#dcfce7' : '#fee2e2',
                    color: worker.status === 'Active' ? '#15803d' : '#b91c1c'
                  }}>
                    {worker.status}
                  </span>
                </td>
                <td style={tdStyle}>
                  <button
                    onClick={() => dispatch(removeWorker(worker.id))}
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