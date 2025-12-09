"use client";

import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./features/auth/authSlice";
import counterSlice from "./features/counter/counterSlice";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
