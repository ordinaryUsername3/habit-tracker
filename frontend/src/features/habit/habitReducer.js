export const handlePending=(state)=> {
    state.loading=true
}
export const handleRejected=(state, action)=> {
    state.loading=false
    state.error=action.error.message
}

export const fetchHabitsReducer=(state, action)=> {
    state.loading=false
    state.habits=action.payload
}

export const addHabitReducer=(state, action)=> {
    state.loading=false
    state.habits.push(action.payload)
}

export const updateHabitReducer=(state, action)=> {
    const newHabit = action.payload;
    state.loading=false
    state.habits = state.habits.map((habit) => habit._id === newHabit._id ? newHabit : habit);
}

export const deleteHabitReducer=(state, action)=> {
    const deletedHabit=action.payload;
    state.loading=false
    state.habits = state.habits.map((h) => h._id === deletedHabit._id ? deletedHabit : h);
}

export const completeHabitReducer=(state, action)=> {
    const habit = action.payload;
    state.loading=false,
    state.habits = state.habits.map((h) => h._id === habit._id ? habit : h);
}

export const restoreHabitReducer=(state, action)=> {
    const habit = action.payload;
    state.loading=false;
    state.habits = state.habits.map((h) => h._id === habit._id ? habit : h);
}

export const pauseHabitReducer=(state, action)=> {
    const habit = action.payload;
    state.loading = false
    state.habits = state.habits.map((h) => h._id === habit._id ? habit: h);
}