import React from 'react'

const LoginForm = ({submit, changePassword, changeUser, password, user, changeText, submitText}) => {
return (
  <form className='emailForm' onSubmit={submit}>
    <label> <p>usuario:</p>       
        <input 
        type='text' 
        name='user' 
        onChange={e => changeUser(e.target.value)}
        value={user}
        />
    </label>
    <label> <p>contraseña:</p>   
        <input 
        type='password' 
        name='password'
        value={password}
        onChange={e => changePassword(e.target.value)}
        />
    </label>
        
    <input className='submit-input' type='submit' value={submitText} onClick={()=> changeText('Ingresando...')}/>
</form>  
)
}

export default LoginForm;


