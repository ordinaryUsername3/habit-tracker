import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    status: 'idle',
    error: null
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducer: {

    }
});

export default userSlice.reducer;
// export actions later