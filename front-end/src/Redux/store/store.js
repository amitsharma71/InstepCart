import { configureStore } from "@reduxjs/toolkit";
import registrationDataReducer from "../reducer/reducer";
import sliceviewReducer from "../reducer/sliceapicard";
import registerDataReducer from "../reducer/registerReducer";
import liginDataReducer from "../reducer/loginReducer";
import ProductDetailReducer from "../reducer/productDetailSlice";
import getProductActionReducer from "../reducer/getProductReducer";

export const store = configureStore({
  reducer: {
    register: registrationDataReducer,
    slicedetails: sliceviewReducer,
    registerdetail: registerDataReducer,
    logindatacheck: liginDataReducer,
    productdetaildata: ProductDetailReducer,
    getproductdata: getProductActionReducer,
  },
});
