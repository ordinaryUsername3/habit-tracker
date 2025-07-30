import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL='https://habit-tracker-backend-vxd7.onrender.com/api/habits';


export const fetchHabits=createAsyncThunk('habit/fetchHabits', () => {
    return axios.get(URL, {withCredentials: true}).then(
        (res) => res.data.data //list of habits
    )
});
export const addHabit=createAsyncThunk('habit/addHabit', (reqData) => {
    return axios.post(URL, reqData, {withCredentials: true}).then(
        (res) => res.data.data
    )
});
export const updateHabit=createAsyncThunk('habit/updateHabit', ({id, reqData}) => {
    return axios.put(URL + `/${id}`, reqData, {withCredentials: true}).then(
        (res) => res.data.data // how to use an parameter
    )
});
export const deleteHabit=createAsyncThunk('habit/deleteHabit', (id) => {
    return axios.delete(URL + `/${id}`, {withCredentials: true}).then(
        (res) => res.data.data
    )
});

export const completeHabit=createAsyncThunk('habit/completeHabit', (habitId) => {
    return axios.put(URL + `/complete/${habitId}`,{},{withCredentials: true}).then(
        res => res.data.data
    )
});

export const restoreHabit=createAsyncThunk('habit/restoreHabit', (habitId) => {
    return axios.put(URL + `/restore/${habitId}`, {}, {withCredentials: true}).then(
        res => res.data.data
    )
});


export const pauseHabit=createAsyncThunk('habit/pauseHabit', (habitId) => {
    return axios.put(URL + `/pause/${habitId}`, {}, {withCredentials: true}).then(
        res => res.data.data
    )
})
