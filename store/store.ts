import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DotsSlice } from "./features/dotsSlice";
import { DarkMode } from "./features/darkMode";

export const store = configureStore({
    reducer:{
        dots: DotsSlice.reducer,
        darkMode: DarkMode.reducer,
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector