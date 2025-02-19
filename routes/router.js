const express = require('express')
const userController = require('../controllers/userController')
const router = new express.Router()

// register : http://localhost:5000/register
router.post("/register", userController.registerController)

// register : http://localhost:5000/login
router.post("/register", userController.registerController)

// register : http://localhost:5000/users


// register : http://localhost:5000/users/:id


module.exports = router