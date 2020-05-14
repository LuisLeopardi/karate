import React, {Component} from 'react';
import axios from 'axios';
import PersonalData from './personalData.jsx';
import LoginForm from './loginForm.jsx'

class Login extends Component {
    state = {
        user: '',
        password: '',
        data: false,
        position:'relative',
        spanClass: 'noMessage',
        submitText:'ingresar'
    }

    changePosition = () => {
        this.state.position === 'relative' ?
        this.setState({position:'static'})
        :
        this.setState({position:'relative'})
    }

    resetForm = () => {
        if (!this.state.data[0] || !this.state.data[1]) {
         this.setState({
            user: '',
            password: '',
            submitText: 'ingresar',
            spanClass: 'message'
         })
         setTimeout( ()=> {this.setState({ spanClass: 'noMessage' })} , 2000)  
        } else {
         this.setState({
            submitText: 'ingresar',
            user: '',
            password: ''
         })  
        }
    }

    submit = e => {
        e.preventDefault();

        let payload = {
            user: this.state.user,
            password: this.state.password,
            function:'login'
        }

        axios.post('http://localhost:5000/ingreso', payload)
        .then(res=>{
            if (res) {
                this.setState({ data: res.data });
                this.resetForm();
            } else {
                this.setState({ data:false });
                this.resetForm();
            }

        })
        .catch(err => console.log(err))
    }

    changeUser = (user) => {
        this.setState({user:user})
    }

    changePassword = (password) => {
        this.setState({password:password})
    }

    render(){

        let {user,password,data,position,spanClass,submitText} = this.state;

        return (

        !data || (!data[0] || !data[1]) ?

        <>

        <span className={spanClass}> error, intentelo de nuevo </span>
        <LoginForm
        changeText={()=>{this.setState({submitText:'ingresando...'})}}
        submitText={submitText} 
        submit={this.submit} 
        changeUser={this.changeUser} 
        changePassword={this.changePassword} 
        user={user}
        password={password}/>

        </>
        
        :data[0] && data[1]?

        <section className='userPanel'>

            <div className='header'>
                <p> 
                    {
                    data[0].admin ?
                    `Administrador ${data[0].nombre}` :
                    data[0].nombre
                    } 
                </p>
                <a href='ingreso' className='redBTN'> Salir </a>   
            </div>

            <div className='data'>
                <PersonalData position={position} data={data} changePosition={this.changePosition}/>
            </div>
            
        </section>

        : <h1> error </h1>

        )
    }
}

export default Login;