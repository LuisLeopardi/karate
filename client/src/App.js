import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import ButtonWrap from './components/ButtonWrap.jsx';
import FrontPage from './components/frontPage.jsx';
import Terminology from './components/terminology.jsx';
import Ingreso from './components/login.jsx';
import Email from './components/email.jsx';
import History from './components/history.jsx';
import Donate from './components/donate.jsx';
import NewsList from './components/news.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  
  render(){
    return (
      <Router>
      <div className="App">

        <Navbar/>
        <ButtonWrap/>

        <main>
          <Switch>
            <Route path="/" exact component={FrontPage}/>
            <Route path="/terminologia" component={Terminology}/>
            <Route path="/ingreso" component={Ingreso}/>
            <Route path="/contacto" component={Email}/>
            <Route path="/historia" component={History}/>
            <Route path="/donar" component={Donate}/>
            <Route path="/noticias" component={NewsList}/>
          </Switch>
        </main> 

      <Footer/>
      
      </div>
      </Router>
    );
  }
}

export default App;
