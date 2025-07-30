import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './../features/habit/habitSlice'
import userReducer from './../features/user/userSlice'

const store = configureStore({
    reducer: {
        habit :habitReducer,
        user: userReducer,
    }
})

export default store;
