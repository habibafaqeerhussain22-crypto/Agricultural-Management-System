import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h4 style={styles.heading}>AgriCorp Enterprise Systems</h4>
          <p style={styles.text}>Enterprise-grade agricultural monitoring, crop telemetry, and secure buyer fulfillment pipeline.</p>
        </div>
        <div style={styles.linksCol}>
          <span style={styles.secureBadge}>🔒 SSL Encrypted Telemetry</span>
          <p style={styles.copyright}>© 2026 AgriCorp Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#1b4332", // Navbar aur buttons se match karta hua professional color
    color: "#e2e8f0",
    padding: "24px 40px",
    marginTop: "60px",
    borderTop: "3px solid #143224",
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
  heading: { margin: "0 0 6px 0", fontSize: "15px", color: "#ffffff", fontWeight: "700" },
  text: { margin: 0, fontSize: "12px", color: "#94a3b8", maxWidth: "450px" },
  linksCol: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" },
  secureBadge: { fontSize: "11px", color: "#34d399", fontWeight: "600" },
  copyright: { margin: 0, fontSize: "11px", color: "#94a3b8" },
};