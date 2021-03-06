import React from 'react';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import './App.css';
import Login from './components/Incio';
import Home from './components/Home';
import Favoritos from './components/Favoritos/Favoritos';



const url = "http://localhost:3000/"
if(window.location === url){
  window.location = url + "Login"
}


function App() {

 
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path ="/Login" component ={Login} />  
          <Route exact path ="/Home" component ={Home} />  
          <Route exact path ="/Favoritos" component={Favoritos}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
