export const initialWeatherStats = {
  humidity: "68%",
  cropGrowth: "240 kg harvested (+5%)",
  temp: "29°C",
  condition: "Partly Cloudy",
};

export const weatherChartData = [
  { day: "Day 1", temp: 27, humidity: 62, growth: 180 },
  { day: "Day 2", temp: 30, humidity: 65, growth: 210 },
  { day: "Day 3 (Today)", temp: 29, humidity: 68, growth: 240 },
];

export const initialOrders = [
  { id: 1, supplierName: "Green Harvest Ltd", cropName: "Wheat Seeds", quantity: "50 Bags", date: "2026-10-10", status: "Delivered" },
  { id: 2, supplierName: "Agri Input Co.", cropName: "Fertilizer Urea", quantity: "20 Bags", date: "2026-10-11", status: "Pending" },
];