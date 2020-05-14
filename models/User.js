const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let year = `año_${new Date().getFullYear()}`

let UserSchema = new Schema ({

    nombre:String,
    correo:String,
    contraseña:String,
    dirección:String,
    fecha_NC:String,
    fecha_INS:String,
    número:String,
    asistente:Boolean,
    cinta:String,
    preexamenes:String,
    [year]:[
        {
            mes:String,
            pagado:Boolean,
            método_de_pago:String,
            fecha_de_pago:String,
            cantidad_pagada:String,
            número_de_transferencia:String,
        }
    ],
    recordatorio:Array,
    transferencias:Array
},{
    collection : 'alumnos'
});

module.exports = User = mongoose.model('alumnos', UserSchema);

