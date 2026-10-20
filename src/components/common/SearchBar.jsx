import React from 'react';

export const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div style={styles.container}>
      <svg
        style={styles.icon}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#64748b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search records..."}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#ffffff",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    padding: "8px 14px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    width: "100%",
  },
  icon: {
    flexShrink: 0,
  },
  input: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "13px",
    color: "#1e293b",
    fontWeight: "500",
    background: "transparent",
  },
};