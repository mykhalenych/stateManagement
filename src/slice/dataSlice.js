import {createSlice} from "@reduxjs/toolkit";

import {fetchData} from './thunks';
import {sliceConstants} from "./constants";

export const dataSlice = createSlice({
    name: sliceConstants.dataSlice,
    initialState: {
        url: '',
        error: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, {payload}) => {
            state.url = payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchData.rejected, (state, {payload}) => {
            state.error = payload;
            state.isLoading = false;
            state.url = '';
        });
    },
})

export default dataSlice.reducer