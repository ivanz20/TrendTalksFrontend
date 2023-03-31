import React, { useState, ChangeEvent } from "react";
import './App.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, List} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Display, SdCard, XCircle } from 'react-bootstrap-icons';
import imagen from './img/image1.jpeg';
import logo from  './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'



class App extends React.Component{


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({name: ""});
    this.setState({lastname: ""});
    this.setState({username: ""});
    this.setState({password: ""});
    this.setState({birthday: ""});
    this.setState({email: ""});

};

    RegistrarUsuario = (event) => { 
      fetch('https://trendtalks-service.onrender.com/api/users/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(this.state)
        }).then(function(response) {
          alert("Usuario registrado " + "Status: " + response.status)
          return response.json();
        });

      event.preventDefault();
  }

  Login = (event) => { 
    //http://localhost:8080/courses/1/comments/1/img
    fetch('https://trendtalks-service.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        if(response.status == 400){
          alert("El usuaro no esta registrado " + "Status: " + response.status)
        }else{
          alert("El usuario inicio sesion " + "Status: " + response.status)
        }
        return response.json();
      });

    event.preventDefault();
}
  
  state={
    loginModal: false,
    RegisterModal: false,
    PublicacionModal: false,
    PerfilModal: false,
    name:"",
    lastname:"",
    username:"",
    password:"",
    birthday:"",
    email:""
  }
  Publicacion={
    comentario:""
  }

  abrirModal=()=>{
    this.setState({loginModal: !this.state.loginModal});
  }
  abrirModalPublicacion=()=>{
    this.setState({PublicacionModal: !this.state.PublicacionModal});
  }
  abrirModalRegistro=()=>{
    this.setState({RegisterModal: !this.state.RegisterModal});
  }
  abrirModalPerfil=()=>{
    this.setState({PerfilModal: !this.state.PerfilModal});
  }

 

  render(){
   
    const tab = <>&nbsp;&nbsp;&nbsp;</>;

    return(

      <>
      <div className="principal">
        <div className="navbar-opciones">
          <img id="logo-tt" src={logo} style={{width:'15%'}}></img>
          <input id="barra-buscar" placeholder="Buscar" />
          <div id="home-navbar">
          <FontAwesomeIcon icon={faHashtag} size="xl" color="#738386"/>
            <text className="navbar-items">EXPLORAR</text>
          </div>

        </div>
        
        <div className="secundario">
        <Button color="success" id="boton-iniciosesion" onClick={this.abrirModalPublicacion}>PUBLICAR</Button>
          <br></br>
          {tab}
          <Button color="success" id="boton-iniciosesion" onClick={this.abrirModal}>INICIAR SESION</Button>
          <br></br>
          {tab}
          <Button color="secondary" id="boton-registrarse" onClick={this.abrirModalRegistro}>REGISTRARSE</Button>
          {tab}
          <Button color="secondary" id="boton-registrarse" onClick={this.abrirModalPerfil}>PERFIL</Button>
        </div>
      </div>
      <div className="contenido-pagina">
      <text className="pregunta-shortalk">¿Que opinas de la inflación?</text>
        <div className="shorttalks">
        
          <div className="friends-short user">
              <div className="fotoperfil isShortUpload"></div>
              <text className="nombre-short">Agregar</text>
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend isShortUpload"></div>
              <text className="nombre-short">faribb10</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend isShortUpload"></div>
              <text className="nombre-short">user1</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend isShortUpload"></div>
              <text className="nombre-short">user2</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend isShortUpload"></div>
              <text className="nombre-short">user3</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend isShortUpload"></div>
              <text className="nombre-short">user4</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend isShortUpload "></div>
              <text className="nombre-short">user2</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend isShortUpload "></div>
              <text className="nombre-short">user3</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user4</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user2</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user3</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user4</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user2</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user3</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user4</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user2</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user3</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user4</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user2</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user3</text> 
          </div>
          <div className="friends-short">
              <div className="fotoperfil-friend "></div>
              <text className="nombre-short">user4</text> 
          </div>
          
        </div>
        <div className="posts-tt">
          <div className="post-user">
              <div className="fotoarea">
                <div className="fotoperfil-post "></div>
              </div>
              <div className="text-postarea">
                  <div className="post-content">
                    <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                    <br></br>
                    <text>Q ganas de una caguama elada  caguama eladaQ ganas de una caguama elada</text>
                    <br></br>
                    <text>#Tecate #Helado</text>
                    <br></br>
                    <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{color: "#CA0C0C",}} /></button>
                    <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{color: "#0CCA4A",}} /></button>
                  </div>
              </div>
          </div>
          
          
          <div className="post-user">
              <div className="fotoarea">
                <div className="fotoperfil-post "></div>
              </div>
              <div className="text-postarea">
                  <div className="post-content">
                    <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                    <br></br>
                    <text>Un saludo a la bandita q la sigue cotorriando</text>
                    <br></br>
                    <text>#Cotorro #GPI </text>
                    <br></br>
                    <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{color: "#CA0C0C",}} /></button>
                    <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{color: "#0CCA4A",}} /></button>
                  </div>
              </div>
          </div>

          <div className="post-user">
              <div className="fotoarea">
                <div className="fotoperfil-post "></div>
              </div>
              <div className="text-postarea">
                  <div className="post-content">
                    <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                    <br></br>
                    <text>Un saludo a la bandita q la sigue cotorriando</text>
                    <br></br>
                    <text>#Cotorro #GPI </text>
                    <br></br>
                    <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{color: "#CA0C0C",}} /></button>
                    <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{color: "#0CCA4A",}} /></button>
                  </div>
              </div>
          </div>

          <div className="post-user">
              <div className="fotoarea">
                <div className="fotoperfil-post "></div>
              </div>
              <div className="text-postarea">
                  <div className="post-content">
                    <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                    <br></br>
                    <text>Un saludo a la bandita q la sigue cotorriando</text>
                    <br></br>
                    <text>#Cotorro #GPI </text>
                    <br></br>
                    <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{color: "#CA0C0C",}} /></button>
                    <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{color: "#0CCA4A",}} /></button>
                  </div>
              </div>
          </div>
        </div>
        
        

      </div>

      <Modal isOpen={this.state.loginModal}>
        <ModalHeader>
          <XCircle color="#0CCA4A" size={30} onClick={this.abrirModal}/>
          {tab}
          <text className="titulo-modal">INICIO DE SESIÓN</text>
        </ModalHeader>

        <ModalBody>
          <br></br>
          <form onSubmit={this.Login}>
            <FormGroup>
            <Input type="text" name="usuario"  value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} placeholder="USUARIO"/>
            </FormGroup>
            <br></br>
            <FormGroup>
            <Input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} placeholder="CONTRASEÑA"/>
            </FormGroup>
            <br></br>
            <Button  size="lg" block type="submit" id="btn-iniciosesion2" placeholder="Iniciar Sesión" >ENTRAR</Button>
            <br></br>
          </form>
        
        </ModalBody>

        <ModalFooter>
          <img src={imagen} style={{width:'98%'}}></img>
        </ModalFooter>
        
      </Modal>
      <Modal isOpen={this.state.PublicacionModal}>
        <ModalHeader>
          <XCircle color="#0CCA4A" size={30} onClick={this.abrirModalPublicacion}/>
          {tab}
          <text className="titulo-modal"></text>
        </ModalHeader>

        <ModalBody>
          <br></br>
          <form >
            <FormGroup>
            <Input type="text" name="publcacion"   value={this.Publicacion.comentario} onChange={(e) => this.setState({comentario: e.target.value})} placeholder="Di lo que piensas..."/>
            </FormGroup>
            <br></br>
            <div  style={{height: "7%"}}>
            <Button  block type="submit" id="btn-publicar" placeholder="Publicar" >Hacer publicacion</Button>
            </div>
            <br></br>
          </form>
        
        </ModalBody>

        
      </Modal>

      <Modal isOpen={this.state.RegisterModal}>
        <ModalHeader>
          <XCircle color="green" size={30} onClick={this.abrirModalRegistro}/>
          {tab}
          <text className="titulo-modal">REGISTRO DE USUARIO</text>
        </ModalHeader>

        <ModalBody>
          <br></br>
          <form onSubmit={this.RegistrarUsuario}>
          <FormGroup >
            <Input type="text" name="nombres" value={this.state.name}  onChange={(e) => this.setState({name: e.target.value})} placeholder="NOMBRE(S)"/>
            <br></br>
            <Input type="text" name="apellidos" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})} placeholder="APELLIDOS(S)"/>
            <br></br>
            <Input type="text" name="usuario" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} placeholder="USUARIO"/>
            <br></br>
            <Input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="EMAIL"/>
            <br></br>
            <Input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} placeholder="CONTRASEÑA"/>
            <br></br>
            <label>
              Fecha de Nacimiento:
              <br></br>
              <br></br>
              <Input type="date" name="birth"  value={this.state.birthday} onChange={(e) => this.setState({birthday: e.target.value})} style={{width: "450px"}}>
              </Input>
            </label>
            <br></br>
            <br></br>
            <br></br>
            <Input type="submit"  size="lg"  value="REGISTRAR" id="btn-registro">Registrar usuario</Input>
          </FormGroup>
          </form>
        
          <br></br>
          
        </ModalBody>

       
      </Modal>
      
      <Modal isOpen={this.state.PerfilModal}>
      <ModalHeader>
         
        <div class="Imagen-Fondo">
        <XCircle color="white" size={30} onClick={this.abrirModalPerfil}/>
          {tab}
          <text className="titulo-modal">NOMBRE DE USUARIO</text>
          <text className="Subtitulo-modal">@CorreoUsuario</text>
          <div className="friends-short">
              <div className="fotoperfil-friend isShortUpload Perfil-perfil"></div>
              <text className="nombre-short"></text> 
              <Button color="success" id="boton-follow" >Seguir</Button>
          
          </div>
         
        </div>
        </ModalHeader>
         
        <ModalBody>
          <div className="post-user-perfil">
              
              <div className="text-postarea-perfil">
                  <div className="post-content-perfil">
                    <text>Q ganas de una caguama elada  caguama eladaQ ganas de una caguama elada</text>
                    <br></br>
                    <text className="Nlikes_comentarios">3 likes - 2 comentarios</text>
                    <br></br>
                    <text className="HorayFecha">@Oscarin21 - Hace 10 minutos</text>
                  </div>
              </div>
          </div>
          <div className="post-user-perfil">
              
              <div className="text-postarea-perfil">
                  <div className="post-content-perfil">
                    <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                    <br></br>
                    <text>Q ganas de una caguama elada  caguama eladaQ ganas de una caguama elada</text>
                    <br></br>
                    <text>#Tecate #Helado</text>
                    <br></br>
                  </div>
              </div>
          </div>
          <div className="post-user-perfil">
              
              <div className="text-postarea-perfil">
                  <div className="post-content-perfil">
                    <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                    <br></br>
                    <text>Q ganas de una caguama elada  caguama eladaQ ganas de una caguama elada</text>
                    <br></br>
                    <text>#Tecate #Helado</text>
                    <br></br>
                  </div>
              </div>
          </div>
        </ModalBody>
        <ModalFooter>
        
        <br></br>
        </ModalFooter>
       
      </Modal>
      </>
    )
  }
}

export default App;
