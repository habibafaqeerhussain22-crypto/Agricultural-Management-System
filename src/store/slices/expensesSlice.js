import { createSlice } from "@reduxjs/toolkit";

const initialExpenses = JSON.parse(localStorage.getItem("agri_expenses")) || [
  { id: "E1", cropId: "C1", category: "Seeds", amount: 12000, date: "2026-10-01", note: "Wheat Seed Packets" },
  { id: "E2", cropId: "C1", category: "Labor", amount: 8000, date: "2026-10-05", note: "Field Irrigation Labor" },
  { id: "E3", cropId: "C2", category: "Fertilizer", amount: 15000, date: "2026-10-10", note: "DAP Bags" },
  { id: "E4", cropId: "C2", category: "Wheate", amount: 35000, date: "2026-10-10", note: "DAP Bags" }
];

const expensesSlice = createSlice({
  name: "expenses",
  initialState: { list: initialExpenses },
  reducers: {
    addExpense: (state, action) => {
      state.list.unshift(action.payload);
    },
    deleteExpense: (state, action) => {
      state.list = state.list.filter((e) => e.id !== action.payload);
    }
  }
});

export const { addExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;