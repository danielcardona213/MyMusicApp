import React from 'react';
import './Cards.css';


export default class Card extends React.Component{

    render(){
        return(
            <div className ="card">
                <div className ="contenCard">
                    <div className ="imgCardCont">
                            <img src ="https://i0.wp.com/www.slang.fm/wp-content/uploads/2019/11/tusa-karol.jpg?fit=1280%2C719&ssl=1" className ="imgCard" />
                    </div>
                    <div className ="infoCard">
                        <div className ="name">
                                <p>Pedro y los escamosos</p>
                        </div>
                        <div className ="follows">
                                <span>Seguidores: 20.000</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}
