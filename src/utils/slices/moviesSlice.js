import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        popularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        upcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload;
        },
        topRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        }
    },
});


export const {addNowPlayingMovies,popularMovies,upcomingMovies,topRatedMovies} = moviesSlice.actions;

export default moviesSlice.reducer;