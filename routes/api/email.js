const nodemailer = require('nodemailer');
const cors = require('cors');
const express = require('express');
const app = express();
const router = express.Router();
const pass = require('../../config/keys').gmail;
app.use(cors());

router.post('/', (req,res) => {
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
        user: 'dojosenseicarlosazocar1@gmail.com',
        pass: pass
      }
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
        return res.send(true)
      }
    })
  
  });
  
  module.exports = router;