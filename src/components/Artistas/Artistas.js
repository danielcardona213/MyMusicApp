import React from 'react';
import '../Presentacion.css';
import hash from '../../spotifyApi/token'
import * as $ from "jquery";
import Card from '../Cards/Cards';


export default class Artistas extends React.Component{
    constructor(){
        super();

        this.state = {
           item:{
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
                  },
                  {
                    "height": 0,
                    "url": "",
                    "width": 0
                  },
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
            ],
            "total": 0,
            "limit": 0,
            "offset": 0,
            "href": "",
            "previous": null,
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
            url: "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=15&offset=5",
            type: "GET",
            beforeSend: (xhr) =>{

              xhr.setRequestHeader("Authorization", "Bearer " + token);

            },

            success: (data) => {
                console.log("top arry", data);
              this.setState({
                item: data
              });


            }
        })

      }


    render(){
        return(
            <div className="Contenedor">
                <div className = "cont">

                    <div className  ="Titulo">

                    <h4>Artistas</h4>

                    </div>

                    <div className ="Cards">

                    {this.state.item.items.map((card)=>{
                        return(
                            <Card
                            imgArt = {card.images[0].url}
                            nombre ={card.name}
                            valor = "Seguidores"
                            seguidores = {card.followers.total}
                            />    

                        );

                    })}
                       
                    </div>

                </div>
            </div>
        );
    }

}
