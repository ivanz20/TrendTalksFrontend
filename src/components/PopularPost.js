import React, { Component, useState, useEffect, useRef } from 'react'
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUnlock, faCircle, faHeart } from '@fortawesome/free-solid-svg-icons'

export default class PopularPost extends Component {
    render() {
        return (
            <div className="contenido-pagina">
                <div className="exploreCont">
                    <div class="btn-group" role="group">
                        <Button id="boton-explore" href="/ForYou">PARA TI</Button>
                        <Button id="boton-explore-use" href="/PopularPost">POPULARES</Button>
                    </div>
                    <br />
                    <br />
                    <select id="dropdowncategorias2" onChange={(event) => { this.CargarPublicaciones()}} >
                        <option>Likes</option>
                        <option>Hashs</option>
                </select>
                </div>
                <div>

                </div>
                <div className="posts-tt" id='likes-posts'>

                    <div>
                    <div>
                        <FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C", }} />
                        <text id='txt-num-likes'><strong>  102  </strong></text>
                        <text><strong>  LIKES  </strong></text>
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
            <DropdownToggle caret>Likes</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Filtros</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/PopularPost">Likes</DropdownItem>
                <DropdownItem href="/PopularHash">Hashs</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
