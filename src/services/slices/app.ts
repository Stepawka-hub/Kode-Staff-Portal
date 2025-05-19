import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAppState } from "./types/types";
import { TDepartments } from "src/types/types";

const initialState: TAppState = {
  currentTab: "all",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentTab: (state, { payload }: PayloadAction<TDepartments>) => {
      state.currentTab = payload;
    },
  },
  selectors: {
    getCurrentTab: (state) => state.currentTab,
  },
});

export default appSlice.reducer;
export const { setCurrentTab } = appSlice.actions;
export const { getCurrentTab } = appSlice.selectors;
