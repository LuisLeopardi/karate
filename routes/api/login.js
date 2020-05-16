const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();

const User = require('../../models/User');
const News = require('../../models/News')

router.post('/',(req,res)=>{

  let year = `año_${new Date().getFullYear()}`

  if (req.body.function === 'login') {

    const login = async () => {
    let user = User.findOne({correo:req.body.user, contraseña:req.body.password})
    .then(data=>{
      return data
    })

    let news = News.findById('5e98929e04f2731f848eb713')
    .then(noticias=>{
      return noticias;
    })
 
    let awaitPromises = Promise.all([user,news])
    
    let allData = await awaitPromises
    
    res.json(allData)

    }

    login()


  } else if (req.body.function === 'postUser') {


    const months = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ]

    const newUser = new User ({
      nombre: req.body.name,
      correo: req.body.email,
      contraseña: req.body.password,
      dirección: req.body.addres,
      fecha_NC: req.body.birthDate,
      fecha_INS: req.body.INSdate,
      número: req.body.phone,
      asistente:true,
      cinta:'blanca',
      preexamenes:'0',
      [year]: months.map(month=>{
        let monthly = {
          mes:month,
          pagado:false,
          método_de_pago:"",
          fecha_de_pago:"",
          cantidad_pagada:""
        }
        return monthly
      }),
      recordatorio:`su fecha de pago son los ${req.body.INSdate.substring(0, 2)} de cada mes`,
    })

    newUser.save()
    .then(user=>res.json(user))
    .catch(err=>{console.log(err)})


  } else if (req.body.function === 'deleteUser') { 

    
      User.deleteOne({ nombre: req.body.name })
      .catch(err=>{console.log(err)})
      .then(()=>{
        User.find({})
        .then(users=>{
          res.json(users)
        })
      })

  } else if (req.body.function === 'modifyUser') {


    User.updateOne({ _id: req.body.id }, { $set: { [req.body.DBfield]: req.body.dataToChange } })
    .catch(err=>console.log(err))
    .then(()=>{
      User.find({})
      .then(users=>{
        res.json(users)
      })
    }) 
    
  } else if (req.body.function === 'updateMontly') {


    const pagado = `${year}.$.pagado`
    const método_de_pago = `${year}.$.método_de_pago`
    const fecha_de_pago = `${year}.$.fecha_de_pago`
    const cantidad_pagada = `${year}.$.cantidad_pagada`
    const número_de_transferencia = `${year}.$.número_de_transferencia`

    User.updateOne({ _id: req.body.id, 'año_2020.mes':req.body.month }, { 
      $set: 
      {
        [pagado]:true,
        [método_de_pago]:req.body.metodo,
        [fecha_de_pago]:req.body.fecha,
        [cantidad_pagada]:req.body.cantidad,
        [número_de_transferencia]:req.body.numero
      },
      $push: {
        transferencias: req.body.metodo==='transferencia'? `transferencia n° ${req.body.numero} el día ${req.body.fecha} por el mes de ${req.body.month}`: false
      }
    })
    .then(()=>{
      User.find({})
      .then(users=>{
        res.send(users)
      })
    })

  } else if (req.body.function === 'deleteNews') { 


    News.updateOne({}, {$pull: {[req.body.audience]: req.body.news}})
    .then(()=>{
      News.find({})
      .then(data=>res.json(data))
    })
    .catch(err=>{console.log(err)})

} else if (req.body.function === 'editNews') { 

    
  News.updateOne({ $set: { [req.body.audience]: [req.body.value][req.body.index] } })
  .then(()=>{
    News.find({})
    .then(data=>res.json(data))
  })
  .catch(err=>console.log(err))

} else if (req.body.function === 'addNews') {

  News.updateOne({ $push: { [req.body.audience]: req.body.content } })
  .then(()=>{
    News.find({})
    .then(data=>res.json(data))
  })
  .catch(err=>console.log(err))

} else if (req.body.function === 'getAllData') {

  const getData = async () => {

    const users =  User.find({}).then(users=>{return users})
 
    const news = News.find({}).then(news=>{return news})
 
    let awaitPromises = Promise.all([users,news])
 
    let allData = await awaitPromises
    
    res.json(allData)
    
   }
     
   getData()
   
}

});

router.get('/',(req,res)=>{

  const getData = async () => {

   const users =  User.find({}).then(users=>{return users})

   const news = News.find({}).then(news=>{return news})

   let awaitPromises = Promise.all([users,news])

   let allData = await awaitPromises
   
   res.json(allData)
   
  }
    
  getData()
});

module.exports = router;