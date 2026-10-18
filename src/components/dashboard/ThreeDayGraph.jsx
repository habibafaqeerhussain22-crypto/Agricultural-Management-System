import React, { useState } from "react";

export default function ThreeDayGraph() {
  const [metric, setMetric] = useState("temp");

  // 3-Day Multi-Metric Forecast Data
  const data = [
    { day: "Today", temp: 28, humidity: 65, yield: 85 },
    { day: "Tomorrow", temp: 32, humidity: 55, yield: 90 },
    { day: "Day 3", temp: 26, humidity: 75, yield: 82 },
  ];

  const getMetricConfig = () => {
    switch (metric) {
      case "temp":
        return { label: "Temperature Trend (°C)", color: "#10b981", key: "temp", unit: "°C", min: 20, max: 40 };
      case "humidity":
        return { label: "Air Humidity Trend (%)", color: "#3b82f6", key: "humidity", unit: "%", min: 30, max: 90 };
      case "yield":
        return { label: "Crop Health Index Score", color: "#8b5cf6", key: "yield", unit: "/100", min: 50, max: 100 };
      default:
        return { label: "Temperature (°C)", color: "#10b981", key: "temp", unit: "°C", min: 20, max: 40 };
    }
  };

  const config = getMetricConfig();

  // SVG Coordinates mapping calculation for smooth line
  // Width: 500, Height: 160
  const points = data.map((d, index) => {
    const x = 70 + index * 180;
    const y = 140 - ((d[config.key] - config.min) / (config.max - config.min)) * 100;
    return { x, y, val: d[config.key], day: d.day };
  });

  const pathD = points.reduce((acc, pt, idx) => (idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`), "");

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <h3 style={styles.title}>3-Day Predictive Analytics Trend</h3>
          <p style={styles.subtitle}>Real-time telemetry and forecasted micro-climate metrics</p>
        </div>
        <div style={styles.btnGroup}>
          <button
            onClick={() => setMetric("temp")}
            style={metric === "temp's" || metric === "temp" ? styles.activeBtn : styles.btn}
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

      {/* Professional SVG Trend Chart */}
      <div style={styles.chartWrapper}>
        <svg viewBox="0 0 500 180" style={styles.svg}>
          {/* Background Grid Lines */}
          <line x1="50" y1="40" x2="450" y2="40" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="50" y1="90" x2="450" y2="90" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="50" y1="140" x2="450" y2="140" stroke="#f1f5f9" strokeWidth="1" />

          {/* Area Gradient Fill under the line */}
          <defs>
            <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={config.color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={config.color} stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d={`${pathD} L ${points[points.length - 1].x} 150 L ${points[0].x} 150 Z`}
            fill="url(#trendGradient)"
          />

          {/* Smooth Trend Line */}
          <path
            d={pathD}
            fill="none"
            stroke={config.color}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points & Value Badges */}
          {points.map((pt, idx) => (
            <g key={idx}>
              {/* Outer Glow Circle */}
              <circle cx={pt.x} cy={pt.y} r="7" fill={config.color} opacity="0.2" />
              {/* Inner Core Point */}
              <circle cx={pt.x} cy={pt.y} r="4.5" fill="#ffffff" stroke={config.color} strokeWidth="3" />

              {/* Floating Value Pill */}
              <rect
                x={pt.x - 22}
                y={pt.y - 32}
                width="44"
                height="20"
                rx="4"
                fill="#1e293b"
              />
              <text
                x={pt.x}
                y={pt.y - 18}
                fill="#ffffff"
                fontSize="10"
                fontWeight="bold"
                textAnchor="middle"
              >
                {pt.val}{config.unit}
              </text>

              {/* Day Label at Bottom */}
              <text
                x={pt.x}
                y="170"
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
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
    border: "1px solid #e2e8f0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "12px",
  },
  title: { margin: 0, fontSize: "17px", color: "#0f172a", fontWeight: "700", letterSpacing: "-0.2px" },
  subtitle: { margin: "4px 0 0 0", fontSize: "13px", color: "#64748b" },
  btnGroup: { display: "flex", gap: "8px", background: "#f1f5f9", padding: "4px", borderRadius: "8px" },
  btn: {
    padding: "6px 14px",
    border: "none",
    background: "transparent",
    color: "#475569",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "500",
    transition: "all 0.2s",
  },
  activeBtn: {
    padding: "6px 14px",
    border: "none",
    background: "#ffffff",
    color: "#0f172a",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "700",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },
  chartWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    background: "#fafafa",
    borderRadius: "8px",
    padding: "10px 0",
    border: "1px solid #f1f5f9",
  },
  svg: {
    width: "100%",
    maxWidth: "580px",
    height: "auto",
    overflow: "visible",
  },
};