import React from 'react';
import * as $ from "jquery";
import hash from '../../spotifyApi/token';


export default class Footer extends React.Component{
    
constructor(){
    super();

this.state ={
    itemPlay:{
        "timestamp": 0,
        "device": {
          "id": "",
          "is_active": false,
          "is_restricted": false,
          "name": "",
          "type": "",
          "volume_percent": 0
        },
        "progress_ms": "Nada No Hay nada",
        "is_playing": true,
        "currently_playing_type": "track",
        "actions": {
          "disallows": {
            "resuming": true
          }
        },
        "item": {
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
        },
        "shuffle_state": false,
        "repeat_state": "",
        "context": {
          "external_urls" : {
            "spotify" : ""
          },
          "href" : "",
          "type" : "",
          "uri" : ""
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
      this.getUser(_token);
    }
  }


  getUser(token){
      //hacer la llamada usando el token

      $.ajax({
          url: "https://api.spotify.com/v1/me/player",
          type: "GET",
          beforeSend: (xhr) =>{

            xhr.setRequestHeader("Authorization", "Bearer " + token);

          },
            
          success: (data) => {
            console.log(data);
              
            this.setState({

                itemPlay: data
            });
              
            
          }
      })
      console.log("item user", this.state.itemPlay);
    
  }

render(){
    return(
        <div className ="footer">
            <div className ="contenFooter">
                <h1>{this.state.itemPlay.item.album.name}</h1>
            </div>
        </div>
    );
}
}