import React from 'react';
import '../Presentacion.css';
import '../../components/Home.css';
import hash from '../../spotifyApi/token'
import * as $ from "jquery";
import Card from '../Cards/Cards';
import Header from '../Header/header';
import Footer from '../footer/footer';
import {authEndpoint, clientID, redirectURI, scopes } from '../../spotifyApi/config';


export default class Artistas extends React.Component{
    constructor(){
        super();
     
      this.state = {
           item:{
            "artists": {
              "items": [{
                  "external_urls": {
                    "spotify": ""
                  },
                  "followers": {
                    "href": null,
                    "total": 0
                  },
                  "genres": [""],
                  "href": "",
                  "id": "",
                  "images": [{
                      "height": 0,
                      "url": "",
                      "width": 0
                    }],
              "name": "",
              "next": "",
              "total": 0,
              "cursors": {
                "after": ""
              },
              "limit": 0,
              "href": ""
            }]
          }
        }
      }
    }
   componentDidMount() {
        // Set token
        let _token = hash.access_token;

        if (_token) {
          // Set token
          this.setState({
            token: _token
          });
          this.getFavArtits(_token);
    
        }
      }

      getFavArtits(token){
          //hacer la llamada usando el token

          $.ajax({
            url: "https://api.spotify.com/v1/me/following?type=artist&limit=50",
            type: "GET",
            beforeSend: (xhr) =>{

              xhr.setRequestHeader("Authorization", "Bearer " + token);

            },

            success: (data) => {
              console.log("Data", data)

              this.setState({
                item: data
              });

     

            }
        })

      }

    render(){
    try {
      
        var toke = hash.access_token;
        if (toke  == "" || toke == null){
            window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`
        }

        return(

          <div className = "home">
          <div className ="content">

          <footer className="footer" id ="pie">
                    <Footer />
                </footer>   

              <div className = "headerHome">
                  <Header />
              </div>

            <div className ="ContenRecomendadosArtis">
            {this.state.item.artists.items.map((card, div)=>{
                       
                       return(
                          <div key={div.toString()}>
                          <li  key={card.toString()}>
                            <Card 
                             imgArt = {card.images[0].url}
                             nombre ={card.name}
                             valor = "Seguidores"
                             typeAction = {false}
                             seguidores = {card.followers.total}
                             type = {card.type}
                             Seguir ={card.id}
                             corazonRoto = {true}
                             />    
                           </li>
                         </div>
                        );

                    })}


            </div>
              

          </div>
      </div>
            

                
                       
                    
        );

        
    } catch (error) {
      console.log("No se carga los fav");
      
    }
    }

}
