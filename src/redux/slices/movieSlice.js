import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getCategoryMovies} from "../../services";


const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page, category}, {rejectWithValue}) => {
        try {
            const response =  await getCategoryMovies(page, category);
            if (!response.ok){
                throw new Error('Server Error');
            }
            return response.json();
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [getMovies.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload;
        },
        [getMovies.pending]: (state) => {
            state.isLoading = true
        }
    }
});

const {reducer: movieReducer} = movieSlice;

export {movieReducer, getMovies};