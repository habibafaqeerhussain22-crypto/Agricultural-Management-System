import React, { useState } from "react";

export default function EnterpriseDashboard({ crops = [], buyers = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalOrders = buyers.length || 5;
  const pendingOrders = buyers.filter((b) => b.status === "Pending").length || 1;
  const inTransit = buyers.filter((b) => b.status === "In Transit").length || 1;
  const delivered = buyers.filter((b) => b.status === "Delivered").length || 4;

  return (
    <div style={styles.container}>
      {/* Top Banner with Professional Search Bar */}
      <div style={styles.welcomeBanner}>
        <div>
          <h2 style={styles.bannerTitle}>Executive Agricultural Overview</h2>
          <p style={styles.bannerSub}>Real-time crop stock, order analytics, and harvest distribution.</p>
        </div>
        <div style={styles.searchBox}>
          <svg style={styles.searchSvg} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>

      {/* 4 Metric KPI Cards */}
      <div style={styles.metricsGrid}>
        <div style={{ ...styles.kpiCard, borderTop: "4px solid #0284c7" }}>
          <div style={styles.kpiHeader}>
            <span style={styles.kpiTitle}>TOTAL ORDERS</span>
          </div>
          <div style={{ ...styles.kpiValue, color: "#0284c7" }}>{totalOrders}</div>
          <span style={styles.kpiSub}>Active market requests</span>
        </div>

        <div style={{ ...styles.kpiCard, borderTop: "4px solid #d97706" }}>
          <div style={styles.kpiHeader}>
            <span style={styles.kpiTitle}>PENDING APPROVALS</span>
          </div>
          <div style={{ ...styles.kpiValue, color: "#d97706" }}>{pendingOrders}</div>
          <span style={styles.kpiSub}>Awaiting verification</span>
        </div>

        <div style={{ ...styles.kpiCard, borderTop: "4px solid #0891b2" }}>
          <div style={styles.kpiHeader}>
            <span style={styles.kpiTitle}>IN TRANSIT</span>
          </div>
          <div style={{ ...styles.kpiValue, color: "#0891b2" }}>{inTransit}</div>
          <span style={styles.kpiSub}>Dispatched consignments</span>
        </div>

        <div style={{ ...styles.kpiCard, borderTop: "4px solid #15803d" }}>
          <div style={styles.kpiHeader}>
            <span style={styles.kpiTitle}>DELIVERED</span>
          </div>
          <div style={{ ...styles.kpiValue, color: "#15803d" }}>{delivered}</div>
          <span style={styles.kpiSub}>Completed transactions</span>
        </div>
      </div>

      {/* Main Dual Grid: Stock Bars & Bar Graph */}
      <div style={styles.mainGrid}>
        {/* Stock Progress Box */}
        <div style={styles.cardBox}>
          <div style={styles.cardHeader}>
            <div>
              <h3 style={styles.cardHeading}>Crop Inventory Status</h3>
              <p style={styles.cardSub}>Remaining stock vs allocated quota</p>
            </div>
            <span style={styles.badgeLive}>Live Inventory</span>
          </div>

          <div style={styles.cropList}>
            {filteredCrops.map((crop) => {
              const total = crop.totalStock || 1000;
              const remaining = crop.stockRemaining !== undefined ? crop.stockRemaining : 400;
              const sold = total - remaining;
              const pct = Math.min(100, Math.max(5, Math.round((sold / total) * 100)));

              return (
                <div key={crop.id || crop.name} style={styles.cropItem}>
                  <div style={styles.cropInfo}>
                    <span style={styles.cropName}>{crop.name}</span>
                    <span style={styles.cropStats}>{sold} Kg Sold / {remaining} Kg Left</span>
                  </div>
                  <div style={styles.track}>
                    <div
                      style={{
                        ...styles.fill,
                        width: `${pct}%`,
                        background: pct > 85 ? "#dc2626" : pct > 50 ? "#d97706" : "#16a34a",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Harvest vs Sales Comparison Bar Chart */}
        <div style={styles.cardBox}>
          <div style={styles.cardHeader}>
            <div>
              <h3 style={styles.cardHeading}>Harvest vs Sales Ratio</h3>
              <p style={styles.cardSub}>Yield output against market demand</p>
            </div>
          </div>

          <div style={styles.chartWrapper}>
            <div style={styles.barsContainer}>
              {crops.slice(0, 4).map((crop) => {
                const harvested = crop.totalStock || 1000;
                const remaining = crop.stockRemaining !== undefined ? crop.stockRemaining : 300;
                const sold = harvested - remaining;

                const harvestedHeight = Math.min(120, Math.max(30, (harvested / 1000) * 110));
                const soldHeight = Math.min(120, Math.max(20, (sold / 1000) * 110));

                return (
                  <div key={crop.id || crop.name} style={styles.barGroup}>
                    <div style={styles.barPair}>
                      <div
                        style={{
                          ...styles.bar,
                          height: `${harvestedHeight}px`,
                          background: "#16a34a",
                        }}
                        title={`Harvested: ${harvested} Kg`}
                      />
                      <div
                        style={{
                          ...styles.bar,
                          height: `${soldHeight}px`,
                          background: "#0284c7",
                        }}
                        title={`Sold: ${sold} Kg`}
                      />
                    </div>
                    <span style={styles.barLabel}>{crop.name.split(" ")[0]}</span>
                  </div>
                );
              })}
            </div>

            <div style={styles.chartLegend}>
              <div style={styles.legendDot}>
                <span style={{ ...styles.dot, background: "#16a34a" }} /> Harvested
              </div>
              <div style={styles.legendDot}>
                <span style={{ ...styles.dot, background: "#0284c7" }} /> Sold
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  welcomeBanner: {
    background: "linear-gradient(135deg, #0f5132 0%, #146c43 100%)",
    padding: "22px 28px",
    borderRadius: "14px",
    color: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 6px 18px rgba(15, 81, 50, 0.15)",
  },
  bannerTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "800",
    color: "#ffffff",
  },
  bannerSub: {
    margin: "6px 0 0 0",
    fontSize: "13px",
    color: "#d1e7dd",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#ffffff",
    padding: "8px 14px",
    borderRadius: "8px",
    border: "1px solid #ced4da",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },
  searchSvg: {
    color: "#64748b",
  },
  searchInput: {
    background: "transparent",
    border: "none",
    color: "#212529",
    outline: "none",
    fontSize: "13px",
    width: "180px",
    fontWeight: "500",
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  },
  kpiCard: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
  },
  kpiHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  kpiTitle: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#64748b",
    letterSpacing: "0.5px",
  },
  kpiValue: {
    fontSize: "30px",
    fontWeight: "800",
    margin: "8px 0 2px 0",
  },
  kpiSub: {
    fontSize: "12px",
    color: "#94a3b8",
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
  cardBox: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "14px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  cardHeading: {
    margin: 0,
    fontSize: "17px",
    fontWeight: "700",
    color: "#0f5132",
  },
  cardSub: {
    margin: "4px 0 0 0",
    fontSize: "12px",
    color: "#64748b",
  },
  badgeLive: {
    background: "#d1e7dd",
    color: "#0f5132",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "700",
  },
  cropList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  cropItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  cropInfo: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
  },
  cropName: {
    fontWeight: "700",
    color: "#1e293b",
  },
  cropStats: {
    color: "#64748b",
    fontSize: "12px",
  },
  track: {
    height: "10px",
    background: "#f1f5f9",
    borderRadius: "6px",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: "6px",
    transition: "width 0.4s ease",
  },
  chartWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "210px",
  },
  barsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: "150px",
    borderBottom: "2px solid #e2e8f0",
    paddingBottom: "4px",
  },
  barGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    justifyContent: "flex-end",
  },
  barPair: {
    display: "flex",
    gap: "8px",
    alignItems: "flex-end",
    height: "120px",
  },
  bar: {
    width: "22px",
    borderRadius: "4px 4px 0 0",
    transition: "height 0.3s ease",
  },
  barLabel: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#334155",
  },
  chartLegend: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    marginTop: "16px",
  },
  legendDot: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    color: "#475569",
    fontWeight: "600",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "3px",
  },
};