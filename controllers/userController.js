const users = require('../models/usermodel')
const jwt = require('jsonwebtoken')

// register
exports.registerController = async (req, res) => {
    console.log("Inside register controller");
    console.log(req.body);
    const {username, email, password} = req.body
    try{
        const existinguser =  await users.findOne({email})
        if(existinguser){
            res.status(406).json("Existing user")
        }else{
            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        console.log(err);
    }
}

// login
exports.loginController = async (req, res) => {
    console.log("Inside login controller");
    const {email, password} = req.body
    // console.log(email, password); 
    try {
        const existingUser = await users.findOne({email, password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id}, process.env.JWTPASSWORD)
            res.status(200).json("token is: " + token)
        }else{
            res.status(406).json("invalid email/password")
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

//user listing
exports.userListingController = async(req, res) => {
    console.log("inside all user listing");
    try {
        const allUsers = await users.find().select('-password')
        res.status(200).json(allUsers)
    } catch (err) {
        console.log(err);
    }
}

//user listing
exports.userDetailsController = async(req, res) => {
    console.log("inside User Details");
    const {id} = req.params
    console.log(id);
    
    try {
        const userDetails = await users.findById(id).select('-password')
        if(userDetails){
            res.status(200).json(userDetails)
        }else{
            res.status(404).json("User not found")
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Error fetching user details")
    }
}