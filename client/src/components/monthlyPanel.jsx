import React from 'react';

const MonthlyPanel = ({data, open}) => {
    let year = `año_${new Date().getFullYear()}`
    return (
        <div className='monthlyPanel' style={ open? {display:'block'} : {display:'none'}}>
            <ul className='monthlyHeader'>
                    <li> Mes </li>
                    <li> Estado </li>
                    <li> Método de Pago </li>
                    <li> Fecha de Pago </li>
                    <li> Cantidad Pagada </li>
                </ul>
            <div className='slider-wrap'>
              {data[year].map((month, i) => (
                <ul key={month + i} className='month'>
                    <li> {month.mes} </li>
                    <li> {month.pagado ? 'pagado' : 'sin pagar'} </li>
                    <li> {month.método_de_pago} </li>
                    <li> {month.fecha_de_pago} </li>
                    <li> {month.cantidad_pagada} </li>    
                </ul>) 
            )}  
            </div>     
        </div>
    )
}

export default MonthlyPanel