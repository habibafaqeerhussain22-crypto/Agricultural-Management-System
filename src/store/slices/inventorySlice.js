import { createSlice } from "@reduxjs/toolkit";

const initialInventory = JSON.parse(localStorage.getItem("agri_inventory")) || [
  { id: "I1", item: "Urea Fertilizer", type: "Fertilizer", qty: 45, minQty: 10, unit: "Bags" },
  { id: "I2", item: "Pesticide Spray A1", type: "Pesticide", qty: 4, minQty: 8, unit: "Liters" }, // Low Stock!
  { id: "I3", item: "Hybrid Corn Seeds", type: "Seed", qty: 25, minQty: 5, unit: "Kg" }
];

const inventorySlice = createSlice({
  name: "inventory",
  initialState: { list: initialInventory },
  reducers: {
    addInventoryItem: (state, action) => {
      state.list.unshift(action.payload);
    },
    updateStockQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.list.find((i) => i.id === id);
      if (item) item.qty = Number(qty);
    }
  }
});

export const { addInventoryItem, updateStockQty } = inventorySlice.actions;
export default inventorySlice.reducer;