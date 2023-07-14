import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

  export const signUpAction = createAsyncThunk("signUpaction", async () => {
  const data1 = await axiosInstance.get(`products`);
  return data1.data;
});

export const filterdatabyCategory = createAsyncThunk(
  "filterdatabycategory",
  async () => {
    const data1 = await axiosInstance.get(`products/category/`);
    return data1.data;
  }
);

// fetch('https://fakestoreapi.com/products/category/jewelery')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
