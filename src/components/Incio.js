import React from 'react';
import {authEndpoint, clientID, redirectURI, scopes } from '../spotifyApi/config';

export default class Login extends React.Component{



    render(){
        return(

            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
        );
    }
}

