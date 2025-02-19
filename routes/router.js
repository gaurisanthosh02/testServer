const express = require('express')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const router = new express.Router()

// register : http://localhost:5000/register
router.post("/register", userController.registerController)

// register : http://localhost:5000/login
router.post("/login", userController.loginController)

// register : http://localhost:5000/users
router.get("/users", jwtMiddleware, userController.userListingController)

// register : http://localhost:5000/users/:id
router.get("/users/:id", jwtMiddleware, userController.userDetailsController)

module.exports = router