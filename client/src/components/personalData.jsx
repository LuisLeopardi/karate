import React from 'react';
import DefaultPanel from './defaultPanel.jsx';
import AdminPanel from './adminPanel.jsx'
const PersonalData = ({data,position,changePosition}) => {

    const footer = document.getElementById('footer')
    const nav = document.getElementById('nav')
    const buttonWrap = document.getElementById('button-wrap')
    footer.style.display = 'none';
    nav.style.display = 'none'; 
    buttonWrap.style.display = 'none';

    return (
        data[0].admin ?
        <div className='PersonalData' style={{position:position}}>
            <DefaultPanel data={data} position={position}/>
            <AdminPanel data={data} changePosition={changePosition}/>
        </div>
        :
        <div className='PersonalData'>
            <DefaultPanel data={data}/>
        </div>
    )
}

export default PersonalData;