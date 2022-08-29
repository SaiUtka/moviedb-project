import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getHome} from "../../services";


const getHomePageMovies = createAsyncThunk(
    'homePageMovieSlice/getMovies',
    async ({page}, {rejectedWithValue}) => {
        try {
            return await getHome(page);
        } catch (e) {
            rejectedWithValue(e.response);
        }
    }
);

const homePageMovieSlice = createSlice({
    name: 'homePageMovieSlice',
    initialState: {
        movies: [],
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [getHomePageMovies.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload;
        },
        [getHomePageMovies.pending]: (state) => {
            state.isLoading = true
        }
    }
});

const {reducer: homePageReducer} = homePageMovieSlice;

export {homePageReducer, getHomePageMovies};