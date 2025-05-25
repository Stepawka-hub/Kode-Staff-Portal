import { getUsers } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCache } from "@slices/staff";
import { RootState } from "@store";
import { TDepartments, TUser } from "src/types/types";

const GET_USERS = "staff/get-users";
// const CASHE_TIME = 5 * 60 * 1000;
const CASHE_TIME = 10 * 1000;

export const getUsersAsync = createAsyncThunk<TUser[], TDepartments>(
  GET_USERS,
  async (tab, { dispatch, getState }) => {
    const state = getState() as RootState;
    const cache = state.staff.cache;
    const now = Date.now();

    const cachedData = cache[tab];
    if (cachedData && now - cachedData.timestamp <= CASHE_TIME) {
      return cachedData.data;
    }

    const { items } = await getUsers(tab);
    dispatch(setCache({ key: tab, data: items }));
    return items;
  }
);
