import React from 'react';
import './Cards.css';


export default class Card extends React.Component{

    render(){
        return(
            <div className ="card">
                <div className ="contenCard">
                    <div className ="imgCardCont">
                    <img src ="http://prints.ultracoloringpages.com/3f8a34dd2bfac666c1fbf2621c987a3e.png" className ="play"/>
                            <img src ={this.props.imgArt} className ="imgCard" />
                    </div>
                    <div className ="infoCard">
                        <div className ="name">
                                <p>{this.props.nombre}</p>
                        </div>
                        <div className ="follows">
                                <span>{this.props.valor}: {this.props.seguidores}</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}
