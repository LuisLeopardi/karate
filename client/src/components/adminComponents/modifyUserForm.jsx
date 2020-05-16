import React, {useState, useEffect} from 'react';
import SelectPersonalData from './selectPersonalData.jsx';
import SelectMonth from './selectMonth.jsx';
import MonthlyInputField from './mothlyInputField.jsx'
import axios from 'axios';

const ModifyUserForm = ({editAlumnos, setUsers, users, userId, setView}) => {

const [data, setData] = useState(false);
const [inputValue, setValue] = useState(false);
const [{month, index}, setMonth] = useState({ month:false, index:false });
const [dataTochange, setDataToChange] = useState('');
const [{cantidad,fecha,metodo,numero},setValues] = useState({
    cantidad:'',
    fecha:'',
    metodo:'',
    numero:''
})

useEffect(()=>{
if(userId) {
let filterUser = users.filter(e=> e._id === userId)
setData(filterUser)
}
},[userId])   

const ChangeData = e => {

e.preventDefault()

if (inputValue) {

let payload = {
    id:userId,
    DBfield:inputValue,
    dataToChange:dataTochange,
    function:'modifyUser'
}

axios.post('https://glacial-refuge-74459.herokuapp.com/ingreso', payload)
.then(res=>setUsers(res.data))

setDataToChange('')

} else if (month) {

let monthPayload = {
    month:month,
    index:index,
    id:userId,
    cantidad:cantidad,
    fecha:fecha,
    metodo:metodo,
    numero:numero,
    function:'updateMontly'
}

axios.post('https://glacial-refuge-74459.herokuapp.com/ingreso', monthPayload)
.then(res=>{
setUsers(res.data)
}, setValues({cantidad:'', fecha:'', metodo:'', numero:''})) 


}
}

const handleButton = () => {
    setView({
        alumnos:true, 
        noticias:false, 
        addAlumnos:false, 
        editAlumnos:false,
        addNoticias:false
    })
    const select1 = document.getElementById('users-settings');
    const select2 = document.getElementById('news-settings');
    const select3 = document.getElementById('goBack');
    select1.style.display = 'block'
    select2.style.display = 'block'
    select3.style.display = 'block'
    setValues({
        cantidad:'',
        fecha:'',
        metodo:'',
        numero:''
    })
    setValue(false)
    setDataToChange('')
    setMonth({ month:false, index:false })
} 

return ( 
    data?
    <form className='formToMod' style={editAlumnos? {display:'flex'} : {display:'none'}} onSubmit={ChangeData}>
        <p className='userToMod'> {data[0].nombre} </p>   
        <SelectPersonalData 
        setValues={setValues} 
        setMonth={setMonth} 
        inputValue={inputValue} 
        setValue={setValue}/>
        <SelectMonth 
        setValue={setValue} 
        setMonth={setMonth}
        setDataToChange={setDataToChange} 
        month={month}/>
        <button className='goBack' onClick={handleButton}>
            Regresar
        </button>   
        <input 
            type="text" 
            value={dataTochange} 
            style={ inputValue? {display:'block'} : {display:'none'} }
            onChange={e=>setDataToChange(e.target.value)}
        />
        <MonthlyInputField 
        month={month} 
        setValues={setValues}
        metodo={metodo}
        cantidad={cantidad}
        fecha={fecha}
        numero={numero}/>
        <input type="submit" style={(inputValue||month)? {display:'block'} : {display:'none'}}/>
    </form>

    :false
)
}

export default ModifyUserForm;