import React from 'react';
import '../Presentacion.css';
import hash from '../../spotifyApi/token'
import * as $ from "jquery";
import Card from '../Cards/Cards';
import Header from '../Header/header';
import {authEndpoint, clientID, redirectURI, scopes } from '../../spotifyApi/config';


export default class Artistas extends React.Component{
    constructor(){
        super();

        this.state = {


           item:{
            "href": "",
            "items": [
              {
                "collaborative": false,
                "description": "",
                "external_urls": {
                  "spotify": ""
                },
                "href": "",
                "id": "",
                "images": [
                  {
                    "height": null,
                    "url": "",
                    "width": null
                  }
                ],
                "name": "",
                "owner": {
                  "display_name": "",
                  "external_urls": {
                    "spotify": ""
                  },
                  "href": "",
                  "id": "",
                  "type": "",
                  "uri": ""
                },
                "primary_color": null,
                "public": false,
                "snapshot_id": "",
                "tracks": {
                  "href": "",
                  "total": 0
                },
                "type": "",
                "uri": ""
              }
            ],
            "limit": 0,
            "next": "",
            "offset": 0,
            "previous": "",
            "total": 0
          }//Fin del Item



          
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
          this.getPlayList(_token);
    
        }
      }



    

    

      getPlayList(token){
          //hacer la llamada usando el token

          $.ajax({
            url: "https://api.spotify.com/v1/users/22yiwokchvrpbz4nkcai5fhmi/playlists?limit=15&offset=0",
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
    
        var toke = hash.access_token;
        if (toke  == "" || toke == null){
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
            {this.state.item.items.map((card)=>{
                        return(
                            <Card
                            imgArt = {card.images[0].url}
                            nombre ={card.name}
                            valor = "Canciones"
                            seguidores = {card.tracks.total}
                            />    

                        );

                    })}
            </div>
              

          </div>
      </div>
            

                
                       
                    
        );
    }

}
