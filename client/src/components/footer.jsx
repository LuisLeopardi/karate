import React from 'react'
import instagram from '../images/instagram.svg'
const Footer = () => {
return (
    <footer id='footer'>
        <figure>
            <a href="https://www.instagram.com/sensei_carlos_azocar/">
                <img src={instagram} href='' alt="instagram"/>
            </a>      
        </figure>
        <p> © todos los derechos reservados </p>
    </footer>
)}

export default Footer