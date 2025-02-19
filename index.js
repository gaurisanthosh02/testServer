require('dotenv').config()
const express = require('express')
const testServer = express()
const router = require('./routes/router')
require('./database/dbConnection')
testServer.use(express.json())
testServer.use(router)
 
const PORT = 5000 || process.env.PORT

testServer.listen(PORT, () => {
    console.log(`Test Server running in ${PORT}`);  
})

testServer.get('/', (req, res) => {
    res.status(200).send(`<h1> Test Server running in ${PORT}`)
})
