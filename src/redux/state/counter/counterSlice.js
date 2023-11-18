import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter",
    initialState:{
        value : 0
    },

    reducers:{
        inCrement : (state)=>{
            state.value += 1
        },

        deCrement : (state)=>{
            state.value -= 1
        },

        setCustom : (state, action)=>{
            state.value = action.payload
        }
    }
})


export const {inCrement, deCrement, setCustom} = counterSlice.actions;
export default counterSlice.reducer;