const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors')
const path = require('path')
app.use(cors());
require('dotenv').config();

//---------------------------------------- db --------------------------------------------------

const mongoose = require('mongoose');

mongoose
.connect(
    process.env.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>{
    console.log('mongodb connected')
})
.catch(err=>{
    console.log(err)
})

//---------------------------------------- Routes --------------------------------------------------

const login = require('./routes/api/login');
const email = require('./routes/api/email');
const news = require('./routes/api/news');
const admin = require('./routes/api/admin');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

app.use('/ingreso', login);
app.use('/contacto', email);
app.use('/admin', admin);
app.use('/noticias', news);

//---------------------------------------- server --------------------------------------------------

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
});

  



