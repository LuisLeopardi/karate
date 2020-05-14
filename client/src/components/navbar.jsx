import React, {useState} from 'react';
import icon from '../images/icon.png'
import menu from '../images/menu.svg'
import x from '../images/x.svg'
const Navbar = () => {
    const [position, setPosition] = useState('-100vw');
    const navItem = ['inicio', 'terminologia', 'historia', 'contacto']

    return (
        <nav id ='nav'>
            <img src={icon} alt='kanku'/> 
            <div className='desktop-nav'>
                {
                navItem.map((item,i)=>
                    <a key={item} href={ i===0 ? '/' : item}> 
                        {item.toUpperCase()} 
                    </a>
                )
                }
            </div>
            <div className='mobile-nav' > 
                    <p onClick={()=>{ setPosition('0vw') }}> MENU </p>
                    <img onClick={()=>{ setPosition('0vw') }} src={menu} alt="menu"/>
               
                <div style={{ right: position }} >
                    <img src={x} onClick={()=>{ setPosition('-100vw') }} alt="close"/>
                    {
                    navItem.map((item, i)=>
                        <a key={item + i} href={ i===0 ? '/' : item}> 
                            {item.toUpperCase()} 
                        </a>      
                    )}
                </div>     
            </div>   
        </nav>
    )
}

export default Navbar;