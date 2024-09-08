import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DotsSlice } from "./features/dotsSlice";

export const store = configureStore({
    reducer:{
        dots: DotsSlice.reducer,
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector