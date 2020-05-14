import React from 'react';

const EditIcon = ({setView, setUserId, id, userForDelete, nombre}) => {
    const handleEditor = () => {
        setView({
            alumnos:false, 
            noticias:false, 
            addAlumnos:false, 
            editAlumnos:true,
            seeAlumnos:false,
            addNoticias:false
        })
        setUserId(id)
        const select1 = document.getElementById('users-settings');
        const select2 = document.getElementById('news-settings');
        const select3 = document.getElementById('goBack');
        select1.style.display = 'none'
        select2.style.display = 'none'
        select3.style.display = 'none'
    }
    return (
        <button className={userForDelete === nombre? 'none' : 'admin-btn yellow'} onClick={handleEditor}> 
            Editar 
        </button>
    )
}

export default EditIcon;