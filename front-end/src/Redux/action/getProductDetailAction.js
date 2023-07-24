import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProductAction = createAsyncThunk(
  "productgetdata",
  async (payload) => {
    const data1 = await axiosInstance.get("Getproducts", payload);
    return data1.data;
  }
);
