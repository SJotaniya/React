import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/CounterSlice";

export const store = configureStore({
    reducer:{
        counterKey : counter
    }
})