import { createSlice } from "@reduxjs/toolkit";
import {signupUser, loginUser, deleteUser, updateUser, logoutUser, updatePasswordThunk, getUser } from "./userThunk";
import { handlePending, handleRejected, updateUserData, setUserData, deleteUserReducer, logout, updatePassword, getUserReducer } from "./userReducer";

//fix Reference error issue for my thunks

const initialState = {
    user: {
        name: '',
        age: null,
        email: '',
        _id: null
    },
    isAuthenticated: !!localStorage.getItem('accessToken'),
    loading: false,
    error: '',
    status: '',
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: () => initialState,
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signupUser.pending, handlePending)
        .addCase(signupUser.rejected, handleRejected)
        .addCase(signupUser.fulfilled, setUserData)
        .addCase(loginUser.pending, handlePending)
        .addCase(loginUser.rejected, handleRejected)
        .addCase(loginUser.fulfilled, setUserData)
        .addCase(deleteUser.pending, handlePending)
        .addCase(deleteUser.rejected, handleRejected)
        .addCase(deleteUser.fulfilled, deleteUserReducer)
        .addCase(updateUser.pending, handlePending)
        .addCase(updateUser.rejected, handleRejected)
        .addCase(updateUser.fulfilled, updateUserData)
        .addCase(logoutUser.rejected, handleRejected)
        .addCase(logoutUser.pending, handlePending)
        .addCase(logoutUser.fulfilled, logout)
        .addCase(updatePasswordThunk.rejected, handleRejected)
        .addCase(updatePasswordThunk.pending, handlePending)
        .addCase(updatePasswordThunk.fulfilled, updatePassword)
        .addCase(getUser.pending, handlePending)
        .addCase(getUser.rejected, handleRejected)
        .addCase(getUser.fulfilled, getUserReducer)


    }
    
});


export default userSlice.reducer;
export const {resetState, setToken} = userSlice.actions;