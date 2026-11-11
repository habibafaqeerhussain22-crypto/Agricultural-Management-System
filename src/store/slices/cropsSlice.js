// src/store/slices/cropsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialCrops = JSON.parse(localStorage.getItem("agri_crops")) || [
  { id: "C1", name: "Wheat", field: "North Field A", healthScore: 85, status: "Healthy", cuttingDate: "2026-10-25", totalStock: 5000, stockRemaining: 3500 },
  { id: "C2", name: "Rice", field: "South Field B", healthScore: 62, status: "Needs Attention", cuttingDate: "2026-10-20", totalStock: 4000, stockRemaining: 1200 },
  { id: "C3", name: "Corn", field: "East Field C", healthScore: 40, status: "Critical", cuttingDate: "2026-10-18", totalStock: 3000, stockRemaining: 500 },
];

const cropsSlice = createSlice({
  name: "crops",
  initialState: { list: initialCrops },
  reducers: {
    addCrop: (state, action) => {
      state.list.unshift(action.payload);
    },
    deleteCrop: (state, action) => {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },
    updateCropStock: (state, action) => {
      const { cropId, quantity } = action.payload;
      const crop = state.list.find((c) => c.id === cropId);
      if (crop) {
        crop.stockRemaining = Math.max(0, crop.stockRemaining - quantity);
      }
    },
  },
});

export const { addCrop, deleteCrop, updateCropStock } = cropsSlice.actions;
export default cropsSlice.reducer;
