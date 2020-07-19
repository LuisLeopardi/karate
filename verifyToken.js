const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function verify (req,res,next) {
    const token = req.header('auth-token')
    if(!token) return res.status('401').send('acceso denegado');
    try {
        const verified = jwt.verify(token, process.env.token);
        req.user = verified;
        next()
    } catch (err) {
        res.status('400').send('invalid token')
    }
}