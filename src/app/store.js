import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authentication.js";

const store = configureStore({
    reducer: {
        auth: authSlice,
    }
});

export default store;