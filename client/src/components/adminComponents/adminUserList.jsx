import React, {useState} from 'react';
import DeleteIcon from './deleleIcon.jsx';
import EditIcon from './editIcon.jsx';

const AdminUserList = ({setView,setUsers,users,setUserId,alumnos}) => {
    const [userForDelete, setUserForDelete] = useState(false);
    const [value, setValue] = useState('');
    const inputStyle = {
        position:'absolute',
        height:'100%',
        width:'80%',
        left:'0',
        top:'0',
        margin:'0'
    }
    return (
        <ul className={ alumnos? 'adminList' : 'none' }>
            { users ? 
                users.map(user=>
                    <li 
                    className={(userForDelete && userForDelete !== user.nombre)? 'none' :'admin-user-listItem'} 
                    key={user.nombre}>
                    { userForDelete === user.nombre ?
                    <input 
                    style={inputStyle}
                    placeholder='introduce el nombre del usuario para confirmar'
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                    />
                    :
                    <p>{user.nombre}</p>     
                    }  

                        <div className='icon-wrap'>
                            <button 
                            className={ userForDelete? 'none' : 'admin-btn lightGreen'} 
                            value={user}
                            onClick={()=>{
                                setView({ 
                                alumnos:false, 
                                noticias:false, 
                                addAlumnos:false, 
                                editAlumnos:false,
                                seeAlumnos:user,
                                addNoticias:false
                             });
                             const select1 = document.getElementById('users-settings');
                             const select2 = document.getElementById('news-settings');
                             const select3 = document.getElementById('goBack');
                             select1.style.display = 'none'
                             select2.style.display = 'none'
                             select3.style.display = 'none'
                             }}>
                                Planilla
                            </button>
                            <EditIcon 
                                setView={setView}
                                setUserId={setUserId}
                                id={user._id}
                                nombre={user.nombre}
                                userForDelete={userForDelete}
                            />
                            <button 
                            onClick={()=>{setUserForDelete(false); setValue(''); }} 
                            className={userForDelete===user.nombre?'admin-btn lightGreen':'none'}>
                                Regresar
                            </button>   
                            <DeleteIcon
                                value={value}
                                users={users} 
                                setUsers={setUsers} 
                                nombre={user.nombre}
                                userForDelete={userForDelete}
                                setUserForDelete={setUserForDelete}
                            />              
                        </div>
                    </li>)
                    :
                'esperando respuesta...'
            }
        </ul>
    )
}

export default AdminUserList