const asyncHandler = require('express-async-handler');
const Habit = require('./../models/habitModel');
const sendRes = require('./../utils/sendResponse');
const AppError = require('./../utils/AppError');

const THIRTY_DAY_MS = 30 * 24 * 60 * 60 * 1000;
const expiryDate = new Date(Date.now() + THIRTY_DAY_MS);

const addHabit = asyncHandler(
    async (req, res) => {
        const userId = req.user.id;
        const {title, description, frequency, status, streak} = req.body;
        if (!title || !frequency || !status) {
            throw new AppError('All fields are required', 400);
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
        const id = req.params.id;
        const userId = req.user.id;
        if (!id) throw new AppError('MIssing ID for requested habit', 400);

        const habit = await Habit.findOne({_id: id, user: userId});

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
        const id = req.params.id;
        const updates = req.body;
        if (!id) {
            throw new AppError('Update failed: Invalid habit id', 400);
        }

        const updatedHabit = await Habit.findOneAndUpdate({_id: id, user: userId}, updates, {new: true});
        if (!updatedHabit) {
            throw new AppError('Update failed: habit not found', 404);
        }
        sendRes(res, 200, 'Habit updated', updatedHabit);
    }
);


const deleteHabit = asyncHandler(
    async (req, res) => {
        const {id} = req.params;
        const habit = await Habit.findByIdAndUpdate(id, {deleteAt: expiryDate, status: 'deleted'}, {new: true});
        if (!habit) {
            throw new AppError('Failed to delete habit', 500);
        }
        sendRes(res, 200, 'Habit successfully deleted', habit);
    }
);

const completeHabit = asyncHandler(
    async (req, res) => {
        const {id} = req.params;
        const habit = await Habit.findById(id);
        habit.status = 'completed';
        habit.streak += 1;
        await habit.save();

        if (!habit) {
            throw new AppError('Failed to change habit status to completed', 500);
        }
        sendRes(res, 200, 'Status change: habit complete', habit);
    }
);

const restoreHabit = asyncHandler(
    async (req, res) => {
        const {id} = req.params;
        const habit = await Habit.findByIdAndUpdate(id, {deleteAt: null, status: 'pending'}, {new: true});

        if (!habit) {
            throw new AppError('Failed to restore habit', 500);
        }
        sendRes(res, 200, 'Habit restored', habit);
    }
)

const pauseHabit=asyncHandler(
    async (req, res) => {
        const {id} = req.params;
        const habit = await Habit.findByIdAndUpdate(id, {status: 'paused'}, {new: true});

        if (!habit) {
            throw new AppError('Failed to pause habit', 500);
        }

        sendRes(res, 200, 'Habit paused', habit);
    }
)

module.exports = {addHabit, getHabit, getHabits, updateHabit, deleteHabit, restoreHabit, completeHabit, pauseHabit};