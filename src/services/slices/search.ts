import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSearchState } from "./types/types";
import { TDepartments, TSortBy } from "@types";

const initialState: TSearchState = {
  currentTab: "all",
  searchQuery: "",
  sortBy: "asc",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentTab: (state, { payload }: PayloadAction<TDepartments>) => {
      state.currentTab = payload;
    },
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    setSortBy: (state, { payload }: PayloadAction<TSortBy>) => {
      state.sortBy = payload;
    },
  },
  selectors: {
    getCurrentTab: (state) => state.currentTab,
    getSearchQuery: (state) => state.searchQuery,
    getSortBy: (state) => state.sortBy,
  },
});

export default searchSlice.reducer;
export const { setSearchQuery, setCurrentTab, setSortBy } = searchSlice.actions;
export const { getSearchQuery, getSortBy, getCurrentTab } =
  searchSlice.selectors;
