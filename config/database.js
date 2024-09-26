const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userDB1')

const db = mongoose.connection

db.on('connected', (err) => {
    if (err) {
        console.log("database not connected..");
        return false;
    }
    console.log("database connected");
})

module.exports = db;    