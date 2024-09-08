import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface darkMode{
    darkMode: boolean;
}

const initialState: darkMode={
    darkMode: false,
}

export const DarkMode = createSlice({
    name: "repository",
    initialState,
    reducers:{
        //reducer для изменения darlMode
        changeMode: (state, action: PayloadAction<any>) => {
            state.darkMode = action.payload;
        },          
    }
})

export default DarkMode.reducer;
export const { changeMode } = DarkMode.actions