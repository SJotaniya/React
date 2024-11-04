import { configureStore } from "@reduxjs/toolkit";
import income from "../feature/incomeSlice";
import expense from "../feature/expenceSlice";

export const store = configureStore({
  reducer:{
    incomeKey: income,
    expenseKey: expense,
  }
})  