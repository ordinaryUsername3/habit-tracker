import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './../features/habitSlice/habitSlice'
import userReducer from './../features/userSlice/userSlice'

const store = configureStore({
    reducer: {

        habitReducer,
        userReducer,
    }
})

export default store;
