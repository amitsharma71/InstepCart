import { configureStore } from "@reduxjs/toolkit";
import registrationDataReducer from "../reducer/reducer";
import sliceviewReducer from "../reducer/sliceapicard";
import registerDataReducer from "../reducer/registerReducer";
import liginDataReducer from "../reducer/loginReducer";

export const store = configureStore({
  reducer: {
    register: registrationDataReducer,
    slicedetails: sliceviewReducer,
    registerdetail: registerDataReducer,
    logindatacheck: liginDataReducer,
  },
});
