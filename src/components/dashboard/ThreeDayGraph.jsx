import React, { useState } from "react";

export default function ThreeDayGraph() {
  const [metric, setMetric] = useState("temp");

  const data = [
    { day: "Today", temp: 28, humidity: 65, yield: 85 },
    { day: "Tomorrow", temp: 32, humidity: 55, yield: 90 },
    { day: "Day 3", temp: 26, humidity: 75, yield: 82 },
  ];

  const getMetricConfig = () => {
    switch (metric) {
      case "temp":
        return { label: "Temperature Telemetry (°C)", color: "#0f5132", key: "temp", unit: "°C", min: 15, max: 45 };
      case "humidity":
        return { label: "Humidity Telemetry (%)", color: "#0284c7", key: "humidity", unit: "%", min: 20, max: 100 };
      case "yield":
        return { label: "Crop Health Index", color: "#7c3aed", key: "yield", unit: "/100", min: 40, max: 100 };
      default:
        return { label: "Temperature Telemetry (°C)", color: "#0f5132", key: "temp", unit: "°C", min: 15, max: 45 };
    }
  };

  const config = getMetricConfig();

  const points = data.map((d, index) => {
    const x = 120 + index * 200;
    const y = 130 - ((d[config.key] - config.min) / (config.max - config.min)) * 85;
    return { x, y, val: d[config.key], day: d.day };
  });

  const pathD = points.reduce((acc, pt, idx) => (idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`), "");

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <h3 style={styles.title}>3-Day Predictive Telemetry Analytics</h3>
          <p style={styles.subtitle}>{config.label} forecasted micro-climate metrics</p>
        </div>
        <div style={styles.btnGroup}>
          <button
            onClick={() => setMetric("temp")}
            style={metric === "temp" ? styles.activeBtn : styles.btn}
          >
            Temperature
          </button>
          <button
            onClick={() => setMetric("humidity")}
            style={metric === "humidity" ? styles.activeBtn : styles.btn}
          >
            Humidity
          </button>
          <button
            onClick={() => setMetric("yield")}
            style={metric === "yield" ? styles.activeBtn : styles.btn}
          >
            Crop Index
          </button>
        </div>
      </div>

      <div style={styles.chartWrapper}>
        <svg viewBox="0 0 550 170" style={styles.svg}>
          <line x1="40" y1="40" x2="510" y2="40" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="40" y1="85" x2="510" y2="85" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="40" y1="130" x2="510" y2="130" stroke="#f1f5f9" strokeWidth="1" />

          <defs>
            <linearGradient id="enterpriseGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={config.color} stopOpacity="0.18" />
              <stop offset="100%" stopColor={config.color} stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d={`${pathD} L ${points[points.length - 1].x} 135 L ${points[0].x} 135 Z`}
            fill="url(#enterpriseGrad)"
          />

          <path
            d={pathD}
            fill="none"
            stroke={config.color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map((pt, idx) => (
            <g key={idx}>
              <circle cx={pt.x} cy={pt.y} r="4.5" fill="#ffffff" stroke={config.color} strokeWidth="2.5" />
              
              <rect
                x={pt.x - 22}
                y={pt.y - 30}
                width="44"
                height="20"
                rx="4"
                fill="#0f172a"
              />
              <text
                x={pt.x}
                y={pt.y - 16}
                fill="#ffffff"
                fontSize="10"
                fontWeight="700"
                textAnchor="middle"
              >
                {pt.val}{config.unit}
              </text>

              <text
                x={pt.x}
                y="156"
                fill="#64748b"
                fontSize="12"
                fontWeight="600"
                textAnchor="middle"
              >
                {pt.day}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
    border: "1px solid #e2e8f0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: { margin: 0, fontSize: "17px", color: "#0f5132", fontWeight: "700" },
  subtitle: { margin: "4px 0 0 0", fontSize: "12px", color: "#64748b" },
  btnGroup: { display: "flex", gap: "6px", background: "#f1f5f9", padding: "4px", borderRadius: "8px" },
  btn: {
    padding: "6px 14px",
    border: "none",
    background: "transparent",
    color: "#64748b",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
  },
  activeBtn: {
    padding: "6px 14px",
    border: "none",
    background: "#ffffff",
    color: "#0f5132",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "700",
    boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
  },
  chartWrapper: {
    width: "100%",
    background: "#fafafa",
    borderRadius: "10px",
    padding: "16px 0",
    border: "1px solid #f1f5f9",
    display: "flex",
    justifyContent: "center",
  },
  svg: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
  },
};