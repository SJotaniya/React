import { configureStore } from "@reduxjs/toolkit";
import  todo  from "../Feture/Todoslice";

export const store = configureStore({
    reducer : {
        todokey: todo
    }
});