import axios from "axios";
const URL = import.meta.env.VITE_API_URL + '/api/users'



import { createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk('user/signupUser', (reqData) => {
    return axios.post(URL + '/signup', reqData, {withCredentials: true}).then(
        (res) => {
            return res.data.data
        }
    )
})

export const loginUser = createAsyncThunk('user/loginUser', (reqData) => {
    return axios.post(URL + '/login', reqData, {withCredentials: true}).then(
        (res) =>  res.data.data
    )
})

export const deleteUser=createAsyncThunk('user/deleteUser', () => {
    return axios.delete(URL+'/', {withCredentials: true}).then(
        (res) => res.data
    );
})

export const updateUser=createAsyncThunk('user/updateUser', (reqData) => {
    return axios.put(URL+'/', reqData, {withCredentials: true}).then(
        (res) => res.data
    )
});

export const updatePasswordThunk=createAsyncThunk('user/updatePassword', (reqData) => {
    return axios.put(URL + '/changePassword', reqData, {withCredentials: true}).then(
        res => res.data
    )
});

export const logoutUser=createAsyncThunk('user/logoutUser', () => {
    return axios.post(URL + '/logout', {}, {withCredentials: true}).then(
        (res) => res.data
    )
})

