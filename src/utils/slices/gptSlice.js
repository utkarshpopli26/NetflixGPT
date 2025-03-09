import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleGptViewState: false,
    },
    reducers: {
        toggleGptView: (state) => {
            state.toggleGptViewState = !state.toggleGptViewState;
        }
    }
});

export const {toggleGptView} = gptSlice.actions;

export default gptSlice.reducer;

