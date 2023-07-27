import { configureStore } from '@reduxjs/toolkit';
import jobSearchReducer from './slice/job/jobSearchingSlice';
import saraminSearchReducer from './slice/job/jobSearchingSlice';
import searchType from './slice/job/searchTypeSlice';

const store = configureStore({
    reducer: { saraminSearchReducer, jobSearchReducer, searchType },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
