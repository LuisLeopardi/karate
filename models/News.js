const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newSchema = new Schema({ 
    paraAlumnos: {
        type:Array
    }, 
    paraTodos: {
        type:Array
    } 
},{ collection : 'noticias' });

module.exports = News = mongoose.model('noticias', newSchema);