import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homesSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
