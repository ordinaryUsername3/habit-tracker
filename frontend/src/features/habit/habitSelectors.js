import { createSelector } from "reselect"

const selectHabits = state => state.habit.habits

export const completedHabitsSelector = createSelector(
    [selectHabits],
    (habits) => habits.filter((habit) => habit.status === 'completed')
)
export const pendingHabitsSelector = createSelector(
    [selectHabits],
    (habits) => habits.filter((habit) => habit.status === 'pending')
)

export const pausedHabitsSelector = createSelector(
    [selectHabits],
    (habits) => habits.filter((habit) => habit.status === 'paused')
)

export const deletedHabitsSelector = createSelector(
    [selectHabits],
    (habits) => habits.filter((habit) => habit.status === 'deleted') 
)