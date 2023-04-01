import React, { Component } from 'react'
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUnlock, faCircle } from '@fortawesome/free-solid-svg-icons'

export default class ForYou extends Component {
    render() {
        return (
            <div className="contenido-pagina">
                <div className="exploreCont">
                    <div class="btn-group" role="group">
                        <Button id="boton-explore-use" onClick={this.abrirModal}>PARA TI</Button>
                        <Button id="boton-explore" onClick={this.abrirModal}>POPULARES</Button>
                    </div>
                    <br />
                    <br />
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorías
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Likes</a>
                            <a class="dropdown-item" href="#">Hash</a>
                        </div>
                    </div>
                    <text id='txt-categorias'><strong>Categorías</strong></text>
                </div>
                <div>

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
                                <text>Un saludo a la bandita q la sigue cotorriando</text>
                                <br></br>
                                <text>#Cotorro #GPI </text>
                                <br></br>
                                <button className="boton-post"><FontAwesomeIcon icon={faUnlock} size="2xl" style={{ color: "#0CCA4A", }} /></button>

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
                                <button className="boton-post"><FontAwesomeIcon icon={faUnlock} size="2xl" style={{ color: "#0CCA4A", }} /></button>

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
                                <button className="boton-post"><FontAwesomeIcon icon={faUnlock} size="2xl" style={{ color: "#0CCA4A", }} /></button>

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
                                <button className="boton-post"><FontAwesomeIcon icon={faUnlock} size="2xl" style={{ color: "#0CCA4A", }} /></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
