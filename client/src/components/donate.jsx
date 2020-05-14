import React from 'react';
import ve from '../images/flags.svg';
import paypal from '../images/paypal.svg';

const Donate = () => {
return (
<div className='donate'>

    <h1> Vias de transferencia </h1>

    <div className='donate-option'>
        <span className='yellow-line'></span>
        <span className='blue-line'></span>
        <span className='red-line'></span>
        <div>
            <h1> Banco de Venezuela </h1>
            <p> <b>Beneficiario:</b>  Carlos Jose Azocar Velasquez </p>    
            <p> <b> Cedula:</b> 9898185 </p>
            <p> <b>Número de Cuenta:</b>  2515011110000000858 </p>
            <p> <b>Tipo de Cuenta:</b> Corriente </p>   
        </div>
        <img className='ve' src={ve} alt="bank"/>
    </div>


    <div className='donate-option'>
        <span className='lightBlue-line'></span>
        <span className='darktBlue-line'></span>
        <span className='evenDarkertBlue-line'></span>
        <div>
            <h1> Paypal </h1>
            <p> <b>Correo Electronico: </b>  cedoardo@gmail.com </p>  
  
        </div>
        <img className='paypal' src={paypal} alt="paypal"/>
    </div>


</div>
)}

export default Donate;