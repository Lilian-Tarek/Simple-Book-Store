import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice";
import AuthSlice from "./AuthSlice"
export const store = configureStore({
  reducer: {
    books: BookSlice,
    author:AuthSlice
  }
});