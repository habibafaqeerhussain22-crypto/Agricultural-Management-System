import React from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <div style={{ padding: "40px", textAlign: "center", color: "#dc2626" }}>Access Denied: Please Login First.</div>;
  }

  if (requiredRole && role !== requiredRole && role !== "Admin") {
    return <div style={{ padding: "40px", textAlign: "center", color: "#dc2626" }}>Access Restricted: Admin privileges required.</div>;
  }

  return children;
}