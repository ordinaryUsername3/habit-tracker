const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true, lowercase: true},
    age: {type: Number, min: 0, required: true},
    email: {type: String, unique: true, required: true, lowercase: true, trim: true},
    password: {type: String, minlength:10, required: true}
},
{timestamps: true});

userSchema.pre('save',async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comaprePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


module.exports = mongoose.model('User', userSchema);