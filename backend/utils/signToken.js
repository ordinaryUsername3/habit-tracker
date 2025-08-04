const jwt = require('jsonwebtoken');

const signToken = (userId, secret) => {
    return jwt.sign({id: userId}, secret, 
        {expiresIn: process.env.JWT_EXPIRATION}
    );
}

module.exports = signToken;