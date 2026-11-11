// src/store/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialSession = JSON.parse(localStorage.getItem("agri_session")) || {
  isAuthenticated: false,
  user: null,
  role: null, // "Admin" or "Manager"
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialSession,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === "admin" && password === "admin123") {
        state.isAuthenticated = true;
        state.user = "Admin User";
        state.role = "Admin";
      } else if (username === "manager" && password === "manager123") {
        state.isAuthenticated = true;
        state.user = "Farm Manager";
        state.role = "Manager";
      } else {
        alert("Invalid Username or Password! Use admin/admin123 or manager/manager123");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;