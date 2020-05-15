import React from 'react';
import { useState } from 'react';
import UserFields from './adminComponents/userFields.jsx';
import NewsFields from './adminComponents/newsFields.jsx';
import AddUser from './adminComponents/addUser.jsx';
import ModifyUserForm from './adminComponents/modifyUserForm.jsx';
import AdminUserList from './adminComponents/adminUserList.jsx';
import UserDataPanel from './adminComponents/userDataPanel.jsx';
import AddNews from './adminComponents/addNews.jsx';
import NewsList from './adminComponents/newsList.jsx';
import axios from 'axios';


const AdminPanel = ({changePosition}) => {

    const [isOpen, setOpen] = useState(false);
    const [users, setUsers] = useState(null);
    const [news, setNews] = useState(false);
    const [userId, setUserId] = useState(null);
    const [{alumnos, addAlumnos, editAlumnos, seeAlumnos, noticias, addNoticias}, setView] = useState ({
        alumnos:false, 
        noticias:false, 
        addAlumnos:false, 
        editAlumnos:false,
        seeAlumnos:false,
        addNoticias:false
    });

    const runAdmin = () =>{

        if (!isOpen) {

            const payload = {
                function:'getAllData'
            }
            
            axios.post('https://glacial-refuge-74459.herokuapp.com/ingreso',payload)
            .then(res=>{
                setNews(res.data[1])
                setUsers(res.data[0])         
            })
            .catch(err=>{
                console.log(err)
            })
            setOpen(true)
            changePosition('static')
        } else {
            setOpen(false)
            changePosition('relative')
        }

    }

    return (
        <div className='adminPanel'>
            <button className='admin' style={ isOpen ? {display:'none'} : {display:'block'} } onClick={runAdmin}> 
                Administrar
            </button>

            { isOpen ?

            <div className='settings'>

                <UserFields setView={setView} alumnos={alumnos} addAlumnos={addAlumnos}/>

                <NewsFields setView={setView} addNoticias={addNoticias} noticias={noticias}/>

                <button
                    id='goBack' 
                    className='goBackToUser' 
                    onClick={runAdmin}>
                    Regresar 
                </button>

                <AdminUserList 
                setUserId={setUserId} 
                setView={setView} 
                setUsers={setUsers} 
                users={users} 
                alumnos={alumnos}/>

                <div className={ addAlumnos? 'adminForm' : 'none' }>
                    <AddUser users={users} addAlumnos={addAlumnos}/>
                </div>

                <ModifyUserForm
                setView={setView}
                editAlumnos={editAlumnos} 
                userId={userId} 
                users={users}
                setUsers={setUsers}
                />

                <UserDataPanel
                data={seeAlumnos}
                setView={setView}
                />

                <NewsList
                news={news}
                noticias={noticias}
                setNews={setNews}
                /> 

                <AddNews
                addNoticias={addNoticias}
                />            

            </div>

            :  false

            }

        </div>
    )
}

export default AdminPanel;