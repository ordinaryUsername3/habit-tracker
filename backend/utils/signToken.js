const jwt = require('jsonwebtoken');

const signToken = (userId, secret, access) => {
    const expiry = access ? '1m' : process.env.JWT_EXPIRATION
    return jwt.sign({id: userId}, secret, 
        {expiresIn: expiry}
    );
}

module.exports = signToken;