import React from 'react';
import '../Presentacion.css';
import hash from '../../spotifyApi/token'
import * as $ from "jquery";
import Card from '../Cards/Cards';
import Header from '../Header/header';

export default class Artistas extends React.Component{
    constructor(){
        super();

        this.state = {
           item:{

            "artists":{
            
              "items": [
                {
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
                  "images": [
                    {
                        "height": 0,
                        "url": "",
                        "width": 0
                    }
                    
                  ],
                  "name": "",
                  "popularity": 0,
                  "type": "",
                  "uri": ""
                }
              ],// Fin Items
              "next": null,
              "total": 0,
              "cursors": {
                "after": null
              },
              "limit": 0,
              "href": ""
            
          }//Fin del Artist
        }//in del Item
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
          this.getReconendationsBaseOnSeed(_token);
        }
      }


      getReconendationsBaseOnSeed(token){
          //hacer la llamada usando el token

          $.ajax({
            url: "https://api.spotify.com/v1/me/following?type=artist",
            type: "GET",
            beforeSend: (xhr) =>{

              xhr.setRequestHeader("Authorization", "Bearer " + token);

            },

            success: (data) => {
                console.log("Favoritos", data);
              this.setState({
                item: data
              });


            }
        })

      }


    render(){
        return(

          <div className = "home">
          <div className ="content">

              
              <div className = "headerHome">
                  <Header />
              </div>


            <div className ="ContenRecomendados">
            {this.state.item.artists.items.map((card)=>{
                        return(
                            <Card
                            imgArt = {card.images[0].url}
                            nombre ="Hola"
                            valor = "Seguidores"
                            seguidores = "Hola"
                            />    

                        );

                    })}
            </div>
              

          </div>
      </div>
            

                
                       
                    
        );
    }

}
