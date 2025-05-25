import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "src/types/types";
import { TStaffState } from "./types/types";
import { getUsersAsync } from "@thunks/staff";

const initialState: TStaffState = {
  users: [],
  isFetchUsers: false,
  error: null,
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
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
      .addCase(getUsersAsync.rejected, (state, { error }) => {
        state.isFetchUsers = false;
        state.error = error.message || "Unknown Error";
      });
  },
});

export default staffSlice.reducer;
export const { getUsers, getIsFetchUsers, getError } = staffSlice.selectors;
