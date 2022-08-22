import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getCategoryMovies} from "../../services";


const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page, category}, {rejectWithValue}) => {
        try {
            return await getCategoryMovies(page, category);
        } catch (e) {
            rejectWithValue(e.response);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: []
    },
    reducers: {},
    extraReducers: {
        [getMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
        }
    }
});

const {reducer: movieReducer} = movieSlice;

export {movieReducer, getMovies};