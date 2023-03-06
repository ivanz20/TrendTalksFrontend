import React, { useState } from "react";
import './App.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { XCircle } from 'react-bootstrap-icons';
import imagen from './img/image1.jpeg';




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
      fetch('https://trendtalks.onrender.com/api/users/', {
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
    fetch('https://trendtalks.onrender.com/api/users/login', {
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
    name:"",
    lastname:"",
    username:"",
    password:"",
    birthday:"",
    email:""
  }


  abrirModal=()=>{
    this.setState({loginModal: !this.state.loginModal});
  }
  
  abrirModalRegistro=()=>{
    this.setState({RegisterModal: !this.state.RegisterModal});
  }


  render(){
    /*
    const modalStyles={
      position: "absolute",
      top:"50%",
      left:"50%",
      transform: "translate(-50%, -50%)"
    }
    */
    const tab = <>&nbsp;&nbsp;&nbsp;</>;

    return(
      <>
      <div className="principal">
        <div className="secundario">
          <Button color="success" onClick={this.abrirModal}>Iniciar Sesión</Button>
          {tab}
          <Button color="secondary" onClick={this.abrirModalRegistro}>Registrarse</Button>
        </div>
      </div>

      <Modal isOpen={this.state.loginModal}>
        <ModalHeader>
          <XCircle color="#0CCA4A" size={30} onClick={this.abrirModal}/>
          {tab}INICIO DE SESIÓN
        </ModalHeader>

        <ModalBody>
          <br></br>

          <form onSubmit={this.Login}>
            <FormGroup>
            <Input type="text" name="usuario" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} placeholder="USUARIO"/>
            </FormGroup>
            <br></br>
            <FormGroup>
            <Input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} placeholder="CONTRASEÑA"/>
            </FormGroup>
            <br></br>
            <Button color="success" size="lg" block type="submit">Iniciar Sesión</Button>
          </form>
        
        </ModalBody>

        <ModalFooter>
          <img src={imagen} style={{width:'98%'}}></img>
        </ModalFooter>
        
      </Modal>

      <Modal isOpen={this.state.RegisterModal}>
        <ModalHeader>
          <XCircle color="green" size={30} onClick={this.abrirModalRegistro}/>
          {tab}REGISTRO DE USUARIO
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
            <Input type="submit" color="green" size="lg"  >Registrar usuario</Input>
          </FormGroup>
          </form>
        
          <br></br>
          
        </ModalBody>

       
      </Modal>

      </>
    )
  }
}

export default App;
