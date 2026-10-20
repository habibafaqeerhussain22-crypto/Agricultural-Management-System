// src/components/common/EmptyState.jsx
import React from 'react';

export const EmptyState = ({ message }) => {
  return (
    <div className="text-center p-5 text-muted">
      <div className="fs-1 mb-2">📂</div>
      <p>{message || "No records found."}</p>
    </div>
  );
};