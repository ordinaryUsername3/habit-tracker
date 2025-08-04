import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = import.meta.env.VITE_API_URL + '/api/habits';
import { authInterceptor } from "../user/setupInterceptor";


export const fetchHabits=createAsyncThunk('habit/fetchHabits', () => {
    return authInterceptor.get(URL, {withCredentials: true}).then(
        (res) => res.data.data //list of habits
    )
});
export const addHabit=createAsyncThunk('habit/addHabit', (reqData) => {
    return authInterceptor.post(URL, reqData, {withCredentials: true}).then(
        (res) => res.data.data
    )
});
export const updateHabit=createAsyncThunk('habit/updateHabit', ({id, reqData}) => {
    return authInterceptor.put(URL + `/${id}`, reqData, {withCredentials: true}).then(
        (res) => res.data.data // how to use an parameter
    )
});
export const deleteHabit=createAsyncThunk('habit/deleteHabit', (id) => {
    return authInterceptor.delete(URL + `/${id}`, {withCredentials: true}).then(
        (res) => res.data.data
    )
});

export const completeHabit=createAsyncThunk('habit/completeHabit', (habitId) => {
    return authInterceptor.put(URL + `/complete/${habitId}`,{},{withCredentials: true}).then(
        res => res.data.data
    )
});

export const restoreHabit=createAsyncThunk('habit/restoreHabit', (habitId) => {
    return authInterceptor.put(URL + `/restore/${habitId}`, {}, {withCredentials: true}).then(
        res => res.data.data
    )
});


export const pauseHabit=createAsyncThunk('habit/pauseHabit', (habitId) => {
    return authInterceptor.put(URL + `/pause/${habitId}`, {}, {withCredentials: true}).then(
        res => res.data.data
    )
})
