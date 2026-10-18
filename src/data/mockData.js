// src/data/mockData.js

export const initialCrops = [
  { id: "C1", name: "Wheat (Gandum)", field: "North Field A", healthScore: 85, status: "Healthy", cuttingDate: "2026-10-25", harvestQty: 500, stockRemaining: 350 },
  { id: "C2", name: "Rice (Chawal)", field: "South Field B", healthScore: 62, status: "Needs Attention", cuttingDate: "2026-10-20", harvestQty: 400, stockRemaining: 120 },
  { id: "C3", name: "Corn (Makai)", field: "East Field C", healthScore: 40, status: "Critical", cuttingDate: "2026-10-18", harvestQty: 300, stockRemaining: 50 },
  { id: "C4", name: "Sugarcane (Ganna)", field: "West Field D", healthScore: 92, status: "Healthy", cuttingDate: "2026-11-05", harvestQty: 800, stockRemaining: 600 }
];

export const initialBuyers = [
  {
    id: "B1",
    name: "Muhammad Ali",
    cnic: "35202-1234567-1",
    cropName: "Wheat (Gandum)",
    quantity: 150,
    date: "2026-10-12",
    imageBase64: ""
  }
];