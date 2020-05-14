import React from 'react';

const EditNewsButton = ({deleteItem, enableEdit, changeValue, edit, news}) => {

    return (
        <button className={(edit||deleteItem)? 'none' : 'admin-btn yellow'} onClick={()=>{enableEdit(news); changeValue(news)}}> 
            Editar 
        </button>
    )
}

export default EditNewsButton;