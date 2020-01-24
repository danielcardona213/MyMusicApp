import React from 'react';
import './Cards.css';
import hash from '../../spotifyApi/token'
import * as $ from "jquery";
import Swal from 'sweetalert2';
export default class Card extends React.Component{
    

    
constructor(){
  
  super();

    this.state = {
      "token": null,

  }


    }            

//Fin del constructor

    
componentDidMount() {
        // Set token
        let _token = hash.access_token;
       
        if (_token) {
          // Set token
          this.setState({
            token: _token
          });
        }
}
      //Seguir a un artista o cancion 
getseguir = e =>{  
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btnCard btn-success',
          cancelButton: 'btnCard btn-danger'
        },
        buttonsStyling: false
      })
    if (this.props.typeAction){

            e.preventDefault();
            //hacer la llamada usando el token
          if (this.props.seguir == "null"){
              
              console.log("No es posible seguir canciones");
          }else{
              $.ajax({
                  url: `https://api.spotify.com/v1/me/following?type=artist&ids=${this.props.Seguir}`,
                  type: "PUT",
                  beforeSend: (xhr) =>{
                    xhr.setRequestHeader("Authorization", "Bearer " + this.state.token);
                  },   
              })
              
              if(this.props.color){
                console.log("dada");
                
                Swal.fire(
                  "Ya sigues a este artista",
                  this.props.nombre,
                  'success'
                )
              }else{
                Swal.fire(
                  this.props.sintaxis,
                  this.props.nombre,
                  'success'
                )
              }
              

          
          }
           
    }else{
            e.preventDefault();
            //pedir la confirmación
            swalWithBootstrapButtons.fire({
                title: 'Estas seguro',
                text: "Deseas elinimar del follow a" + ' ' + this.props.nombre,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: true
              }).then((result) => {
                if (result.value) {
                    
    //Hacer la consulta en la API
                    $.ajax({
                        url: `https://api.spotify.com/v1/me/following?type=artist&ids=${this.props.Seguir}`,
                        type: "DELETE",
                        beforeSend: (xhr) =>{
                          xhr.setRequestHeader("Authorization", "Bearer " + this.state.token);
                        },   
                    })
        
    
                  swalWithBootstrapButtons.fire(
                    'Eliminado!',
                    'El artita ya esta eliminado',
                    'success'
                    
                  )
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'El artista no esta eliminado',
                    'error'
                  )
                }
              })

    }
}

getInfomatioAboutArtist = e =>{
    e.preventDefault();

    if(this.props.informationType){
        Swal.fire(
            this.props.nombre,
            'Artista: ' + this.props.artistsName,
            'ok'
          )
    }else{
        Swal.fire(
            this.props.nombre,
            'Seguidores: ' + this.props.seguidores,
            'ok'
          )
    }
    
}

//Dejas de seguir a un artista o cancion
render(){
  try {

    var cora =  "https://www.stickpng.com/assets/images/58afdad0829958a978a4a692.png"

    if(this.props.corazonRoto){
      cora= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Broken_heart.svg/1200px-Broken_heart.svg.png"
    }else if(this.props.color){
      cora = "https://i.ya-webdesign.com/images/corazon-png.png"
    }
    
            return(

                <div className ="card">
                
                    <div className ="contenCard">
                        <a onClick = {this.getInfomatioAboutArtist}>
                            <div className ="imgCardCont">   
                                <img src ={this.props.imgArt} className ="imgCard" alt="Element IMG" />
                            </div>
                        </a>
                        <div className ="infoCard">
                            <div className ="name">
                                <p>{this.props.nombre}</p>
                            </div>
                            <div className ="follows">
                                <span>{this.props.valor}: {this.props.seguidores}</span>
                                <a onClick={this.getseguir} className ="contentCora"><img 
                                
  
                                src ={cora} className ="corazon"/></a>
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
