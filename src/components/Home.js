import React from 'react';
import hash from '../spotifyApi/token';
import Header from './Header/header';
import Artistas from './Artistas/Artistas';
import Musica from './Musica/Musica';
import Footer from '../components/footer/footer';
import * as $ from "jquery";
import './Home.css'
import {authEndpoint, clientID, redirectURI, scopes } from '../spotifyApi/config';

export default class Home extends React.Component{
   
scroll = window.pageYOffset;



 

       
    render(){
        var toke = hash.access_token;
        if (toke == "" || toke == null){
            window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`
        }

        try {
                
        return(
            <div className = "home">
                <div className ="content">
    
                <footer className="footer" id ="pie">
                    <Footer />
                </footer>      
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
        } catch (error) {
            console.log("No se carga el Hoome");
            
        }
      
    }

}