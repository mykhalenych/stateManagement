import {createAsyncThunk} from '@reduxjs/toolkit';

import {fetchWrap} from "../api";
import {sliceConstants} from "./constants";

export const fetchData = createAsyncThunk(
    `${sliceConstants.dataSlice}/${sliceConstants.fetchData}`,
    async (data, {rejectWithValue}) => {
        try {
            const res = await fetchWrap()
            return res.message
        } catch (err) {
            const {message} = err || "";
            return rejectWithValue(message);
        }
    },
);
