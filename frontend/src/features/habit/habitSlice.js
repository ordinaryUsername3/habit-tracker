import { createSlice } from "@reduxjs/toolkit";
import { addHabit, fetchHabits, updateHabit, deleteHabit, completeHabit, restoreHabit, pauseHabit } from "./habitThunk";
import { 
handlePending, handleRejected, addHabitReducer, 
updateHabitReducer, deleteHabitReducer,fetchHabitsReducer, completeHabitReducer, restoreHabitReducer, pauseHabitReducer} from "./habitReducer";

const initialState = {
    habits: [],
    loading: false,
    error: '',
    status: ''
}

const habitSlice = createSlice({
    name:"habitSlice",
    initialState,
    reducers : {
        resetState: () => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(addHabit.pending, handlePending)
        .addCase(addHabit.rejected, handleRejected)
        .addCase(addHabit.fulfilled, addHabitReducer)
        .addCase(fetchHabits.pending, handlePending)
        .addCase(fetchHabits.rejected, handleRejected)
        .addCase(fetchHabits.fulfilled, fetchHabitsReducer)
        .addCase(updateHabit.pending, handlePending)
        .addCase(updateHabit.rejected, handleRejected)
        .addCase(updateHabit.fulfilled, updateHabitReducer)
        .addCase(deleteHabit.pending, handlePending)
        .addCase(deleteHabit.rejected, handleRejected)
        .addCase(deleteHabit.fulfilled, deleteHabitReducer)
        .addCase(completeHabit.pending, handlePending)
        .addCase(completeHabit.rejected, handleRejected)
        .addCase(restoreHabit.pending, handlePending)
        .addCase(restoreHabit.rejected, handleRejected)
        .addCase(completeHabit.fulfilled, completeHabitReducer)
        .addCase(restoreHabit.fulfilled, restoreHabitReducer)
        .addCase(pauseHabit.pending, handlePending)
        .addCase(pauseHabit.rejected, handleRejected)
        .addCase(pauseHabit.fulfilled, pauseHabitReducer)
    }
});
export default habitSlice.reducer;
//export actions later


