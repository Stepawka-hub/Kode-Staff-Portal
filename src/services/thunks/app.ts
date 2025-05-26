import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store";
import { getUsersAsync } from './staff';

const INIT_APP = "app/init";

export const initializeApp = createAsyncThunk(
  INIT_APP,
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    const currentTab = state.search.currentTab;
    return await dispatch(getUsersAsync(currentTab));
  }
);
