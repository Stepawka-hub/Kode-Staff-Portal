import { createSlice } from "@reduxjs/toolkit";
import { TAppState } from "./types/types";
import { initializeApp } from "@thunks/app";

const initialState: TAppState = {
  isInitialized: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  selectors: {
    getIsInitialized: (state) => state.isInitialized,
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.pending, (state) => {
        state.isInitialized = false;
      })
      .addCase(initializeApp.fulfilled, (state) => {
        state.isInitialized = true;
      })
      .addCase(initializeApp.rejected, (state) => {
        state.isInitialized = false;
      });
  },
});

export default appSlice.reducer;
export const { getIsInitialized } = appSlice.selectors;