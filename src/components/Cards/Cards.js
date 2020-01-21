import React from 'react';
import './Cards.css';

export default class Card extends React.Component{
    render(){

        try {

            return(

                <div className ="card">
                    <div className ="contenCard">
                        <div className ="imgCardCont">
                        <h2>♥</h2>
                               {/*<a onClick={this.Follow()}>*/}<img src ={this.props.imgArt} className ="imgCard" alt="Element IMG" />{/*</a>*/} 
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
            
        } catch (error) {
            console.log("No se carga los cards");
            
        }

       
    }

}
