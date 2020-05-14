import React from 'react';

const MonthlyInputField = ({month,metodo,numero,cantidad,fecha,setValues}) => {

const handleInputs = e => {
    e.persist();
    let name = e.target.getAttribute('name');
    setValues(prevState=>({ ...prevState, [name]:e.target.value }))
}
return (
    <div className={ month? 'formToMod' : 'none'}>
        <input value={cantidad} name="cantidad" type="text" placeholder='cantidad pagada' onChange={handleInputs}/>
        <input value={fecha} name="fecha" type="text" placeholder='fecha de pago' onChange={handleInputs}/>
        <select value={metodo} className='width90' name="metodo" onChange={handleInputs}>
            <option selected hidden> método de pago </option>
            <option value="efectivo"> efectivo </option>
            <option value="transferencia"> transferencia </option>
        </select>       
        <input value={numero} name="numero" type="text" 
        style={ metodo==='transferencia' ? {display:'block'} : {display:'none'}} 
        placeholder='número de transferencia'
        onChange={handleInputs}
        />
    </div>
)
}

export default MonthlyInputField;