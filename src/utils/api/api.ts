import { TDepartments, TUser } from "@types";
import axios from "axios";
import { TGetUserResponse } from "./types/types";

const API_URL = import.meta.env.VITE_API_URL;
const AVATAR_FALLBACK_API = import.meta.env.VITE_AVATAR_FALLBACK_API;

const api = axios.create({
  baseURL: API_URL,
});

export const getUsers = async (tab: TDepartments): Promise<TUser[]> => {
  const res = await api.get<TGetUserResponse>(`users?__example=${tab}`);

  return res.data.items.map((u: TUser) => ({
    ...u,
    avatarUrl: `${AVATAR_FALLBACK_API}?username=${u.firstName}`,
  }));
};
