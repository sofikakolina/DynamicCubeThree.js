import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Dot{
    dot: any;
}

interface DotState{
    dots: Dot[];
}

const initialState: DotState={
    dots: [],
}

export const DotsSlice = createSlice({
    name: "repository",
    initialState,
    reducers:{
        //reducer для добавления точки в массив state
        addDot: (state, action: PayloadAction<any>) => {
            state.dots.push(action.payload);
        },          
        //reducer для очищения массива точек при новом api запросе
        deleteDots:(state)=>{
            state.dots = []
        },
    }
})

export default DotsSlice.reducer;
export const { addDot, deleteDots } = DotsSlice.actions