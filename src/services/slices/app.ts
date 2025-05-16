import { createSlice } from "@reduxjs/toolkit";
import { TAppState } from "./types/types";

const initialState: TAppState = {};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  selectors: {},
});

export default appSlice.reducer;
