import React, {useEffect, useState} from 'react';

const UserFields = ({setView ,alumnos, addAlumnos}) => {

    useEffect(()=>{
        
        if(!alumnos && !addAlumnos) setValue('Alumnos') 

    },[alumnos, addAlumnos])

    const options = ['ver','agregar','Alumnos'];

    const [value,setValue] = useState('Noticias')

    const handler = (e) => {
        setValue(e.target.value)
        if(e.target.value === 'ver') {
            setView(()=>({
                alumnos:true, 
                noticias:false, 
                addAlumnos:false, 
                editAlumnos:false,
                addNoticias:false
            }))
        } else if (e.target.value === 'agregar') {
            setView(()=>({
                alumnos:false, 
                noticias:false, 
                addAlumnos:true,
                editAlumnos:false, 
                addNoticias:false
            }))
        }
    }
    
    return (
    <select id='users-settings' name='alumnos' className='settings-select' value={value} onChange={handler} >
        {
            options.map((e)=>
                <option 
                    key={e}
                    selected={e==='Alumnos'?true:false} 
                    hidden={e==='Alumnos'?true:false}
                    value={e}> 
                    {e} 
                </option>
            )
        }
    </select>
    )
}

export default UserFields;

