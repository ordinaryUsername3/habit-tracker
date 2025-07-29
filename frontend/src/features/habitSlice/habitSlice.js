import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: [],
    status:'idle',
    error: null
}

const habitSlice = createSlice({
    name:"habitSlice",
    initialState,
    reducer: {

    }
});
export default habitSlice.reducer;
//export actions later


