import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = import.meta.env.VITE_API_URL + '/api/users';
import axios from 'axios';
import instance from "./setupInterceptor";


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
    return instance.delete(URL+'/', {withCredentials: true}).then(
        (res) => res.data
    );
})

export const updateUser=createAsyncThunk('user/updateUser', (reqData) => {
    return instance.put(URL+'/', reqData, {withCredentials: true}).then(
        (res) => res.data
    )
});

export const updatePasswordThunk=createAsyncThunk('user/updatePassword', (reqData) => {
    return instance.put(URL + '/changePassword', reqData, {withCredentials: true}).then(
        res => res.data
    )
});

export const logoutUser=createAsyncThunk('user/logoutUser', () => {
    return axios.post(URL + '/logout', {}, {withCredentials: true}).then(
        (res) => res.data
    )
})

export const getUser = createAsyncThunk('user/getUser', () => {
    return instance.get(URL + '/', {withCredentials: true}).then(
        (res) => res.data.data
    )
})