import { TDepartments, TUser } from "@types";
import { TGetUserResponse } from "./types/types";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const AVATAR_FALLBACK_API = import.meta.env.VITE_AVATAR_FALLBACK_API;

const api = axios.create({
  baseURL: API_URL,
});

export const getUsers = async (tab: TDepartments): Promise<TUser[]> => {
  const { data } = await api.get<TGetUserResponse>(`users?__example=${tab}`);

  return data.items.map((u: TUser) => ({
    ...u,
    avatarUrl: `${AVATAR_FALLBACK_API}?name=${u.firstName}&rounded=true&background=random`,
  }));
};
