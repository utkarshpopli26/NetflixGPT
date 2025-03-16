import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleGptViewState: false,
        gptMoviesList: null,
        gptMoviesNames: null
    },
    reducers: {
        toggleGptView: (state) => {
            state.toggleGptViewState = !state.toggleGptViewState;
        },
        addGptMovies: (state, action) => {
            const {movie_names, final_list_of_movies} = action.payload;
            state.gptMoviesList = final_list_of_movies;
            state.gptMoviesNames = movie_names;
        }
    }
});

export const {toggleGptView, addGptMovies} = gptSlice.actions;

export default gptSlice.reducer;

