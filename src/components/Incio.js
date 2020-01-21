import React from 'react';
import {authEndpoint, clientID, redirectURI, scopes } from '../spotifyApi/config';
import './Login.css';
export default class Login extends React.Component{



    render(){

      try {
        return(
          <div className ="contentLogin">
          <div className ="contLogin">
            <div className = "LogoLogin">
              <h1>My music</h1>
              </div>


              <div className = "boton">
              <a
                  className="btn btn--loginApp-link"
                  href={`${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
                   "%20"
                      )}&response_type=token&show_dialog=true`}
                    >
                    Iniciar sesión con Spotify
              </a>
                  
            </div>
          </div>
          </div>
        ); 
      } catch (error) {
        console.log("No se puede cargar el incio");
        
      }
        
    }
}

