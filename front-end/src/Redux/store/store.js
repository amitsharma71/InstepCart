import { configureStore } from "@reduxjs/toolkit";
import registrationDataReducer from "../reducer/reducer";

export const store = configureStore({
  reducer: {
    register: registrationDataReducer,
  },
});
