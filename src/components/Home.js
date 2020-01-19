import React from 'react';
import hash from '../spotifyApi/token';
import Header from './Header/header';
import Artistas from './Artistas/Artistas';
import Favoritos from './Favoritos/Favoritos';
import Musica from './Musica/Musica';
import './Home.css'
import {authEndpoint, clientID, redirectURI, scopes } from '../spotifyApi/config';

export default class Home extends React.Component{
   
   
    render(){
        var url = 'http://localhost:3000/';
        var toke = hash.access_token;
        if (toke =="" || toke == null){
            window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`
        }
    
      
        return(
        <div className = "home">
            <div className ="content">

                
                <div className = "headerHome">
                    <Header />
                </div>


                <div className ="ContenRecomendados">
              <Musica />

              </div>



                <div className ="ContenRecomendados">
                  <Artistas />
                </div>

              
                

            </div>
        </div>
        );
    }

}