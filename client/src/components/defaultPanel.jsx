import React from 'react';
import { useState } from 'react';
import MonthlyPanel from './monthlyPanel.jsx'

const DefaultPanel = ({data,position}) => {

    const [{open,open2,open3,open4},setOpen] = useState({open:true,open2:false,open3:false,open4:false});

    return (
        <div style={ position === 'static' ? {position:'static', opacity:'0'} : {position:'relative'}}>
            <div className='panel-btn-wrap'>  
                <button 
                    className={open? 'lightGreenBtn' : 'panel-btn'} 
                    onClick={()=>setOpen({open:true,open2:false,open3:false,open4:false})}> 
                    Datos Personales
                </button>
                <button 
                    className={open2? 'lightGreenBtn' : 'panel-btn'}
                    onClick={
                    ()=> setOpen ({open:false,open2:true,open3:false,open4:false})}> 
                    Recordatorios
                </button>
                <button 
                    className={open3? 'lightGreenBtn' : 'panel-btn'}
                    onClick={()=>setOpen({open:false,open2:false,open3:true,open4:false})}> 
                    Transferencias
                </button>
                <button 
                    className={open4? 'lightGreenBtn' : 'panel-btn'}
                    onClick={()=>setOpen({open:false,open2:false,open3:false,open4:true})}> 
                    Mensualidad
                </button>
            </div>      

            <ul style={{ display:  open ? 'block' : 'none' }}>
                <li className='default-listItem'> Grado: Cinta {data[0].cinta} </li>
                <li className='default-listItem'> Fecha de inscripción: {data[0].fecha_INS} </li>
                <li className='default-listItem'> Preexamenes: {data[0].preexamenes} </li>
            </ul>

            <ul style={{ display:  open2 ? 'block' : 'none' }}>
                 {data[0].recordatorio.map(item=>(
                    <li className='default-listItem' key={item}> {item} </li>  
                 ))}
                 {data[1].paraAlumnos.map(item=>(
                    <li className='default-listItem' key={item}> {item} </li>
                 ))}    
            </ul>

            <ul style={{ display:  open3 ? 'block' : 'none' }}>
                <li className='default-listItem'>{data[0].transferencias[0]} </li>
            </ul>

            <MonthlyPanel open={open4} data={data[0]} />
        </div>
    )
}

export default DefaultPanel;