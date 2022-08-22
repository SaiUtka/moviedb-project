

import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer,toolsReducer, homePageReducer, searchMovieReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer,toolsReducer, homePageReducer, searchMovieReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};