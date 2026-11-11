import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.profile = action.payload; // User data save karne ke liye
    },
    clearUser: (state) => {
      state.profile = null; // Logout ya clear karne ke liye
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;