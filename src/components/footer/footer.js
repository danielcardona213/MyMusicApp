import React from 'react';
import * as $ from "jquery";
import hash from '../../spotifyApi/token';
import './footer.css';

export default class Footer extends React.Component{

constructor(){
    super();

this.state={
    itemPlay:{
        "timestamp": 0,
        "device": {
          "id": "",
          "is_active": false,
          "is_restricted": false,
          "name": "CARNAVAl",
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
            this.setState({
                itemPlay: data
            });
          }
      })
  }
  

render(){


  if (this.state.itemPlay){
    return(
        <div className ="footer">

          
            <div className ="contenFooter">
              <div className ="imgSong">
                <img src ={this.state.itemPlay.item.album.images[0].url} alt ="Album img" className="imgAlb" />
              </div>
              <div className="names">
                <p className="songName">{this.state.itemPlay.item.name} - Del album- {this.state.itemPlay.item.album.name}</p>
                <div className ="artistName">{this.state.itemPlay.item.artists.map((nombre) =>{
                    return( 
                      <p  key={nombre.name.toString()}>{nombre.name}. - </p>
                    );
                })
                  }</div>
                </div>
                <div className ="progresbar">
                  <div className="bar">
                    <div className ="progres">

                    </div>

                  </div>

                </div>
            </div>
        </div>
    );

  }else{
    
      try {

        return(
        <div className ="footer">
          <div className ="contenFooter">
            <div className ="imgSong">
              <img src ="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f9.png" alt ="Album img" className="imgAlb" />
            </div>
            <div className="names">
              <p className="songName">Vacio - Del album- Vacio</p>
              <p className ="artistName">Vacio</p>
              </div>
              <div className ="progresbar">
                <div className="bar">
                  <div className ="progres">
                  </div>
                </div>
              </div>
          </div>
      </div>  
      );
      } catch (error) {
        console.log("vacio")
      }
 }
}
}
