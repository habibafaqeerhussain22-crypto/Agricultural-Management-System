import { createSlice } from "@reduxjs/toolkit";

const initialTasks = JSON.parse(localStorage.getItem("agri_tasks")) || [
  { id: "T1", title: "Water North Field A", type: "Irrigation", cropId: "C1", dueDate: "2026-10-24", status: "Pending" },
  { id: "T2", title: "Apply Urea Fertilizer", type: "Fertilizer", cropId: "C2", dueDate: "2026-10-22", status: "Overdue" }
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { list: initialTasks },
  reducers: {
    addTask: (state, action) => {
      state.list.unshift(action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) {
        task.status = task.status === "Done" ? "Pending" : "Done";
      }
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    }
  }
});

export const { addTask, toggleTaskStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;