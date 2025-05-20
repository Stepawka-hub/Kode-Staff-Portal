import { getUsers } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TUser } from "src/types/types";

const GET_USERS = "staff/get-users";

export const getUsersAsync = createAsyncThunk<TUser[], void>(
  GET_USERS,
  async () => {
    const { items } = await getUsers();
    console.log(items);
    return items
  }
);
