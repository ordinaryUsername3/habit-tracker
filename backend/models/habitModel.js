const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, default: '', trim: true},
    status: {type: String, required: true, enum: ['completed', 'pending', 'paused']},
    frequency: {type: Number, required: true},
    streak: {type: Number, required: true, default: 0},
    user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
},
{timestamps: true});

module.exports = mongoose.model('Habit', habitSchema);