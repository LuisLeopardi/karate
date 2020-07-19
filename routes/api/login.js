const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const router = express.Router();
require('dotenv').config();
const User = require('../../models/User');
const News = require('../../models/News');

router.post('/', async (req,res)=>{

  const user = await User.findOne({correo:req.body.user, contraseña:req.body.password})
    
  const news = await News.findById(process.env.news)

  const awaitPromises = Promise.all([user,news])
    
  const allData = await awaitPromises

  const token = jwt.sign({_id:user._id},process.env.token)

  res
  .cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 60*60*60*24 })
  .json(allData)

})

module.exports = router;