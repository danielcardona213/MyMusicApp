import React from 'react';
import User from './user';
import * as $ from "jquery";
import hash from '../../spotifyApi/token';
import './styles/header.css'
import {Link} from 'react-router-dom';


export default class Header extends React.Component{

constructor(){
    super();

this.state ={
    item:{
            "country": "",
            "display_name": "",
            "explicit_content": {
              "filter_enabled": false,
              "filter_locked": false
            },
            "external_urls": {
              "spotify": ""
            },
            "followers": {
              "href": null,
              "total": 0
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
            "product": "",
            "type": "",
            "uri": ""
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
      this.getReconendationsBaseOnSeed(_token);
    }
  }


  getReconendationsBaseOnSeed(token){
      //hacer la llamada usando el token

      $.ajax({
          url: "https://api.spotify.com/v1/me",
          type: "GET",
          beforeSend: (xhr) =>{

            xhr.setRequestHeader("Authorization", "Bearer " + token);

          },

          success: (data) => {
              console.log("user", data);
            this.setState({

                item: data
            });
              
            
          }
      })
      console.log("item user", this.state.item);
    
  }

    render(){
        return(
            <div className ="Header">
                <div className ="contentHe">
                    <div className ="LogoHe">

                      <Link to ="/Home">
                          <h2>My music</h2>
                        </Link>
                    </div>
                <div className ="favoritos">
                  <Link to="/Favoritos">
            
                          <h6>Favoritos</h6>
                     
                    </Link>
                </div>
                <div className ="userHe">
                    <User 
                    item = {this.state.item}
                   />
                </div>
                <div className = "salir">
                  <Link to="/Login">
                        <span>Salir</span>
                  </Link>
                </div>
                </div>
            </div>
        );

    }
}