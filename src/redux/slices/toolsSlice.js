import {createSlice} from "@reduxjs/toolkit";


const toolsSlice = createSlice({
    name: 'toolsSlice',
    initialState: {
        page: 1,
        value: ''
    },
    reducers: {
        next(state) {
            ++state.page;
        },
        prev(state) {
            --state.page;
        },
        newPage(state) {
            state.page = 1;
        },
        searchValue(state, action) {
            state.value = action.payload;
        },
        deleteValue(state) {
            state.value = '';
        }
    }
});

const {reducer: toolsReducer, actions: {next, prev, newPage, searchValue, deleteValue}} = toolsSlice;

export {toolsReducer, next, prev, newPage, searchValue, deleteValue};