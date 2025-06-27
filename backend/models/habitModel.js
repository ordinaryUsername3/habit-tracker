const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    status: {type: String},
    frequency: Number,
    streak: Number,
},
{timestamps: true});

module.exports = mongoose.model('Habit', habitSchema);