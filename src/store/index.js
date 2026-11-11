import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cropsReducer from './slices/cropsSlice';
import buyersReducer from './slices/buyersSlice';
import weatherReducer from './slices/weatherSlice';
import activityReducer from './slices/activitySlice';
import expensesReducer from './slices/expensesSlice';
import inventoryReducer from './slices/inventorySlice';
import tasksReducer from './slices/tasksSlice';
import workersReducer from './slices/workersSlice';       // [NEW]
import equipmentReducer from './slices/equipmentSlice';   // [NEW]

export const store = configureStore({
  reducer: {
    auth: authReducer,
    crops: cropsReducer,
    buyers: buyersReducer,
    weather: weatherReducer,
    activity: activityReducer,
    expenses: expensesReducer,
    inventory: inventoryReducer,
    tasks: tasksReducer,
    workers: workersReducer,       // [NEW]
    equipment: equipmentReducer,   // [NEW]
  },
});