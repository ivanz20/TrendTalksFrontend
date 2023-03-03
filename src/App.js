import React from 'react';
import './App.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { XCircle } from 'react-bootstrap-icons';
import imagen from './img/image1.jpeg';

class App extends React.Component{
  state={
    loginModal: false,
  }
  state={
    RegisterModal: false,
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
          <FormGroup>
            <Input type="text" id="username" placeholder="USUARIO"/>
          </FormGroup>
          <br></br>
          <FormGroup>
            <Input type="password" id="password" placeholder="CONTRASEÑA"/>
          </FormGroup>
          <br></br>
          <Button color="success" size="lg" block>Iniciar Sesión</Button>
          
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
          <FormGroup>
            <Input type="text" id="registro_nombre" placeholder="NOMBRE(S)"/>
            <br></br>
            <Input type="text" id="registro_apellido" placeholder="APELLIDOS(S)"/>
            <br></br>
            <Input type="text" id="registro_usuario" placeholder="USUARIO"/>
            <br></br>
            <Input type="password" id="registro_password" placeholder="CONTRASEÑA"/>
            <br></br>
            <Input type="password" id="registro_password" placeholder="CONTRASEÑA"/>
            <br></br>
            <label>
              Fecha de Nacimiento:
              <br></br>
              <br></br>
              <Input type="date" name="registro_nacimiento"  style={{width: "450px"}}>
              </Input>
            </label>
          </FormGroup>
          
          <br></br>
          <Button color="success" size="lg" block>Registro de usuario</Button>
          
        </ModalBody>

        {/* <ModalFooter>
          <img src={imagen} style={{width:'98%'}}></img>
        </ModalFooter>
         */}
      </Modal>

      </>
    )
  }
}

export default App;
