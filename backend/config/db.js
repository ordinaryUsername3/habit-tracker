const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const uri = process.env.MONGO_URI2 || process.env.MONGO_URI;
const connectDB = asyncHandler(
    async () => {
    await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
});

module.exports = connectDB;