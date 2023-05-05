const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connection to mongoodb"));

db.once('open',function(){
    console.log("connected to db")
})

module.exports = db;
