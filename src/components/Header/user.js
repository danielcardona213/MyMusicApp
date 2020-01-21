import React from 'react';
import './styles/user.css';

class User extends React.Component{

    render(){

        try {
            return(

                <div className = "user">
                    <div className ="contenUse">
                        <div className ="avatar">
                            <img src ={this.props.itemHe.images[0].url} className ="avatarImg" alt ="User IMG"/>
                        </div>
                        <div className ="nombre">
                            <p>{this.props.itemHe.display_name}</p>
                        </div>
    
                    </div>
    
    
                </div>
            );
        } catch (error) {
            console.log("No se carga los usuarios");
            
        }
        
    }
}

export default User;
