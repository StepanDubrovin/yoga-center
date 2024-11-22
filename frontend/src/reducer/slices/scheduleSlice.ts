import {createSlice } from '@reduxjs/toolkit';


interface ClassDetails {
    time: string, 
    type: string, 
}

interface ScheduleState {
    schedule: {
        [day: string]: ClassDetails[];
    };
}

const initialState: ScheduleState= {
    schedule: {
       'Понедельник': [
        {time: "7:30-8:30", type: "Йога в гамаках для начинающих" },
        {time: "19:00-20:00", type: "Йога в гамаках для начинающих"}
       ],
       'Вторник': [
        {time: "7:00-8:45", type: "Йога в гамаках для продолжающих" },
        {time: "9:15-10:45", type: "Йога в гамаках для продолжающих" },
        {time: "17:00-18:00", type: "Йога в гамаках для начинающих" },
        {time: "19:00-20:30", type: "Йога в гамаках для продолжающих"}
       ],
       'Среда' : [
        {time: "7:30-8:30", type: "Йога в гамаках для начинающих" },
        {time: "19:00-20:00", type: "Йога в гамаках для начинающих"}
       ],
       'Четверг' : [
        {time: "7:00-8:45", type: "Хатха-йога для продолжающих" },
        {time: "9:15-10:45", type: "Хатха-йога для продолжающих" },
        {time: "17:00-18:00", type: "Хатха-йога для начинающих" },
        {time: "19:00-20:30", type: "Хатха-йога для продолжающих"}
       ],
       'Пятница' : [
        {time: "7:30-8:30", type: "Йога в гамаках для начинающих" },
        {time: "19:00-20:00", type: "Йога в гамаках для начинающих"}
       ],
       'Суббота' : [
        {time: "7:15-8:45", type: "Хатха-йога для продолжающих" },
        {time: "9:15-10:15", type: "Хатха-йога для начинающих" },
       ],
    }
};
const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {

    }
});

export default scheduleSlice.reducer;
