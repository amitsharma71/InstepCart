import axios from "axios";
import { apiBasePath } from "./Config";

const API_URL = apiBasePath;

export const withoutAuth = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});
