import { signupUser, loginUser, deleteUser, updateUser, logoutUser, updatePasswordThunk } from "./userThunk";
import { createSlice } from "@reduxjs/toolkit";
import { handlePending, handleRejected, updateUserData, setUserData, deleteUserReducer, logout, updatePassword } from "./userReducer";


const initialState = {
    user: {
        name: '',
        age: null,
        email: '',
        _id: null
    },
    token: null,
    loading: false,
    error: '',
    status: '',
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: () => {
            () => initialState
        },
        setToken: (state, action) => {
            state.token=action.payload;
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

    }
    
});


export default userSlice.reducer;
export const {resetState, setToken} = userSlice.actions;