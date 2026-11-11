import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cropsReducer from "./slices/cropsSlice";
import buyersReducer from "./slices/buyersSlice";
import tasksReducer from "./slices/tasksSlice";
import expensesReducer from "./slices/expensesSlice";
import inventoryReducer from "./slices/inventorySlice";
import activityReducer from "./slices/activitySlice";
import weatherReducer from "./slices/weatherSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  crops: cropsReducer,
  buyers: buyersReducer,
  tasks: tasksReducer,
  expenses: expensesReducer,
  inventory: inventoryReducer,
  activity: activityReducer,
  weather: weatherReducer,
});