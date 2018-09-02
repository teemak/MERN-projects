const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const { Schema } = mongoose; SAME

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);