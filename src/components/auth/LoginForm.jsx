import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    dispatch(login({ username, password }));
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>System Login</h2>
      <p style={styles.sub}>Enter credentials to access farm management portal</p>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin or manager"
            style={styles.input}
          />
        </div>

        <div>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="admin123 or manager123"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.btn}>Login to Dashboard</button>
      </form>

      <div style={styles.demoBox}>
        <strong>Demo Accounts:</strong>
        <div>• Admin: <code>admin</code> / <code>admin123</code></div>
        <div>• Manager: <code>manager</code> / <code>manager123</code></div>
      </div>
    </div>
  );
}

const styles = {
  card: { maxWidth: "400px", margin: "40px auto", background: "#fff", padding: "28px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  title: { margin: "0 0 6px 0", color: "#14532d", fontSize: "20px", fontWeight: "800" },
  sub: { margin: "0 0 20px 0", color: "#64748b", fontSize: "13px" },
  form: { display: "flex", flexDirection: "column", gap: "14px" },
  label: { fontSize: "12px", fontWeight: "600", color: "#334155", marginBottom: "4px", display: "block" },
  input: { width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" },
  btn: { padding: "12px", background: "#14532d", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "700", cursor: "pointer", marginTop: "6px" },
  demoBox: { marginTop: "20px", padding: "12px", background: "#f8fafc", borderRadius: "6px", border: "1px solid #e2e8f0", fontSize: "12px", color: "#475569" }
};