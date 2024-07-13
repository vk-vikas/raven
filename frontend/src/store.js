import { configureStore } from "@reduxjs/toolkit";
import { AuthenticationSlice } from "./features/authentication/AuthenticationSlice";

const store = configureStore({
  reducer: {
    authentication: AuthenticationSlice.reducer,
  },
});

export default store;
