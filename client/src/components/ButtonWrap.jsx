import React from 'react';

const ButtonWrap = () => {

    const items = ['ingreso', 'donar', 'noticias']
    const classes = ['green','orange','gray']

    return (
        <div id='button-wrap' className='button-wrap'>
            {items.map((item, i)=>
                <a 
                    key={item}
                    className={classes[i]}
                    href={item}>
                    {item.toUpperCase()}
                </a>
            )}
        </div>
    )
}

export default ButtonWrap