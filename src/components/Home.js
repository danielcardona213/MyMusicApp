import React from 'react';
import hash from '../spotifyApi/token';
import Header from './Header/header';
import Artistas from './Artistas/Artistas';
import {scroll} from 'jquery';
import Musica from './Musica/Musica';
import Footer from '../components/footer/footer';
import './Home.css'
import {authEndpoint, clientID, redirectURI, scopes } from '../spotifyApi/config';

export default class Home extends React.Component{
   
scroll = window.pageYOffset;


       
    render(){
        
console.log("scroll",scroll);

        var toke = hash.access_token;
        if (toke === "" || toke === null){
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

              
                <footer>
                <Footer />
                </footer>

            </div>
        </div>
        );
    }

}