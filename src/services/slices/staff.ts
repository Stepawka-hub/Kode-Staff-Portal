import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "src/types/types";
import { TStaffState } from "./types/types";
import { getUsersAsync } from "@thunks/staff";

const initialState: TStaffState = {
  users: [],
  isFetchUsers: false,
  error: null,
  cache: {},
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setCache: (
      state,
      { payload }: PayloadAction<{ key: string; data: TUser[] }>
    ) => {
      const { key, data } = payload;
      state.cache[key] = { data, timestamp: Date.now() };
    },
  },
  selectors: {
    getUsers: (state) => state.users,
    getIsFetchUsers: (state) => state.isFetchUsers,
    getError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.isFetchUsers = true;
        state.error = null;
      })
      .addCase(
        getUsersAsync.fulfilled,
        (state, { payload }: PayloadAction<TUser[]>) => {
          state.users = payload;
          state.isFetchUsers = false;
          state.error = null;
        }
      )
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.isFetchUsers = false;
        state.error =
          typeof action.payload === "string" ? action.payload : "Unknown Error";
      });
  },
});

export default staffSlice.reducer;
export const { getUsers, getIsFetchUsers, getError } = staffSlice.selectors;
export const { setCache } = staffSlice.actions;
