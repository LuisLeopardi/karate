import React from 'react';
import axios from 'axios'

const DeleteIcon = ({nombre, setUsers,setUserForDelete, userForDelete, value}) => {

    const deleteUser = () => {
    if (userForDelete) {
        const userName = {
            name:nombre,
            function:'deleteUser'
        };

       axios.post('https://glacial-refuge-74459.herokuapp.com/ingreso', userName)
       .then(res=>{
        setUsers(res.data)
       }, setUserForDelete(false))
       
    } else {
        setUserForDelete(nombre)
    }
    }
    
    return (
        <button  
        className={(userForDelete!==value && userForDelete)? 'none' : 'admin-btn red'} 
        onClick={deleteUser}> Eliminar </button> 
    )
}

export default DeleteIcon;