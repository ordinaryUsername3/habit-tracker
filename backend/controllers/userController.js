const express = require('express');
const protect = require('./../middleware/authMiddleware');
const asyncHandler = require('express-async-handler');
const AppError = require('./../utils/AppError');
const User = require('./../models/userModel');
const  generateToken = require('./../utils/signToken');
const setCookies = require('./../utils/setCookies');
const sendRes = require('./../utils/sendResponse');
const jwt = require('jsonwebtoken');
 

const login = asyncHandler(
    async (req, res) => {
        const {email, password} = req.body;
        if (!email || !password) {
            throw new AppError('Both email and password are required fields', 400);
        }
        const user = await User.findOne({email}).select('+password');
        if (!user) {
            throw new AppError('Invalid email or password', 400);
        }
        if (!(await user.comparePassword(password))) {
            throw new AppError('Invalid email or password', 401);
        }
        const refreshToken = generateToken(user._id, process.env.JWT_REFRESH_SECRET); 
        setCookies(res, refreshToken);
        const accessToken = generateToken(user._id, process.env.JWT_ACCESS_SECRET);
        return sendRes(res, 200, 'User logged in', {id: user._id, name: user.name, email: user.email, age: user.age, accessToken}); //does this require data (token)
    }
);
const signup = asyncHandler(
    async (req, res) => {
        const {name, email, age, password} = req.body;
        if (!name || !email || !age || !password) {
            throw new AppError('All fields are required', 400);
        }

        const userExists = await User.findOne({email: email});
        if (userExists) {
            throw new AppError('User with this email is already registered', 409);
        }
        const newUser = await User.create({
            name,
            email,
            age,
            password,
        });
        
        if (!newUser) {
            throw new AppError('Unexpected error during signup', 500); // is it a 400 and is a bad request the only reason
        }
        
        const token = generateToken(newUser._id);
        setCookies(res, token);
        return sendRes(res, 201, 'User registered', {id: newUser._id, name: newUser.name, email: newUser.email, age: newUser.age});
    }
);
const logout = asyncHandler(
    async (req, res) => {
        res.clearCookie('token');
        return sendRes(res, 200, 'User logged out');
    }
);

//Profile Management
const getUser = asyncHandler(
    async (req, res) => {
        const user = await User.findById(req.user.id); 
        if (!user) {
            throw new AppError('User not found', 404);
        }
        return sendRes(res, 200, 'User fetched', user); //should all responses be preceeded with return how about Error
        //what happend when I through an error basically, function execution, server state
    }
);
const updateUser = asyncHandler(
    async (req, res) => {
        const {name, age, email} = req.body;
        const updates = {name, age, email};

        const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, {
            new: true, 
            runValidators: true,
        }
        );
        if (!updatedUser) {
            throw new AppError('Failed to update user info', 500);
        }
        return sendRes(res, 200, 'User info updated', updatedUser);
    }
);
const deleteUser = asyncHandler(
    async (req, res) => {
        const deletedUser = await User.findByIdAndDelete(req.user.id);
        if (!deletedUser) {
            throw new AppError('Failed to delete user', 500); //is it 400 & is a bad request the only reason
        }
        return sendRes(res, 200, 'User account has been deleted', deletedUser);
    }
);

const updatePassword = asyncHandler(
    async (req, res) => {
        const {currentPassword, newPassword} = req.body;
        console.log(currentPassword);

        if (!currentPassword || !newPassword) {
            throw new AppError('Please add both current and new password', 400);
        }

        const user = await User.findById(req.user.id).select('+password');
        if (!user) {
            throw new AppError('Failed to update password', 500);
        }

        if (!(await user.comparePassword(currentPassword))) {
            throw new AppError('Failed to update password, Incorrect password', 401);
        }
        

        user.password = newPassword;
        await user.save();
        return sendRes(res, 200, 'Password changed');
    }
)

const refreshToken = asyncHandler(
    async (req,res) => {
        const token = req.cookies.token;

        if (!token) throw new AppError('No refresh token provided', 401);
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

        const userId = decoded.id;
        const user = await User.findById(userId);

        if (!user) throw new AppError('User not found', 401);

        const accessToken = generateToken(user._id, process.env.JWT_ACCESS_SECRET);
        const refreshToken = generateToken(user._id, process.env.JWT_REFRESH_SECRET);
        setCookies(res, refreshToken);

        sendRes(res, 200, 'Token has been refreshed', {accessToken});

    }
);

module.exports = {login, logout, signup, getUser, updateUser, deleteUser, updatePassword, refreshToken};
