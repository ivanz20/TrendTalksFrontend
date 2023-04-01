import React, { Component } from 'react'
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUnlock, faCircle } from '@fortawesome/free-solid-svg-icons'

export default class PopularHash extends Component {
    render() {
      return (
          <div className="contenido-pagina">
          <div className="exploreCont">
            <div class="btn-group" role="group">
              <Button id="boton-explore" >PARA TI</Button>
              <Button id="boton-explore-use" >POPULARES</Button>
            </div>
            <br />
            <br />
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hash
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Likes</a>
                <a class="dropdown-item" href="#">Hash</a>
              </div>
            </div>
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
  