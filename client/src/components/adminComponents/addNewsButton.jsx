import React from 'react'

const AddNewsButton = ({updateNews, index, edit, audience}) => {
return(
<button 
    className={edit?'admin-btn lightGreen':'none'}
    onClick={(e)=>updateNews(e.target.value, audience)}
    value={index}
    test='paraAlumnos'
>
    Listo
</button>
)}

export default AddNewsButton