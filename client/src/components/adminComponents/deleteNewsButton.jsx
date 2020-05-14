import React from 'react';
import axios from 'axios'

const DeleteNewsButton = ({inputValue, deleteItem, news, edit, enableDelete, audience, setNews}) => {

const deleteNews = () => {
let deletePayload = {
    news: news,
    audience: audience,
    function: 'deleteNews'
}

axios.post('http://localhost:5000/ingreso', deletePayload)
.then(res=>{
    setNews(res.data)
}, enableDelete(false))

}
return (
    <button
    onClick={()=>{deleteItem? deleteNews() : enableDelete(news)}} 
    className={edit? 'none' : (deleteItem && inputValue!=='borrar')? 'none' : 'admin-btn red'}> 
        Borrar 
    </button>
)}

export default DeleteNewsButton;