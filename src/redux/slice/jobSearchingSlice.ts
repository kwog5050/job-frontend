import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { JobData, JobSlice } from 'interfaces/job';

import { getSaraminList } from 'apis/job';

// initialState 타입을 any로 설정
const initialState: JobSlice = {
    isLoading: false,
    error: undefined,
    searchingList: [],
};

export const getJobList = createAsyncThunk('search/saramin', async (data: any): Promise<any> => {
    const res = await getSaraminList(data);
    return res;
});

export const jobSearchSlice = createSlice({
    name: 'jobSearch',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getJobList.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(getJobList.fulfilled, (state, action: PayloadAction<Array<JobData>>) => {
            state.isLoading = false;
            state.searchingList = action.payload;
        });
        builder.addCase(getJobList.rejected, (state, action) => {
            state.isLoading = false;
            state.searchingList = [];
            state.error = action.error.message;
        });
    },
});

export const searchSelector = (state: RootState) => state.jobSearchReducer;
export default jobSearchSlice.reducer;
