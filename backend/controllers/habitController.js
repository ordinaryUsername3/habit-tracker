const asyncHandler = require('express-async-handler');
const Habit = require('./../models/habitModel');
const sendRes = require('./../utils/sendResponse');
const AppError = require('./../utils/AppError');

const addHabit = asyncHandler(
    async (req, res) => {
        const userId = req.user.id;
        const {title, description, frequency, status, streak} = req.body;
        if (!title || !frequency || !status || !streak) {
            throw new AppError('All fields are mandatory except description', 400);
        }
        const newHabit = await Habit.create({
            title,
            description,
            frequency,
            status,
            streak,
            user: userId,
        });
        sendRes(res, 201, 'Habit created', newHabit);
    }
);

const getHabit = asyncHandler(
    async (req, res) => {
        const habitId = req.params.id;
        const userId = req.user.id;
        if (!habitId) throw new AppError('MIssing ID for requested habit', 400);

        const habit = await Habit.findOne({_id: habitId, user: userId});

        if (!habit) {
            throw new AppError('Habit not found', 404);
        }
        sendRes(res, 200, 'Habit found', habit);
    }
);
const getHabits = asyncHandler(
    async (req, res) => {
        const userId = req.user.id;
        const habits = await Habit.find({user: userId});
        const message = habits.length ? 'Habits fetched': 'User has no habits';
        const data = habits ? habits:[];
        sendRes(res, 200, message, data);
    }
);

const updateHabit = asyncHandler(
    async (req, res) => {
        const userId = req.user.id;
        const habitId = req.params.id;
        const updates = req.body;
        if (!habitId) {
            throw new AppError('Update failed: Invalid habit id', 400);
        }

        const updatedHabit = await Habit.findOneAndUpdate({_id: habitId, user: userId}, updates, {new: true});
        if (!updatedHabit) {
            throw new AppError('Update failed: habit not found', 404);
        }
        sendRes(res, 200, 'Habit updated', updatedHabit);
    }
);
const deleteHabit = asyncHandler(
    async (req, res) => {
        const userId = req.user.id;
        const habitId = req.params.id;
        if (!habitId) {
            throw new AppError('Deletion failed: Invalid habit id', 400);
        }

        const deletedHabit = await Habit.findOneAndDelete({_id: habitId, user: userId});
        if (!deletedHabit) {
            throw new AppError('Deletion failed: habit not found')
        }
        sendRes(res, 200, 'habit deleted', deletedHabit);
    }
);


module.exports = {addHabit, getHabit, getHabits, updateHabit, deleteHabit};