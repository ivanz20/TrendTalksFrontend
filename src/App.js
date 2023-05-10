import React, { useState, ChangeEvent } from "react";
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, List } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Display, SdCard, XCircle } from 'react-bootstrap-icons';
import imagen from './img/image1.jpeg';
import logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faImages, faClapperboard, faBell, faHouse} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import {uploadFile} from './firebase/config'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PopularPost from "./components/PopularPost";
import PopularHash from "./components/PopularHash";
import ForYou from "./components/ForYou";
import Home from "./components/Home";
import Navegation from "./components/Navegation";
import Comments from "./components/Comments";



class App extends React.Component {

  constructor(props){
    const iduser = localStorage.getItem("usuariologgeado");
    if(!iduser){
      localStorage.setItem("loggedin", "False");
    }
    super(props)

  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ name: "" });
    this.setState({ lastname: "" });
    this.setState({ username: "" });
    this.setState({ password: "" });
    this.setState({ birthday: "" });
    this.setState({ email: "" });
    this.setState({ hashs: "" });
    this.setState({ fotopost: "" });
    this.setState({ videopost: "" });


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
    }).then(function (response) {
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
    }).then(response => {
      return response.json();
    })
    .then(data => {
        if (data.ok == true) {
          console.log(data)
          localStorage.setItem("loggedin", "True");
          localStorage.setItem("usuariologgeado", data.usuario._id);
          localStorage.setItem("usernamelogged", data.usuario.username);
          this.setState({ username: data.usuario.username });
          document.getElementById("inputs-login1").value = "";
          document.getElementById("inputs-login2").value = "";
          this.setState({ loginModal: !this.state.loginModal });



        } else{
          document.getElementsByClassName("error-login").style.opacity = "100%";
        }
    });

    event.preventDefault();
  }

  CreatePost = (event) =>{
      var today = new Date().toJSON().slice(0, 10);
      let data = {
        "username": this.state.username,
        "post_content": this.state.comentario,
        "post_date": today,
        "hashs": this.state.hashs,
        "category": "idk",
        "likes": 0,
        "comments": 0,
        "photo_post": this.state.urlfoto,
        "video_post": "urlvideo",
        "user_profilepic": "urlpp",
      }
      fetch('https://trendtalks-service.onrender.com/api/talkie', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(data)
      }).then(function (response) {
        if(response.status == 200){
          alert("Publicacion Exitante " + "Status: " + response.status)

        }
        return response.json();
      });

      event.preventDefault();
  }
  state = {
    loginModal: false,
    RegisterModal: false,
    PublicacionModal: false,
    PerfilModal: false,
    name: "",
    lastname: "",
    username: "",
    password: "",
    birthday: "",
    email: "",
    urlfoto: ""
  }
  Publicacion = {
    comentario: ""
  }

  abrirModal = () => {
    this.setState({ loginModal: !this.state.loginModal });
  }
  abrirModalPublicacion = () => {
    this.setState({ PublicacionModal: !this.state.PublicacionModal });
  }
  abrirModalRegistro = () => {
    this.setState({ RegisterModal: !this.state.RegisterModal });
  }
  abrirModalPerfil = () => {
    this.setState({ PerfilModal: !this.state.PerfilModal });
  }

  subirarchivos = async (archivo) => {
    const result = await uploadFile(archivo)
    document.getElementById("foto-subir1").style.opacity = "100%";
    document.getElementById('foto-subir1').innerHTML = '<img src="' + result + '"></img>';
    this.setState({ urlfoto: result});

  }


  render() {

    const tab = <>&nbsp;&nbsp;&nbsp;</>;
    
    return (

      <>
        <BrowserRouter>

          <div className="principal">
            <div className="navbar-opciones">
              <img id="logo-tt" src={logo} style={{ width: '15%' }}></img>
              <input id="barra-buscar" placeholder="Buscar" />
              <Link id="home-navbar" to="/Explore">
                <FontAwesomeIcon icon={faHashtag} size="xl" color="#738386" />
                <text className="navbar-items">EXPLORAR</text>
              </Link>
              {localStorage.getItem("loggedin") !='False' ?  <Link id="inicio-navbar" to="/">
                <FontAwesomeIcon icon={faHouse} size="xl" color="#738386" />
                <text className="navbar-items">INICIO</text>
              </Link> : null}
             
              {localStorage.getItem("loggedin") !='False' ?  <Link id="notifications-navbar" to="/Notifiaciones">
                <FontAwesomeIcon icon={faBell} size="xl" color="#738386" />
                <text className="navbar-items">NOTIFICACIONES</text>
              </Link> : null}
             

            </div>
            <div className="secundario">

              {localStorage.getItem("loggedin") !='False' ? <Button color="success" id="boton-iniciosesion" onClick={this.abrirModalPublicacion}>PUBLICAR</Button> : null}
              
         
              {tab}
              {localStorage.getItem("loggedin") != 'True' ? <Button color="success" id="boton-iniciosesion" onClick={this.abrirModal}>INICIAR SESION</Button> : null}
            
            
              {tab}
              {localStorage.getItem("loggedin") != 'True' ? <Button color="secondary" id="boton-registrarse" onClick={this.abrirModalRegistro}>REGISTRARSE</Button> : null}
              
              {tab}
              {localStorage.getItem("loggedin") != 'False' ?<Button color="secondary" id="boton-perfil" onClick={this.abrirModalPerfil}>PERFIL</Button> : null}
              
            </div>
          </div>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Explore" element={<ForYou />} />
            <Route path="/ForYou" element={<ForYou />} />
            <Route path="/PopularHash" element={<PopularHash />} />
            <Route path="/PopularPost" element={<PopularPost />} />
            <Route path="/Comments" element={<Comments />} />
          </Routes>
        </BrowserRouter>


        <Modal isOpen={this.state.loginModal}>
          <ModalHeader>
            <XCircle color="#0CCA4A" size={30} onClick={this.abrirModal} />
            {tab}
            <text className="titulo-modal">INICIO DE SESIÓN</text>
          </ModalHeader>

          <ModalBody>
            <br></br>
            <form onSubmit={this.Login}>
              <FormGroup>
                <Input type="text" id="inputs-login1" name="usuario" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} placeholder="USUARIO" />
              </FormGroup>
              <br></br>
              <FormGroup>
                <Input type="password" id="inputs-login2" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="CONTRASEÑA" />
              </FormGroup>
              <br></br>
              <Button size="lg" block type="submit" id="btn-iniciosesion2" placeholder="Iniciar Sesión" >ENTRAR</Button>
              <small id="error-login" class="form-text text-muted">Error en credenciales, intente de nuevo.</small>

              <br></br>
            </form>

          </ModalBody>

          <ModalFooter>
            <img src={imagen} style={{ width: '98%' }}></img>
          </ModalFooter>

        </Modal>
        <Modal isOpen={this.state.PublicacionModal}>
          <ModalHeader>
            <XCircle color="#0CCA4A" size={30} onClick={this.abrirModalPublicacion} />
            {tab}
            <text className="titulo-modal"></text>
          </ModalHeader>

          <ModalBody>
            <br></br>
            <form >
              <FormGroup>
                <textarea type="text" id="text-post" name="publicacion" /*value={this.Publicacion.comentario}*/ onChange={(e) => this.setState({ comentario: e.target.value })} placeholder="Di lo que piensas..." /*contenteditable="true"*/ maxlength="150" rows={3} className="form-control" />
                <text style={{ color: "#b8b8b8", marginLeft:"85%", fontSize: 15 }}>150 MAX</text>
                <input id="text-hash" onChange={(e) => this.setState({ hashs: e.target.value })} style={{ color: "#b8b8b8", fontSize: 15,  }} placeholder="Agrega aqui tus etiquetas separadas por comas"></input>
              </FormGroup>
              <div style={{ height: "7%" }}>
                <label for="foto-adj">
                  <FontAwesomeIcon id="icon-pic" icon={faImages} size="2xl" style={{ color: "#0CCA4A", }} />
                </label>
                <input type="file" id="foto-adj" onChange={e =>this.subirarchivos(e.target.files[0])} accept=".jpg, .png, .jpeg"></input>
                <label for="video-adj">
                <FontAwesomeIcon  id="icon-vid" icon={faClapperboard} size="2xl" style={{ color: "#0CCA4A", }} />
                </label>
                <input type="file" id="video-adj" onChange={e => uploadFile(e.target.files[0])} accept=".mp4"></input>
                <select id="dropdowncategorias">
                  <option>Categoria 1</option>
                  <option>Categoria 2</option>
                  <option>Categoria 3</option>
                </select>
                <div id="foto-subir1"></div>

                <Button type="submit" onClick={this.CreatePost} id="btn-publicar" placeholder="Publicar">Hacer publicación</Button>

              </div>
              <br></br>
            </form>

          </ModalBody>


        </Modal>

        <Modal isOpen={this.state.RegisterModal}>
          <ModalHeader>
            <XCircle color="#0CCA4A" size={30} onClick={this.abrirModalRegistro} />
            {tab}
            <text className="titulo-modal">REGISTRO DE USUARIO</text>
          </ModalHeader>

          <ModalBody>
            <br></br>
            <form onSubmit={this.RegistrarUsuario}>
              <FormGroup >
                <Input type="text" name="nombres" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} placeholder="NOMBRE(S)" />
                <br></br>
                <Input type="text" name="apellidos" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} placeholder="APELLIDOS(S)" />
                <br></br>
                <Input type="text" name="usuario" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} placeholder="USUARIO" />
                <br></br>
                <Input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="EMAIL" />
                <br></br>
                <Input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="CONTRASEÑA" />
                <br></br>
                <label>
                  Fecha de Nacimiento:
                  <br></br>
                  <br></br>
                  <Input type="date" name="birth" value={this.state.birthday} onChange={(e) => this.setState({ birthday: e.target.value })} style={{ width: "466px" }}>
                  </Input>
                </label>
                <br></br>
                <br></br>
                <br></br>
                <Input type="submit" size="lg" value="REGISTRAR" id="btn-registro">Registrar usuario</Input>
              </FormGroup>
            </form>

            <br></br>

          </ModalBody>


        </Modal>

        <Modal isOpen={this.state.PerfilModal}>
          <ModalHeader>

            <div class="Imagen-Fondo">
              <XCircle color="white" size={30} onClick={this.abrirModalPerfil} />
              {tab}
              <text className="titulo-modal-perfil">NOMBRE DE USUARIO</text>
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
