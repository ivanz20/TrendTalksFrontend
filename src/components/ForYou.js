import React, { Component, useState, useEffect, useRef } from 'react'
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUnlock, faCircle } from '@fortawesome/free-solid-svg-icons'

export default class ForYou extends Component {
    render() {
        return (
            <div className="contenido-pagina">
                <div className="exploreCont">
                    <div class="btn-group" role="group">
                        <Button id="boton-explore-use" href="/ForYou">PARA TI</Button>
                        <Button id="boton-explore" href="/PopularPost">POPULARES</Button>
                    </div>
                    <br />
                    <br />
                    <DropdownFun></DropdownFun>
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

function DropdownFun() {

    const [dropdown, setDropdown] = useState(false);

    const abrirCerrarDropdown = () => {
        setDropdown(!dropdown);
    }

    return (

        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} >
            <DropdownToggle caret>Deportes</DropdownToggle>
            <DropdownMenu>
                <DropdownItem href="">Deportes</DropdownItem>
                <DropdownItem href="">Entretenimiento</DropdownItem>
                <DropdownItem href="">Noticias</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
