import React, {Component} from 'react';
import axios from 'axios';
import phone2 from '../images/phone.svg';

class Email extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        phone: '',
        submitText: '',
        submitInput:'Enviar',
        spanClass: 'noMessage'
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
            submitInput:'Enviar'
        })
        setTimeout( ()=> {this.setState({ spanClass: 'noMessage', submitText: '' })} , 2000)
    }

    submit = e => {
        e.preventDefault();

        let msg = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        }

        axios.post('https://glacial-refuge-74459.herokuapp.com/contacto', msg)
        .then(res=>{
            if (res) {
                this.setState({ submitText: 'mensaje enviado exitosamente', spanClass:'message' })
                this.resetForm()
            } else {
                this.setState({ submitText: 'error, intentalo de nuevo', spanClass:'message' })
                this.resetForm()
            }
        })
        .catch(()=>{
            this.setState({ submitText: 'error, intentalo de nuevo', spanClass:'message' })
            this.resetForm()
        })
    }

    render(){

        let {name,email,message,phone,submitText,submitInput,spanClass} = this.state;

        return (
        <>
        <p className='phone'> <img src={phone2} alt="phone"/> <i> 041458698562 </i> <span> puede llamar o enviar un correo </span> </p>

        <form className='emailForm' onSubmit={this.submit}>
            <span className={spanClass}> {submitText} </span>
            <label> <p>Correo:</p> 
                <input 
                type='mail' 
                name='email'
                onChange={e => this.setState({ email: e.target.value })}
                value={email}/>
            </label>

            <label> <p>Nombre:</p> 
                <input 
                type='text' 
                name='name' 
                onChange={e => this.setState({ name: e.target.value })}
                value= {name}/>
            </label>      

            <label> <p>Telefono:</p>   
                <input
                type='number' 
                name='phone'
                onChange={e => this.setState({ phone: e.target.value })}
                value={phone}/>
            </label>
            <label> <p>Mensaje:</p>    
                <textarea
                name='message' 
                onChange={e => this.setState({ message: e.target.value })}
                value={message}/>
            </label>
                    
            <input className='submit-input' type='submit' value={submitInput} onClick={()=> this.setState({submitInput:'Enviando Mensaje'})}/>

        </form>
        </>
        )
    }
}

export default Email;