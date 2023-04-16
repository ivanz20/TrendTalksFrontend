import React, { Component, useState, useEffect, useRef } from 'react'
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUnlock, faCircle } from '@fortawesome/free-solid-svg-icons'

export default class PopularHash extends Component {
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
          <DropdownFun></DropdownFun>
        </div>
        <div>

        </div>
        <div className="posts-tt">

          <div className="post-user">
            <div className="cont-hash">
              <div id="txt-hash">
                <text><strong>#HOLA</strong></text>
              </div>
            </div>
            <div className="text-postarea">
              <div className="hash-content">
                <br></br>
                <text><strong>1- Trend Talk</strong></text>
                <br></br>
                <text>1950 posts</text>
              </div>
            </div>
          </div>

          <div className="post-user">
            <div className="cont-hash">
              <div id="txt-hash">
                <text><strong>#FCFM</strong></text>
              </div>
            </div>
            <div className="text-postarea">
              <div className="hash-content">
                <br></br>
                <text><strong>2- Trend Talk</strong></text>
                <br></br>
                <text>1950 posts</text>
              </div>
            </div>
          </div>

          <div className="post-user">
            <div className="cont-hash">
              <div id="txt-hash">
                <text><strong>#LMAD</strong></text>
              </div>
            </div>
            <div className="text-postarea">
              <div className="hash-content">
                <br></br>
                <text><strong>3- Trend Talk</strong></text>
                <br></br>
                <text>1950 posts</text>
              </div>
            </div>
          </div>

          <div className="post-user">
            <div className="cont-hash">
              <div id="txt-hash">
                <text><strong>#HOLA</strong></text>
              </div>
            </div>
            <div className="text-postarea">
              <div className="hash-content">
                <br></br>
                <text><strong>4- Trend Talk</strong></text>
                <br></br>
                <text>1950 posts</text>
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
      <DropdownToggle caret>Hashs</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Filtros</DropdownItem>
        <DropdownItem divider />
        <DropdownItem href="/PopularPost">Likes</DropdownItem>
        <DropdownItem href="/PopularHash">Hashs</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

