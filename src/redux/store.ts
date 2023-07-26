import { configureStore } from '@reduxjs/toolkit';
import jobSearchReducer from './slice/jobSearchingSlice';

const store = configureStore({
    reducer: { jobSearchReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
