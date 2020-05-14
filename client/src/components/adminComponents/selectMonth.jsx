import React from 'react'

const SelectMonth = ({setMonth, setValue, month,setDataToChange}) => {

const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre','mensualidad']

const handleSelect = e => {
    setDataToChange('')
    setValue(false)
    setMonth({ month: months[e.target.value], index:e.target.value})
}

return (
    <select className='selectToMod' onChange={handleSelect}>
        {
            months.map((months,i)=>
                <option 
                    key={months} 
                    name={months} 
                    value={i===12? 'mensualidad' : i}
                    hidden={i===12? true : false}
                    selected={(i===12 && !month)? true : false}
                    > 
                    {months} 
                </option>
            )
        }
    </select>
)
}

export default SelectMonth;