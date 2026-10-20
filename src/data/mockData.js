// src/data/mockData.js

export const initialCrops = [
  { id: "C1", name: "Wheat", field: "North Field A", healthScore: 85, status: "Healthy", cuttingDate: "2026-10-25", harvestQty: 5000, stockRemaining: 3500 },
  { id: "C2", name: "Rice", field: "South Field B", healthScore: 62, status: "Needs Attention", cuttingDate: "2026-10-20", harvestQty: 4000, stockRemaining: 1200 },
  { id: "C3", name: "Corn", field: "East Field C", healthScore: 40, status: "Critical", cuttingDate: "2026-10-18", harvestQty: 3000, stockRemaining: 500 },
  { id: "C4", name: "Sugarcane", field: "West Field D", healthScore: 92, status: "Healthy", cuttingDate: "2026-11-05", harvestQty: 8000, stockRemaining: 6000 },
  { id: "C5", name: "Cotton", field: "Central Field E", healthScore: 78, status: "Healthy", cuttingDate: "2026-11-12", harvestQty: 4500, stockRemaining: 2800 },
  { id: "C6", name: "Barley", field: "Field F-01", healthScore: 55, status: "Needs Attention", cuttingDate: "2026-10-28", harvestQty: 2500, stockRemaining: 900 },
  { id: "C7", name: "Soybean", field: "Field F-02", healthScore: 88, status: "Healthy", cuttingDate: "2026-11-15", harvestQty: 3500, stockRemaining: 3100 },
  { id: "C8", name: "Potato", field: "Field G-01", healthScore: 35, status: "Critical", cuttingDate: "2026-10-19", harvestQty: 6000, stockRemaining: 1500 },
  { id: "C9", name: "Tomato", field: "Greenhouse H", healthScore: 90, status: "Healthy", cuttingDate: "2026-10-30", harvestQty: 2000, stockRemaining: 1400 },
  { id: "C10", name: "Sunflower", field: "Sun Valley I", healthScore: 74, status: "Needs Attention", cuttingDate: "2026-11-08", harvestQty: 3200, stockRemaining: 2100 }
];

export const initialBuyers = [
  {
    id: "B1",
    name: "Muhammad Ali",
    cnic: "35202-1234567-1",
    cropName: "Wheat",
    quantity: 150,
    date: "2026-10-12",
    imageBase64: "",
    status: "Delivered"
  },
  {
    id: "B2",
    name: "Usman Ahmed",
    cnic: "35201-9876543-2",
    cropName: "Rice",
    quantity: 300,
    date: "2026-10-14",
    imageBase64: "",
    status: "Pending"
  },
  {
    id: "B3",
    name: "Bilal Khan",
    cnic: "37405-5544332-3",
    cropName: "Sugarcane",
    quantity: 500,
    date: "2026-10-15",
    imageBase64: "",
    status: "Delivered"
  },
  {
    id: "B4",
    name: "Ayesha Malik",
    cnic: "35202-1122334-4",
    cropName: "Cotton",
    quantity: 200,
    date: "2026-10-16",
    imageBase64: "",
    status: "Pending"
  }
];