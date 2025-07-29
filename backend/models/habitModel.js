const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, default: '', trim: true},
    status: {type: String, enum: ['completed', 'pending', 'paused', 'deleted'], default: 'pending'},
    frequency: {type: Number, required: true, min:1, max:7, default: 1},
    streak: {type: Number, default: 0},
    user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
},
{timestamps: true});

module.exports = mongoose.model('Habit', habitSchema);