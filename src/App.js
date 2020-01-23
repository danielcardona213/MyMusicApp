import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Footer from './components/footer/footer';
import Login from './components/Incio';
import Home from './components/Home';
import Favoritos from './components/Favoritos/Favoritos';
function App() {

  try { 

    return (
      <div className="App">
        
  
        <BrowserRouter>
          <Switch>
            <Route exact path ="/" component ={Login} />  
            <Route exact path ="/Home" component ={Home} />  
            <Route exact path ="/Favoritos" component={Favoritos}/>
            <Route exact path ="/Footer" component={Footer}/>
          </Switch>
        </BrowserRouter>
        
        
  
      </div>
    );
    
  } catch (error) {
    console.log("No se puede cargar la app")
  }
  
}

export default App;
