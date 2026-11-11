import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// 1. Backend se workers ki list fetch karne ke liye
export const fetchWorkers = createAsyncThunk('workers/fetchWorkers', async () => {
  const response = await api.get('/workers');
  return response.data;
});

// 2. Backend mein naya worker save karne ke liye
export const addWorker = createAsyncThunk('workers/addWorker', async (workerData) => {
  const response = await api.post('/workers', workerData);
  return response.data;
});

// 3. Backend se worker delete karne ke liye
export const removeWorker = createAsyncThunk('workers/removeWorker', async (id) => {
  await api.delete(`/workers/${id}`);
  return id;
});

const workersSlice = createSlice({
  name: 'workers',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Workers Cases
      .addCase(fetchWorkers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchWorkers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add Worker Case
      .addCase(addWorker.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      // Remove Worker Case
      .addCase(removeWorker.fulfilled, (state, action) => {
        state.list = state.list.filter((w) => w.id !== action.payload);
      });
  },
});

export default workersSlice.reducer;