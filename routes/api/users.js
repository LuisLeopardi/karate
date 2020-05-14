const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.post('/',(req,res)=>{
    const newUser = new User(req.body.content);

    newUser.save(err=>{
        if(err){
            console.log(err)
        } else {
            console.log('form submited')
        }
    })

});

module.exports = router;