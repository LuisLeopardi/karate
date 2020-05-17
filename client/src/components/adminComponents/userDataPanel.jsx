import React, {useState} from 'react';
import MonthlyPanel from '../monthlyPanel.jsx';
const UserDataPanel = ({data, setView}) => {
    const [{open,open3,open4},setOpen] = useState({open:true,open3:false,open4:false});

    return (
        data?
        <div style={{width:'100%'}}>
            <div className='panel-btn-wrap'>
                <p className='userName'> {data.nombre} </p>     
                <button 
                    className={open? 'lightGreenBtn' : 'panel-btn'}  
                    onClick={()=>setOpen({open:true,open2:false,open3:false, open4:false})}> 
                    Datos Personales
                </button>
                <button 
                     className={open3? 'lightGreenBtn' : 'panel-btn'}
                    onClick={()=>setOpen({open:false,open2:false,open3:true, open4:false})}> 
                    Transferencias
                </button>
                <button 
                    className={open4? 'lightGreenBtn' : 'panel-btn'} 
                    onClick={()=>setOpen({open:false,open2:false,open3:false, open4:true})}> 
                    Mensualidad
                </button>
                <button className='panel-btn' 
                    onClick={()=>{setOpen({open:false,open2:false,open3:false, open4:false}); 
                    setView({           
                        alumnos:true, 
                        noticias:false, 
                        addAlumnos:false, 
                        editAlumnos:false,
                        seeAlumnos:false,
                        addNoticias:false
                    });
                    const select1 = document.getElementById('users-settings');
                    const select2 = document.getElementById('news-settings');
                    const select3 = document.getElementById('goBack');
                    select1.style.display = 'block'
                    select2.style.display = 'block'
                    select3.style.display = 'block'
                    }}> 
                    Regresar
                </button>
            </div>      

            <ul style={{ display:  open ? 'block' : 'none' }}>
                <li className='default-listItem'> Correo: {data.correo} </li>
                <li className='default-listItem'> Numero: {data.número} </li>
                <li className='default-listItem'> Grado: Cinta {data.cinta} </li>
                <li className='default-listItem'> Asistente: {data.asistente? 'si' : 'no'} </li>
                <li className='default-listItem'> Dirección: {data.dirección} </li>
                <li className='default-listItem'> Fecha de nacimiento: {data.fecha_NC} </li>
                <li className='default-listItem'> Fecha de inscripción: {data.fecha_INS} </li>
                <li className='default-listItem'> Preexamenes: {data.preexamenes} </li>
                <li className='default-listItem'> Contraseña: {data.contraseña} </li>
            </ul>

            <ul style={{ display: open3 ? 'block' : 'none' }}>
                {
                    data.transferencias.map((e,i)=>
                        <li className='default-listItem' key={e + i}> {e} </li>  
                    )
                }
            </ul>

            <MonthlyPanel open={open4} data={data} />

        </div>
        : false
    )
}

export default UserDataPanel;