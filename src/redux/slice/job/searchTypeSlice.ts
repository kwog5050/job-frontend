import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { JobData, JobSlice } from 'interfaces/job';

interface SearchSlice {
    searchType: string | undefined;
}

const initialState: SearchSlice = {
    searchType: '',
};

export const searchType = createSlice({
    name: 'searchType',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string | undefined>) => {
            state.searchType = action.payload;
        },
    },
});

export const { setSearch } = searchType.actions;
export default searchType.reducer;
