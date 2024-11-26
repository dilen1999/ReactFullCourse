import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

const store = configureStore({
  reducer: {
    usersInfo: useReducer,
  },
});
export default store;
