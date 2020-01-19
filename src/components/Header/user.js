import React from 'react';
import './styles/user.css';

class User extends React.Component{

    render(){
        return(

            <div className = "user">
                <div className ="contenUse">
                    <div className ="avatar">
                        <img src ="https://previews.123rf.com/images/anwarsikumbang/anwarsikumbang1502/anwarsikumbang150200445/36649700-man-avatar-user-picture-cartoon-character-vector-illustration.jpg" className ="avatarImg"/>
                    </div>
                    <div className ="nombre">
                        <p>Daniel Cardona Calderon</p>
                    </div>

                </div>


            </div>
        );
    }
}

export default User;
