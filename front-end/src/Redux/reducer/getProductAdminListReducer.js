import { createSlice } from "@reduxjs/toolkit";

import { adminPostProduct } from "../action/adminPostProductAction";
import { allAdminProductList } from "../action/getAllProductListing";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const GetAdminProductListData = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(allAdminProductList.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(allAdminProductList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(allAdminProductList.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default GetAdminProductListData.reducer;
