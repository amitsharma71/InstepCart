import { configureStore } from "@reduxjs/toolkit";
import registrationDataReducer from "../reducer/reducer";
import sliceviewReducer from "../reducer/sliceapicard";

export const store = configureStore({
  reducer: {
    register: registrationDataReducer,
    slicedetails: sliceviewReducer,
  },
});
