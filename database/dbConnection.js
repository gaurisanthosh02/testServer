const mongoose = require('mongoose')

const connectionstring = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionstring).then(res => {
    console.log("MongoDB Atlas connected successfully with Test Server");
    
}).catch(err => {
    console.log("MongoDB Atlas connection failed");
    console.log(err);
    
})