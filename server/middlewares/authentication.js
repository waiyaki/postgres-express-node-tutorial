

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const httpErrors = require('http-errors');

const { JWT_SECRET, AUTH_TOKEN_EXPIRES_IN } = process.env;

const verifyAuthToken = expressJwt({ secret: JWT_SECRET });

const assocAuthUser = (req, res, next) => {

    //Check user by id and check associate auth user found or not like 

    // User.findById(req.user._id, privateFields, (err, user) => {
    //     if (err) return next(err);
    //     if (!user || user.archived) return next(httpErrors(401, 'Unauthorized'));

    //     req.user = user;
    //     return next();
    // });
};

const withAuthUser = [verifyAuthToken, assocAuthUser];

const signAccessToken = (req, res, next) => {
    // Get the access token from the secret 
    // req.token = jwt.sign({ _id: req.user._id }, JWT_SECRET, {
    //     expiresIn: AUTH_TOKEN_EXPIRES_IN,
    // });
    // next();
};

module.exports = {
    verifyAuthToken,
    signAccessToken,
    assocAuthUser,
    withAuthUser,
};
