import React from 'react';
import '../Presentacion.css';
import hash from '../../spotifyApi/token'
import * as $ from "jquery";
import Card from '../Cards/Cards';


export default class Musica extends React.Component{
    constructor(){
        super();

        this.state = {
           itemM:{
            "items": [
              {
                "album": {
                  "album_type": "SINGLE",
                  "artists": [
                    {
                      "external_urls": {
                        "spotify": ""
                      },
                      "href": "",
                      "id": "",
                      "name": "",
                      "type": "",
                      "uri": ""
                    }
                  ],
                  "available_markets": [""],
                  "external_urls": {
                    "spotify": ""
                  },
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
                  "release_date": "",
                  "release_date_precision": "",
                  "total_tracks": 0,
                  "type": "",
                  "uri": ""
                },
                "artists": [
                  {
                    "external_urls": {
                      "spotify": ""
                    },
                    "href": "",
                    "id": "",
                    "name": "",
                    "type": "",
                    "uri": ""
                  }
                ],
                "available_markets": [""],
                "disc_number": 0,
                "duration_ms": 0,
                "explicit": false,
                "external_ids": {
                  "isrc": ""
                },
                "external_urls": {
                  "spotify": ""
                },
                "href": "",
                "id": "",
                "is_local": false,
                "name": "",
                "popularity": 0,
                "preview_url": "",
                "track_number": 0,
                "type": "",
                "uri": ""
              }
            ],
            "total": 0,
            "limit": 0,
            "offset": 0,
            "href": "",
            "previous": "",
            "next": ""
          }//fin del item


            }//Fin del item
        }//in del state
    //Fin del constructor

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
            url: "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=15&offset=5",
            type: "GET",
            beforeSend: (xhr) =>{

              xhr.setRequestHeader("Authorization", "Bearer " + token);

            },

            success: (data) => {
                console.log("Canciones", data);
              this.setState({
                itemM: data
              });


            }
        })

      }

      


    render(){

        
        return(
            <div className="Contenedor">
                <div className = "cont">

                    <div className  ="Titulo">

                    <h4>Musica</h4>

                    </div>

                    <div className ="Cards">

                    {this.state.itemM.items.map((card)=>{
                        return(
                            <Card
                            imgArt = {card.album.images[0].url}
                            nombre ={card.name}
                            valor = "Popularidad"
                            seguidores = {card.popularity}
                            />    

                        );

                    })}
                       
                    </div>

                </div>
            </div>
        );
    }

}
