import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

export default function WeatherChart({ data }) {
  return (
    <div style={styles.chartCard}>
      <h3>2-3 Days Weather & Crop Growth Trend</h3>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temp" stroke="#ed6c02" name="Temp (°C)" />
            <Line type="monotone" dataKey="humidity" stroke="#1565c0" name="Humidity (%)" />
            <Line type="monotone" dataKey="growth" stroke="#2e7d32" name="Growth (kg)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const styles = {
  chartCard: { background: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", marginBottom: "20px" },
};