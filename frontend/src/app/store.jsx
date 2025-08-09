import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './../features/habit/habitSlice'
import userReducer from './../features/user/userSlice'
import { toastMiddleware } from "../middleware/toastMiddleware";

const store = configureStore({
    reducer: {
        habit :habitReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(toastMiddleware),

});

export default store;