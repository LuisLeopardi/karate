import React, {useState, useEffect} from 'react';

const NewsFields = ({setView, noticias, addNoticias}) => {

    useEffect(()=>{
        if(!noticias && !addNoticias)
            setValue('Noticias') 
        else {
            console.log(value)
        }
    },[noticias, addNoticias])

    const options = ['ver','agregar','Noticias'];

    const [value,setValue] = useState('Noticias')

    const handler = (e) => {
        setValue(e.target.value)
        if(e.target.value === 'ver') {
            setView(()=>({
                alumnos:false, 
                noticias:true, 
                addAlumnos:false, 
                editAlumnos:false,
                addNoticias:false
            }))
        } else if (e.target.value === 'agregar') {
            setView(()=>({
                alumnos:false, 
                noticias:false, 
                addAlumnos:false,
                editAlumnos:false, 
                addNoticias:true
            }))
        }
    }
    
    return (
    <select id='news-settings' name='alumnos' className='settings-select' value={value} onChange={handler} >
        {
            options.map((e,i)=>
                <option
                    key={e + i} 
                    selected={e==='Noticias'?true:false} 
                    hidden={e==='Noticias'?true:false}
                    value={e}> 
                    {e} 
                </option>
            )
        }
    </select>
    )
}

export default NewsFields;