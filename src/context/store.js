import { configureStore } from "@reduxjs/toolkit";
import wishesSlice from "./wishesSlice";

export const store = configureStore({
    reducer: {
        wishes: wishesSlice,
    },
});
