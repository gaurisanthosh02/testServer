const users = require('../models/usermodel')

// register
exports.registerController = async (req, res) => {
    console.log("Inside register controller");
    console.log(req.body);
    const {username, email, password} = req.body
    try{
        const existinguser =  await users.findOne({email})
        if(existinguser){
            res.status(406)
        }else{
            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            res.status(200)
        }
    }catch(err){
        console.log(err);
    }
    res.status(200).json("Register req recieved")
}

// login
exports.loginController =  (req, res) => {
    console.log("Inside login controller");
    res.status(200).json("login req recieved")
}