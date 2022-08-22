import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getSearch} from "../../services";


const getSearchMovies = createAsyncThunk(
    'searchSlice/getMovies',
    async ({value, page}, {rejectWithValue}) => {
        try {
            return await getSearch(value, page);
        } catch (e) {
            rejectWithValue(e.response);
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