import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

import { CrawlingData, JobSlice } from 'interfaces/job';

import { getAllList, getJobkoreaList, getSaraminList } from 'apis/job';

const initialState: JobSlice = {
    isLoading: false,
    error: undefined,
    crawlingData: { pagination: [], searchList: [] },
};

export const getSaraminJobList = createAsyncThunk('search/saramin', async (data: any): Promise<any> => {
    const res = await getSaraminList(data);
    return res;
});

export const getJobkoreaJobList = createAsyncThunk('search/jobkorea', async (data: any): Promise<any> => {
    const res = await getJobkoreaList(data);
    return res;
});

export const getAllJobList = createAsyncThunk('search/all', async (data: any): Promise<any> => {
    const res = await getAllList(data);
    return res;
});

export const jobSearchingSlice = createSlice({
    name: 'jobSearchingSlice',
    initialState,
    reducers: {
        reset: (state) => {
            state.crawlingData = { pagination: [], searchList: [] };
        },
    },
    extraReducers: (builder) => {
        // 사람인
        builder.addCase(getSaraminJobList.pending, (state) => {
            state.isLoading = true;
            state.crawlingData = { pagination: [], searchList: [] };
            state.error = undefined;
        });
        builder.addCase(getSaraminJobList.fulfilled, (state, action: PayloadAction<CrawlingData>) => {
            state.isLoading = false;
            state.crawlingData = action.payload;
        });
        builder.addCase(getSaraminJobList.rejected, (state, action) => {
            state.isLoading = false;
            state.crawlingData = { pagination: [], searchList: [] };
            state.error = action.error.message;
        });

        // 잡코리아
        builder.addCase(getJobkoreaJobList.pending, (state) => {
            state.isLoading = true;
            state.crawlingData = { pagination: [], searchList: [] };
            state.error = undefined;
        });
        builder.addCase(getJobkoreaJobList.fulfilled, (state, action: PayloadAction<CrawlingData>) => {
            state.isLoading = false;
            state.crawlingData = action.payload;
        });
        builder.addCase(getJobkoreaJobList.rejected, (state, action) => {
            state.isLoading = false;
            state.crawlingData = { pagination: [], searchList: [] };
            state.error = action.error.message;
        });

        // 통합
        builder.addCase(getAllJobList.pending, (state) => {
            state.isLoading = true;
            state.crawlingData = { pagination: [], searchList: [] };
            state.error = undefined;
        });
        builder.addCase(getAllJobList.fulfilled, (state, action: PayloadAction<CrawlingData>) => {
            state.isLoading = false;
            state.crawlingData = action.payload;
        });
        builder.addCase(getAllJobList.rejected, (state, action) => {
            state.isLoading = false;
            state.crawlingData = { pagination: [], searchList: [] };
            state.error = action.error.message;
        });
    },
});

export const jobSearchSelector = (state: RootState) => state.jobSearchReducer;
export const { reset } = jobSearchingSlice.actions;
export default jobSearchingSlice.reducer;
