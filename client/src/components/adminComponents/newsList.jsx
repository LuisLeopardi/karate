import React,{useState} from 'react';
import EditNewsButton from './editNewsButton.jsx';
import DeleteNewsButton from './deleteNewsButton.jsx';
import AddNewsButton from './addNewsButton';
import axios from 'axios';

const NewsList = ({noticias,news,setNews}) => {
const [edit, enableEdit] = useState(false);
const [inputValue, changeValue] = useState('');
const [deleteItem, enableDelete] = useState(false);
const inputStyle = {
    display:(edit||deleteItem)?'block':'none'
}
const updateNews = (e,audience) => {
let editPayload = {
    index: e,
    audience: audience?audience:undefined,
    value: inputValue,
    function: 'editNews'
}
axios.post('http://localhost:5000/ingreso', editPayload)
.then(res=>{
    setNews(res.data)
})
enableEdit(false); 
changeValue('')
}

return (
<>
<ul className={ noticias? 'adminList' : 'none' }>
        <p className={(edit||deleteItem)? 'none' : 'newsList-title'}> Privadas </p>   

    {   news?


        news[0].paraAlumnos.map((news,i)=>
            <li key={news} 
            className={
            (edit===news||deleteItem===news)? 'admin-user-listItem'
            : (edit||deleteItem)? 'none' 
            : 'admin-user-listItem'}> 
                <input style={inputStyle} 
                className='news-input'
                type="text" 
                value={(inputValue?inputValue:'')}
                onChange={e=>changeValue(e.target.value)}  
                placeholder={deleteItem?'escriba "borrar" para eliminar':'false'}        
                />
                <p style={ (edit===news||deleteItem===news)? {display:'none'} : {display:'flex'} }> {news} </p>    
                <div className='icon-wrap'>
                    <button 
                        className={(edit||deleteItem)?'admin-btn yellow':'none'}
                        onClick={()=>{ enableEdit(false); changeValue(''); enableDelete(false) }}
                    >
                        Regresar
                    </button>
                    <EditNewsButton 
                        enableEdit={enableEdit} 
                        changeValue={changeValue} 
                        news={news}
                        edit={edit}
                        deleteItem={deleteItem}
                        setNews={setNews}
                    />
                    <DeleteNewsButton 
                        enableDelete={enableDelete} 
                        audience='paraAlumnos'
                        news={news}
                        edit={edit}
                        deleteItem={deleteItem}
                        inputValue={inputValue}
                        setNews={setNews}
                    />
                    <AddNewsButton 
                        edit={edit} 
                        updateNews={updateNews} 
                        index={i}
                        audience='paraAlumnos'
                        setNews={setNews}
                    />
                </div>
            </li>  
        )
         : 'esperando respuesta...'
    }
</ul>
<ul className={ noticias? 'adminList' : 'none' }>
        <p className={(edit||deleteItem)? 'none' : 'newsList-title'}> Públicas </p> 

    {   news?


        news[0].paraTodos.map((news,i)=>
            <li key={news} 
            className={
                (edit===news||deleteItem===news)? 'admin-user-listItem'
                : (edit||deleteItem)? 'none' 
                : 'admin-user-listItem'}> 
                    <input style={inputStyle} 
                    type="text" 
                    className='news-input'
                    value={(inputValue?inputValue:'')}
                    onChange={e=>changeValue(e.target.value)}  
                    placeholder={deleteItem?'escriba "borrar" para eliminar':'false'}        
                    />
                    <p style={ (edit===news||deleteItem===news)? {display:'none'} : {display:'flex'} }>{news}</p> 
                    <div className='icon-wrap'>
                        <button 
                            className={(edit||deleteItem)?'admin-btn yellow':'none'}
                            onClick={()=>{ enableEdit(false); changeValue(''); enableDelete(false) }}
                        >
                            Regresar
                        </button>
                        <EditNewsButton 
                            enableEdit={enableEdit} 
                            changeValue={changeValue} 
                            news={news}
                            edit={edit}
                            deleteItem={deleteItem}
                        />
                        <DeleteNewsButton 
                            enableDelete={enableDelete} 
                            audience='paraTodos'
                            news={news}
                            edit={edit}
                            deleteItem={deleteItem}
                            inputValue={inputValue}
                            setNews={setNews}
                        />
                        <AddNewsButton 
                            edit={edit} 
                            updateNews={updateNews} 
                            index={i}
                            audience='paraTodos'
                            setNews={setNews}
                        />
                    </div>
            </li>  
        ) 
        : 'esperando respuesta...'
    }
</ul>
</>
)}

export default NewsList;