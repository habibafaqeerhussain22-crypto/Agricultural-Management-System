import React from "react";

export default function LandingPage({ onNavigate, onSelectCrop }) {
  // Direct High-Quality Real Agricultural Image URLs
  const products = [
    {
      id: "C1",
      name: "Premium Wheat",
      stock: 3500,
      status: "High Demand",
      img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "C2",
      name: "Super Basmati Rice",
      stock: 1200,
      status: "Organic Certified",
      img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "C3",
      name: "Golden Corn Yield",
      stock: 500,
      status: "Limited Stock",
      img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "C4",
      name: "Organic Sugarcane",
      stock: 6000,
      status: "Ready for Harvest",
      img: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "C5",
      name: "Industrial Cotton",
      stock: 2800,
      status: "Grade A Quality",
      img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "C6",
      name: "Fresh Harvest Potato",
      stock: 1500,
      status: "Fresh Stock",
      img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "C7",
      name: "Organic Soybean",
      stock: 3100,
      status: "Certified Organic",
      img: "https://images.pexels.com/photos/3735169/pexels-photo-3735169.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "C8",
      name: "Fresh Field Tomato",
      stock: 1400,
      status: "High Demand",
      img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const handleProductClick = (cropId) => {
    if (onSelectCrop) {
      onSelectCrop(cropId);
    }
    onNavigate("buyers");
  };

  return (
    <div style={styles.container}>
      {/* 1. HERO BANNER SECTION WITH REAL FARM BACKGROUND IMAGE */}
      <div style={styles.heroBanner}>
        <div style={styles.heroOverlay}>
          <span style={styles.heroBadge}>AGRICORP ENTERPRISE PLATFORM</span>
          <h1 style={styles.heroTitle}>Next-Generation Agricultural Supply & Smart Telemetry</h1>
          <p style={styles.heroSub}>
            Direct digital bridge between high-yield sustainable farms and wholesale buyers. Real-time crop monitoring, quality verification, and instant order booking.
          </p>
          <div style={styles.heroButtons}>
            <button onClick={() => onNavigate("buyers")} style={styles.btnPrimary}>
              Explore Marketplace & Order
            </button>
            <button onClick={() => onNavigate("dashboard")} style={styles.btnSecondary}>
              View Live Dashboard Analytics
            </button>
          </div>

          {/* Key Metrics Strip */}
          <div style={styles.metricsStrip}>
            <div style={styles.metricItem}>
              <span style={styles.metricVal}>15,000+ Kg</span>
              <span style={styles.metricLabel}>Total Harvested Yield</span>
            </div>
            <div style={styles.metricDivider} />
            <div style={styles.metricItem}>
              <span style={styles.metricVal}>99.4%</span>
              <span style={styles.metricLabel}>Quality Compliance Rate</span>
            </div>
            <div style={styles.metricDivider} />
            <div style={styles.metricItem}>
              <span style={styles.metricVal}>100%</span>
              <span style={styles.metricLabel}>SSL Direct Verification</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PLATFORM FEATURES HIGHLIGHT */}
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Why Source From AgriCorp?</h2>
        <p style={styles.sectionSub}>Enterprise grade agricultural management with complete transparency</p>
      </div>

      <div style={styles.featuresGrid}>
        <div style={styles.featureCard}>
          <div style={styles.iconCircle}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
          </div>
          <h3 style={styles.featureTitle}>Real-time Crop Health</h3>
          <p style={styles.featureDesc}>Live soil telemetry and moisture index tracked continuously across all active fields.</p>
        </div>

        <div style={styles.featureCard}>
          <div style={styles.iconCircle}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <h3 style={styles.featureTitle}>Direct Wholesale Buying</h3>
          <p style={styles.featureDesc}>Zero middlemen. Purchase directly from certified yield inventory with instant order allocation.</p>
        </div>

        <div style={styles.featureCard}>
          <div style={styles.iconCircle}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 style={styles.featureTitle}>Verification & Audit</h3>
          <p style={styles.featureDesc}>Full buyer documentation and CNIC authentication for smooth compliance and shipping.</p>
        </div>
      </div>

      {/* 3. PRODUCTS CATALOG GRID */}
      <div style={{ ...styles.sectionHeader, marginTop: "50px" }}>
        <h2 style={styles.sectionTitle}>Available Farm Inventory</h2>
        <p style={styles.sectionSub}>Click on any crop image or order button to proceed directly to registration & purchase</p>
      </div>

      <div style={styles.productGrid}>
        {products.map((item) => (
          <div
            key={item.id}
            style={styles.productCard}
            onClick={() => handleProductClick(item.id)}
          >
            <div style={styles.imageContainer}>
              <img
                src={item.img}
                alt={item.name}
                style={styles.productImg}
                loading="lazy"
              />
              <span style={styles.statusBadge}>{item.status}</span>
            </div>
            <div style={styles.productBody}>
              <h3 style={styles.productName}>{item.name}</h3>
              <div style={styles.stockInfo}>
                <span>Available Stock:</span>
                <strong>{item.stock.toLocaleString()} Kg</strong>
              </div>
              <button style={styles.orderBtn}>
                Order Crop Record
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4. TRUST BANNER */}
      <div style={styles.ctaBanner}>
        <div>
          <h3 style={styles.ctaTitle}>Ready to register as a certified buyer?</h3>
          <p style={styles.ctaSub}>Complete your registration in under 2 minutes and secure your crop allocations today.</p>
        </div>
        <button onClick={() => onNavigate("buyers")} style={styles.ctaBtn}>
          Register Buyer Profile Now
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    paddingBottom: "20px",
  },
  heroBanner: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
  },
heroOverlay: {
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.75) 100%)",
    padding: "60px 40px 40px 40px",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  heroBadge: {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(6px)",
    color: "#ffffff",
    padding: "6px 16px",
    borderRadius: "30px",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  heroTitle: {
    margin: "18px 0 12px 0",
    fontSize: "36px",
    fontWeight: "800",
    lineHeight: "1.2",
    maxWidth: "800px",
    color: "#ffffff",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  heroSub: {
    margin: "0 0 28px 0",
    fontSize: "15px",
    color: "#f1f5f9",
    maxWidth: "680px",
    lineHeight: "1.6",
  },
  heroButtons: {
    display: "flex",
    gap: "16px",
    marginBottom: "40px",
  },
 btnPrimary: {
    padding: "14px 28px",
    background: "#14532d", 
    color: "#ffffff", 
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(21, 128, 61, 0.4)",
    transition: "all 0.2s ease",
  },
  btnSecondary: {
    padding: "14px 28px",
    background: "rgba(255, 255, 255, 0.15)",
    color: "#ffffff", 
    border: "1px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    backdropFilter: "blur(6px)",
    transition: "all 0.2s ease",
  },
  metricsStrip: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(8px)",
    padding: "18px 40px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    width: "100%",
    maxWidth: "800px",
  },
  metricItem: { display: "flex", flexDirection: "column", gap: "2px" },
  metricVal: { fontSize: "20px", fontWeight: "800", color: "#4ade80" },
  metricLabel: { fontSize: "11px", color: "#e2e8f0" },
  metricDivider: { width: "1px", height: "30px", background: "rgba(255, 255, 255, 0.2)" },
  sectionHeader: { textAlign: "center", margin: "20px 0 10px 0" },
  sectionTitle: { margin: 0, fontSize: "24px", color: "#0f5132", fontWeight: "800" },
  sectionSub: { margin: "6px 0 0 0", fontSize: "13px", color: "#64748b" },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  featureCard: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  iconCircle: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "#f0fdf4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14px",
    border: "1px solid #dcfce7",
  },
  featureTitle: { margin: "0 0 6px 0", fontSize: "16px", fontWeight: "700", color: "#1e293b" },
  featureDesc: { margin: 0, fontSize: "13px", color: "#64748b", lineHeight: "1.5" },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },
  productCard: {
    background: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "160px",
    overflow: "hidden",
    background: "linear-gradient(135deg, #14532d 0%, #166534 100%)",
  },
  productImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  statusBadge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "rgba(15, 81, 50, 0.88)",
    color: "#ffffff",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "10px",
    fontWeight: "700",
    backdropFilter: "blur(4px)",
  },
  productBody: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  productName: { margin: 0, fontSize: "16px", fontWeight: "700", color: "#0f5132" },
  stockInfo: { display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#475569" },
  orderBtn: {
    padding: "10px",
    background: "#0f5132",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "700",
    fontSize: "12px",
    cursor: "pointer",
    marginTop: "4px",
  },
  ctaBanner: {
    marginTop: "30px",
    background: "#f0fdf4",
    border: "1px solid #bbf7d0",
    borderRadius: "14px",
    padding: "24px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ctaTitle: { margin: 0, fontSize: "18px", fontWeight: "800", color: "#166534" },
  ctaSub: { margin: "4px 0 0 0", fontSize: "13px", color: "#15803d" },
  ctaBtn: {
    padding: "12px 24px",
    background: "#15803d",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "13px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
};