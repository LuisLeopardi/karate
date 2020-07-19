const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function verify (req,res,next) {
    const token = req.headers.cookie
    console.log(req.cookies);
    console.log(token)
    if(!token) return res.status('401').send('acceso denegado');
    try {
        const verified = jwt.verify(token, process.env.token);
        req.user = verified;
        console.log(verified)
        next()
    } catch (err) {
        console.log(err)
        res.status('401').send('invalid token')
    }
}