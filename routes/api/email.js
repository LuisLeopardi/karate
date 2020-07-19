const nodemailer = require('nodemailer');
const cors = require('cors');
const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config();
const joi = require('@hapi/joi')
app.use(cors());

const schema = joi.object({
  name:joi.string().required(),
  phone:joi.number().required(),
  email:joi.string().required().email(),
  message:joi.string().required()
})

router.post('/', (req,res) => {

    const validation = schema.validate(req.body)
    if(validation.error) return res.send(validation.error.details[0].message)

    const output = `
    <p> ${req.body.name} </p>
    <p> ${req.body.phone} </p>
    <p> ${req.body.email} </p>
    <p> ${req.body.message} </p>
    `;
  
  let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.emailUser,
        pass: process.env.emailPass
      },
    });
  
    let options = {
      from: req.body.email, // sender address
      to: "dojosenseicarlosazocar1@gmail.com", // list of receivers
      subject: "contacto karate", // Subject line
      html: output // html body
    };
  
    transporter.sendMail(options, (err,inf)=>{
      if (err) {
        return console.log(err)
      }else{
        return res.send('success')
      }
    })
  
  });
  
  module.exports = router;