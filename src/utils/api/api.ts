import axios from "axios";
import { TGetUserResponse } from "./types/types";
import { TDepartments } from "@types";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const getUsers = async (
  tab: TDepartments
): Promise<TGetUserResponse> => {
  const res = await api.get(`users?__example=${tab}&__dynamic=true`);
  return res.data;
};
