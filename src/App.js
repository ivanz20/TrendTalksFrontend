import React, { useState, ChangeEvent } from "react";
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, List } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Display, SdCard, XCircle } from 'react-bootstrap-icons';
import imagen from './img/image1.jpeg';
import logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faImages, faClapperboard} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PopularPost from "./components/PopularPost";
import PopularHash from "./components/PopularHash";
import ForYou from "./components/ForYou";
import Home from "./components/Home";
import Navegation from "./components/Navegation";
import Comments from "./components/Comments";


class App extends React.Component {


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ name: "" });
    this.setState({ lastname: "" });
    this.setState({ username: "" });
    this.setState({ password: "" });
    this.setState({ birthday: "" });
    this.setState({ email: "" });

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
    }).then(function (response) {
      if (response.status == 400) {
        alert("El usuaro no esta registrado " + "Status: " + response.status)
      } else {
        alert("El usuario inicio sesion " + "Status: " + response.status)
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
    email: ""
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
                <Input type="text" name="usuario" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} placeholder="USUARIO" />
              </FormGroup>
              <br></br>
              <FormGroup>
                <Input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="CONTRASEÑA" />
              </FormGroup>
              <br></br>
              <Button size="lg" block type="submit" id="btn-iniciosesion2" placeholder="Iniciar Sesión" >ENTRAR</Button>
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
                <textarea type="text" name="publicacion" /*value={this.Publicacion.comentario}*/ onChange={(e) => this.setState({ comentario: e.target.value })} placeholder="Di lo que piensas..." /*contenteditable="true"*/ maxlength="150" rows={3} className="form-control" />
                <text style={{ color: "#b8b8b8", marginLeft:"85%", fontSize: 15 }}>150 MAX</text>
              </FormGroup>
              <br></br>
              <div style={{ height: "7%" }}>
                <button className="boton-post" title="Foto"><FontAwesomeIcon icon={faImages} size="2xl" style={{ color: "#0CCA4A", }} /></button>
                <button className="boton-post" title="Video"><FontAwesomeIcon icon={faClapperboard} size="2xl" style={{ color: "#0CCA4A", }} /></button>
                <Button type="submit" id="btn-publicar" placeholder="Publicar" >Hacer publicación</Button>
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
