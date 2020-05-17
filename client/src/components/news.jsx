import React, {Component} from 'react';
import axios from 'axios';

class NewsList extends Component {
state = {
    data: false
}
componentDidMount(){
axios.post('https://glacial-refuge-74459.herokuapp.com/noticias')
.then(res=>this.setState({ data:res.data[0].paraTodos }))
}
render() {
const {data} = this.state;
return (
    <ul className='publicNews'>{
        data?
        data.map( news =>
        <li> {news} </li>
        )
        :
        <div className='spinner'></div> 
    }</ul> 
)}
}

export default NewsList;