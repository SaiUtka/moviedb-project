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
        movies: []
    },
    reducers: {},
    extraReducers: {
        [getHomePageMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
        }
    }
});

const {reducer: homePageReducer} = homePageMovieSlice;

export {homePageReducer, getHomePageMovies};