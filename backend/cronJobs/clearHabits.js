const cron = require('node-cron');
const Habit = require('./../models/habitModel');
const asyncHandler = require('express-async-handler');

cron.schedule('0 0 * * *', asyncHandler(
    async () => {
    const thresholdDate = new Date(Date.now - 30 * 24 * 60 * 60 * 1000);
    await Habit.deleteMany({deleteAt: {$lte: thresholdDate}});
}
));