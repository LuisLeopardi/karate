import React, {useState} from 'react';
import axios from 'axios'

const AddNews = ({addNoticias, setNews}) => {
const [ content, setValues ] = useState('');
const [ audience, setAudience ] = useState(false)
const submit = e => {
e.preventDefault()
const payload = {
    content:content,
    audience:audience,
    function:'addNews'
}
axios.post('https://glacial-refuge-74459.herokuapp.com/admin', payload)
.then(res=>{
    setNews(res.data)
})
setValues('')
}
return (
    <form className={ addNoticias? 'adminForm' : 'none' } onSubmit={submit}>
        <input type="text" placeholder='contenido' onChange={e=>setValues(e.target.value)}/>
        <div className='check-audience'>
            <input type="radio" name="audience" value="paraTodos" onChange={e=>setAudience(e.target.value)}/>
            <label htmlFor="publico">Público</label>
            <input type="radio" name="audience" value="paraAlumnos" onChange={e=>setAudience(e.target.value)}/>
            <label htmlFor="privado">Privado</label>
        </div>
        <input type="submit" value='Listo'/>    
    </form>    
)}

export default AddNews