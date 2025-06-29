const jwt = require('jsonwebtoken');

const signToken = (userId) => {
    return jwt.sign({id: userId}, process.env.JWT_SECRET, 
        {expiresIn: process.env.JWT_EXPIRATION}
    );
}

module.exports = signToken;