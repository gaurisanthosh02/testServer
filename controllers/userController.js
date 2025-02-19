// register
exports.registerController =  (req, res) => {
    console.log("Inside register controller");
    console.log(req.body);
    
    res.status(200).json("Register req recieved")
}

// login
exports.loginController =  (req, res) => {
    console.log("Inside login controller");
    res.status(200).json("login req recieved")
}