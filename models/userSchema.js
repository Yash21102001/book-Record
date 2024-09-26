const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('userTbl', userSchema);
module.exports = userModel;