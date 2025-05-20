import { getUsers } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TDepartments, TUser } from "src/types/types";

const GET_USERS = "staff/get-users";

export const getUsersAsync = createAsyncThunk<TUser[], TDepartments>(
  GET_USERS,
  async (tab) => {
    const { items } = await getUsers(tab);
    return items;
  }
);
