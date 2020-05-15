import React, {useState} from 'react';
import axios from 'axios'

const AddUser = ({addAlumnos, users}) => {
const [{name, email, password, addres, birthDate, INSdate, phone}, setPayload] = useState({
    name:'',
    email:'',
    password:'',
    addres:'',
    birthDate:'',
    INSdate:'',
    phone:''
});
const handleInput = e => {
    e.persist();
    setPayload( currentState=> ({
        ...currentState,
        [e.target.getAttribute('name')]: e.target.value
    }))
}
const register = e => {
    e.preventDefault();
    let payload = {
        name, 
        email, 
        password, 
        addres, 
        birthDate, 
        INSdate, 
        phone,
        function:'postUser'
    }
    axios.post('https://glacial-refuge-74459.herokuapp.com/ingreso', payload)
    .then(res=>{
        users.push(res.data)
        setPayload({
            name:'',
            email:'',
            password:'',
            addres:'',
            birthDate:'',
            INSdate:'',
            phone:''
        })
    })
}
return (
    <form className={ addAlumnos? 'adminForm' : 'none' } onSubmit={register}>
        <input name='name' type="text" placeholder='nombre' value={name} onChange={handleInput}/>
        <input name='email' type="text" placeholder='correo' value={email} onChange={handleInput}/>
        <input name='password' type="text" placeholder='contraseña' value={password} onChange={handleInput}/>
        <input name='addres' type="text" placeholder='direccion' value={addres} onChange={handleInput}/>
        <input name='birthDate' type="text" placeholder='fecha de nacimiento' value={birthDate} onChange={handleInput}/>
        <input name='INSdate' type="text" placeholder='fecha de inscripción' value={INSdate} onChange={handleInput}/>
        <input name='phone' type="text" placeholder='número' value={phone} onChange={handleInput}/>
        <input type="submit" value='registrar'/>    
    </form>  
)  
}

export default AddUser;