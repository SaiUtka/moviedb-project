import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getSearch} from "../../services";


const getSearchMovies = createAsyncThunk(
    'searchSlice/getMovies',
    async ({value, page}, {rejectWithValue}) => {
        try {
            const response =  await getSearch(value, page);
            if (!response.ok) {
                // throw new Error('Server Error');
            }
            return response.json();
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
);

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        movies: []
    },
    reducers: {},
    extraReducers: {
        [getSearchMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
        }
    }
});

const {reducer: searchMovieReducer} = searchSlice;

export {searchMovieReducer, getSearchMovies};