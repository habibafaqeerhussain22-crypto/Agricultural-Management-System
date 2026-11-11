import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLiveWeather = createAsyncThunk(
  "weather/fetchLiveWeather",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=31.5497&longitude=74.3436&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&timezone=auto"
      );
      return {
        temperature: response.data.current.temperature_2m,
        humidity: response.data.current.relative_humidity_2m,
        windSpeed: response.data.current.wind_speed_10m,
        rainChance: response.data.current.precipitation,
        lastUpdated: new Date().toLocaleTimeString()
      };
    } catch (error) {
      return rejectWithValue("Failed to load live weather telemetry.");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLiveWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLiveWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLiveWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default weatherSlice.reducer;