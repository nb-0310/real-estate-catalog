const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>{
    
    try{
        console.log('authintection middleware reached');
        const token = req.headers.authorization.split(" ")[1];
        verifiedToken = jwt.verify(token, 'real estate project 10x academy');
        req.userId = verifiedToken.id
        next();
    } catch{
        res.json({
        message : 'authentication failed'
    })
}

}