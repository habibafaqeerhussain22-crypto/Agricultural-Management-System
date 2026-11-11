import { createSlice } from "@reduxjs/toolkit";

const initialActivity = JSON.parse(localStorage.getItem("agri_activity")) || [
  { id: "A1", user: "Admin User", action: "ADDED", entity: "Crop Record (Wheat)", timestamp: new Date().toLocaleString() }
];

const activitySlice = createSlice({
  name: "activity",
  initialState: { logs: initialActivity },
  reducers: {
    logActivity: (state, action) => {
      state.logs.unshift({
        id: "A" + Date.now(),
        timestamp: new Date().toLocaleString(),
        ...action.payload
      });
    }
  }
});

export const { logActivity } = activitySlice.actions;
export default activitySlice.reducer;