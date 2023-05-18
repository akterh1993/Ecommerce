const mongoose = require("mongoose")
const colors = require('colors')
const config = require("./config");

// database connected
const dbURL = config.db.url;

mongoose.connect(dbURL)
.then(()=>{
    console.log(`Mongodb connected Successful ${mongoose.connection.host}`.bgGreen.white);
    // console.log("Mongodb is connected")
}).catch((error)=>{
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
    // console.log(error);
    process.exit(1);
});