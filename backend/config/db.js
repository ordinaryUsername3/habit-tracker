const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');


const connectDB = asyncHandler(
    async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
});

module.exports = connectDB;