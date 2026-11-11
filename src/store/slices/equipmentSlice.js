import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: '1', name: 'John Deere Tractor', type: 'Tractor', purchaseDate: '2023-05-10', status: 'Active', lastServiceDate: '2026-01-15', serviceIntervalDays: '90' },
    { id: '2', name: 'Water Turbine Pump', type: 'Water Pump', purchaseDate: '2024-02-20', status: 'Under Repair', lastServiceDate: '2025-11-10', serviceIntervalDays: '60' }
  ],
  maintenance: [],
  loading: false,
  error: null,
};

const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
    addEquipment: (state, action) => {
      state.list.push({ id: Date.now().toString(), ...action.payload });
    },
    updateEquipment: (state, action) => {
      const index = state.list.findIndex(e => e.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    removeEquipment: (state, action) => {
      state.list = state.list.filter(e => e.id !== action.payload);
    },
    addMaintenance: (state, action) => {
      state.maintenance.push({ id: Date.now().toString(), ...action.payload });
    },
  },
});

export const { addEquipment, updateEquipment, removeEquipment, addMaintenance } = equipmentSlice.actions;
export default equipmentSlice.reducer;