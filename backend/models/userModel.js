const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true, lowercase: true},
    age: {type: Number, min: 0, required: true},
    email: {type: String, unique: true, required: true, lowercase: true, trim: true},
    password: {type: String, min:10, required: true}
},
{timestamps: true});

userSchema.pre('save', asyncHandler(async (next) => {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
}));

module.exports = mongoose.model('User', userSchema);