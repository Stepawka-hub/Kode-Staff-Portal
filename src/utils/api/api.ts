import axios from "axios";
import { TGetUserResponse } from "./types/types";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const getUsers = async (): Promise<TGetUserResponse> => {
  return await api.get(`users?__example=all`).then((res) => res.data);
};
