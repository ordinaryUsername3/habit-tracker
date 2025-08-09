import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = import.meta.env.VITE_API_URL + '/api/habits';
import instance from "../user/setupInterceptor";

export const fetchHabits=createAsyncThunk('habit/fetchHabits', () => {
    return instance.get(URL, {withCredentials: true}).then(
        (res) => res.data.data //list of habits
    )
});
export const addHabit=createAsyncThunk('habit/addHabit', (reqData) => {
    return instance.post(URL, reqData, {withCredentials: true}).then(
        (res) => res.data.data
    )
});
export const updateHabit=createAsyncThunk('habit/updateHabit', ({id, reqData}) => {
    return instance.put(URL + `/${id}`, reqData, {withCredentials: true}).then(
        (res) => res.data.data // how to use an parameter
    )
});
export const deleteHabit=createAsyncThunk('habit/deleteHabit', (id) => {
    return instance.delete(URL + `/${id}`, {withCredentials: true}).then(
        (res) => res.data.data
    )
});

export const completeHabit=createAsyncThunk('habit/completeHabit', (habitId) => {
    return instance.put(URL + `/complete/${habitId}`,{},{withCredentials: true}).then(
        res => res.data.data
    )
});

export const restoreHabit=createAsyncThunk('habit/restoreHabit', (habitId) => {
    return instance.put(URL + `/restore/${habitId}`, {}, {withCredentials: true}).then(
        res => res.data.data
    )
});


export const pauseHabit=createAsyncThunk('habit/pauseHabit', (habitId) => {
    return instance.put(URL + `/pause/${habitId}`, {}, {withCredentials: true}).then(
        res => res.data.data
    )
})
