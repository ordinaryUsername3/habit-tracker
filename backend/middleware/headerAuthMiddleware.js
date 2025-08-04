const AppError = require('./../utils/AppError');
const asyncHandler = require('express-async-handler');
const jwt=require('jsonwebtoken');
const User=require('./../models/userModel');

const protect = asyncHandler(
    async (req, res, next) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) throw new AppError('No token, No authorization', 401);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.id;
    const user = await User.findById(userId);
    if (!user) throw new AppError('User not found', 401);
    req.user = {...user, id: user._id} //already used user.id in controllers

    next();
}
);

module.exports=protect