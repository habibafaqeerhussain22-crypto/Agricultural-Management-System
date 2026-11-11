// src/store/middleware/persistMiddleware.js
export const persistMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  try {
    localStorage.setItem("agri_crops", JSON.stringify(state.crops.list));
    localStorage.setItem("agri_orders", JSON.stringify(state.orders.list));
    localStorage.setItem("agri_buyers", JSON.stringify(state.buyers.list));
    localStorage.setItem("agri_tasks", JSON.stringify(state.tasks.list));
    localStorage.setItem("agri_expenses", JSON.stringify(state.expenses.list));
    localStorage.setItem("agri_inventory", JSON.stringify(state.inventory.list));
    localStorage.setItem("agri_activity", JSON.stringify(state.activity.logs));
    if (state.auth.user) {
      localStorage.setItem("agri_session", JSON.stringify(state.auth));
    } else {
      localStorage.removeItem("agri_session");
    }
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }

  return result;
};