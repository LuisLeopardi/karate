const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const router = express.Router();
require('dotenv').config();
const User = require('../../models/User');
const News = require('../../models/News');

router.post('/',(req,res)=>{

  const login = async () => {  

    let user = await User.findOne({correo:req.body.user, contraseña:req.body.password})
    
    let news = await News.findById(process.env.news)

    let awaitPromises = Promise.all([user,news])
    
    let allData = await awaitPromises

    const token = jwt.sign({_id:user._id},process.env.token)

    res
    .header('Access-Control-Expose-Headers', 'authtoken')
    .header('authtoken', token)
    .json(allData)
    }

    login()

})

module.exports = router;