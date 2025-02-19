const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log("inside jwtMiddleware");
    const token = req.headers["authorization"].split(" ")[1]
    console.log(token);
    if(!token){
        res.status(401).json("Authentication Failed")
    }else{
        try{        
            const tokenVerification = jwt.verify(token, process.env.JWTPASSWORD)
            console.log(tokenVerification);
            next()
        }catch(err){
            res.status(401).json("Authentication Failed")
        }

    }
    
}

module.exports = jwtMiddleware