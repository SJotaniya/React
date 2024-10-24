import { createSlice } from "@reduxjs/toolkit";


export const expense = createSlice({
    name: "expense",
    initialState: { expense1: [], totalExpense: 0 },
    reducers: {
      addExpense: (state, action)=>{
        const { expense, description } = action.payload
        state.expense1.push({ expense, description });
        state.totalExpense += expense;
      }
    }
})

export const { addExpense } = expense.actions
export default expense.reducer