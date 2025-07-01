const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const AppError = require('./../utils/AppError');

const protect = async (req, res, next) => {
    let token;
    if (req.cookies.token) {
        token = req.cookies.token;
    }
    if (!token) {
        throw new AppError('No token, authorization failed', 401);
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {id: decoded.id};
        next();
    } catch(err) {
        throw new AppError('Invalid token, authorization failed', 401);
    }
}

module.exports = protect;