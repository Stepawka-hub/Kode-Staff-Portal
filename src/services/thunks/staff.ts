import { getUsers } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCache } from "@slices/staff";
import { RootState } from "@store";
import { checkCacheTime } from "@utils/helpers/cache";
import { getErrorMessage } from "@utils/helpers/error";
import { TDepartments, TUser } from "src/types/types";

const GET_USERS = "staff/get-users";
export const CACHE_TIME = 5 * 60 * 1000;

export const getUsersAsync = createAsyncThunk<TUser[], TDepartments>(
  GET_USERS,
  async (tab, { dispatch, getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const cache = state.staff.cache;

    const cachedData = cache[tab];
    if (cachedData && checkCacheTime(cachedData.timestamp, CACHE_TIME)) {
      return cachedData.data;
    }

    try {
      const users = await getUsers(tab);
      dispatch(setCache({ key: tab, data: users }));
      return users;
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  }
);
