import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h4 style={styles.brand}>AgriCorp Enterprise Systems</h4>
          <p style={styles.desc}>
            Enterprise-grade agricultural monitoring, crop telemetry, and secure buyer fulfillment pipeline.
          </p>
        </div>
        <div style={styles.rightBox}>
          <div style={styles.securityBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span style={{ color: "#22c55e", fontWeight: "600", fontSize: "12px" }}>SSL Encrypted Telemetry</span>
          </div>
          <p style={styles.copy}>
            © 2026 AgriCorp Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0f3822",
    color: "#e2e8f0",
    padding: "32px 20px",
    marginTop: "auto",
    borderTop: "1px solid #14532d",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  brand: {
    margin: "0 0 6px 0",
    fontSize: "16px",
    fontWeight: "700",
    color: "#ffffff",
  },
  desc: {
    margin: 0,
    fontSize: "12px",
    color: "#94a3b8",
    maxWidth: "450px",
    lineHeight: "1.5",
  },
  rightBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "6px",
  },
  securityBadge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "rgba(255,255,255,0.05)",
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  copy: {
    margin: 0,
    fontSize: "12px",
    color: "#64748b",
  },
};