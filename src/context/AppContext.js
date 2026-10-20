// src/context/AppContext.js
import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [crops, setCrops] = useLocalStorage('agri_crops', [
    { id: 1, name: 'Wheat', field: 'Field A', healthScore: 92, status: 'Healthy', cuttingDate: '2026-10-25', harvestQty: 5000, soldQty: 1200 },
    { id: 2, name: 'Rice', field: 'Field B', healthScore: 78, status: 'Needs Attention', cuttingDate: '2026-10-19', harvestQty: 3000, soldQty: 1500 },
    { id: 3, name: 'Corn', field: 'Field C', healthScore: 45, status: 'Critical', cuttingDate: '2026-10-18', harvestQty: 2500, soldQty: 2000 }
  ]);

  const [orders, setOrders] = useLocalStorage('agri_orders', [
    { id: 1, cropId: 1, quantity: 500, orderDate: '2026-10-15', status: 'Delivered' },
    { id: 2, cropId: 2, quantity: 300, orderDate: '2026-10-16', status: 'Pending' }
  ]);

  const [buyers, setBuyers] = useLocalStorage('agri_buyers', []);

  return (
    <AppContext.Provider value={{ crops, setCrops, orders, setOrders, buyers, setBuyers }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);