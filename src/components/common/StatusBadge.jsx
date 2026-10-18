import React from "react";

export default function StatusBadge({ status }) {
  const getBadgeStyle = () => {
    switch (status) {
      case "Healthy":
        return { background: "#e8f5e9", color: "#2e7d32", border: "1px solid #c8e6c9" };
      case "Needs Attention":
        return { background: "#fff3e0", color: "#ef6c00", border: "1px solid #ffe0b2" };
      case "Critical":
        return { background: "#ffebee", color: "#c62828", border: "1px solid #ffcdd2" };
      default:
        return { background: "#f5f5f5", color: "#616161", border: "1px solid #e0e0e0" };
    }
  };

  return (
    <span style={{ ...styles.badge, ...getBadgeStyle() }}>
      {status}
    </span>
  );
}

const styles = {
  badge: { padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "600", display: "inline-block" }
};