import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./slices/scheduleSlice";
import classesReduecer from './slices/classesSlice';

export const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
        classes: classesReduecer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
