const jwt = require("jsonwebtoken")
const config = require("../Env/config")

function verifyUser(req, res , next){

// cookie se token nikala
const { jwt_token } = req.cookies;

let verifyToken;

try{

// agar token nahi mila
if(!jwt_token){
    return res.status(401).json({
        success : false,
        message : "unauthorized"
    })
}

// token verify kiya
verifyToken = jwt.verify(
    jwt_token,
    config.JSON_TOKEN
)

// verify data req.user me store kiya
req.user = verifyToken;

// next middleware / route pe bheja
next()

}

catch(err){

// invalid ya expired token
return res.status(401).json({
    success : false,
    message : err.message
}) 

}

}

module.exports = verifyUser