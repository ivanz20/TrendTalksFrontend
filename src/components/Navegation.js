import React, { Component } from 'react'
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import PopularPost from "./PopularPost";
import PopularHash from "./PopularHash";
import ForYou from "./ForYou";
import Home from "./Home";

export default class Navegation extends Component {
    
    render() {
        const tab = <>&nbsp;&nbsp;&nbsp;</>;

        return (

            <BrowserRouter>

                <div className="principal">
                    <div className="navbar-opciones">
                        <img id="logo-tt" src={logo} style={{ width: '15%' }}></img>
                        <input id="barra-buscar" placeholder="Buscar" />
                        <div id="home-navbar">
                            <FontAwesomeIcon icon={faHashtag} size="xl" color="#738386" />
                            <Link to="/ForYou" className="navbar-items">EXPLORAR</Link>
                        </div>

                    </div>
                    <div className="secundario">
                        <Button color="success" id="boton-iniciosesion" onClick={this.abrirModal}>INICIAR SESION</Button>
                        <br></br>
                        {tab}
                        <Button color="secondary" id="boton-registrarse" onClick={this.abrirModalRegistro}>REGISTRARSE</Button>
                    </div>
                </div>

                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/ForYou" element={<ForYou />} />
                    <Route path="/PopularHash" element={<PopularHash />} />
                    <Route path="/PopularPost" element={<PopularPost />} />
                </Routes>
            </BrowserRouter>

            
        )
    }
}
