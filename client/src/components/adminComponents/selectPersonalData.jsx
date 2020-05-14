import React from 'react'

const SelectPersonalData = ({setValue, setMonth, inputValue, setValues}) => {
const inputs = ['nombre','correo','contraseña','direccion','fecha_NC','fecha_INS','numero','asistente','cinta','preexamenes','datos personales']
const handleSelect = e => {
    setMonth({ month:false, index:false })
    setValue(e.target.value)
    setValues({
        cantidad:'',
        fecha:'',
        metodo:'',
        numero:''
    })
}
return (
    <select onChange={handleSelect} className='selectToMod'>
        {inputs.map((input,i)=>
            <option
                key={input + i} 
                value={input}
                selected={(i===10 && !inputValue)?true:false}
                hidden={i===10?true:false}
                > 
                {input} 
            </option>
        )
        }
    </select>
)
}

export default SelectPersonalData;