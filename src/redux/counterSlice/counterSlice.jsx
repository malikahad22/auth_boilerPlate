// counterSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        increament: (state) => {
            state.counter = state.counter + 1;
        },
        decrement: (state) => {
            state.counter = state.counter > 0 ? state.counter - 1 : state.counter;
        },
        reset: (state) => {
            state.counter = 0
        }
    }
})

export const { increament, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
