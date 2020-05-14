const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();

const News = require('../../models/News')

router.get('/',(req,res)=>{
    News.find({})
    .then(data=>res.json(data))
    .catch(err=>console.log())
})

module.exports = router;