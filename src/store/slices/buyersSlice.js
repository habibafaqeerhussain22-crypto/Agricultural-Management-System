import { createSlice } from "@reduxjs/toolkit";

const initialBuyers = JSON.parse(localStorage.getItem("agri_buyers")) || [
  { id: "B1", name: "Muhammad Ali", cnic: "35202-1234567-1", cropName: "Wheat", quantity: 150, date: "2026-10-12", imageBase64: "", status: "Delivered" },
  { id: "B2", name: "Usman Ahmed", cnic: "35201-9876543-2", cropName: "Rice", quantity: 300, date: "2026-10-14", imageBase64: "", status: "Pending" }
];

const buyersSlice = createSlice({
  name: "buyers",
  initialState: { list: initialBuyers },
  reducers: {
    addBuyer: (state, action) => {
      state.list.unshift(action.payload);
    },
    updateBuyerStatus: (state, action) => {
      const { id, status } = action.payload;
      const buyer = state.list.find((b) => b.id === id);
      if (buyer) buyer.status = status;
    }
  }
});

export const { addBuyer, updateBuyerStatus } = buyersSlice.actions;
export default buyersSlice.reducer;
