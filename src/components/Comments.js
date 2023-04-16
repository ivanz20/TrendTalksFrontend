import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment, faUnlock, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, List } from 'reactstrap';

export default class PopularPost extends Component {
    render() {
        return (

            <div className="contenido-pagina">
                <text className="pregunta-shortalk">¿Que opinas de la inflación?</text>
                <div className="shorttalks">

                    <div className="friends-short user">
                        <div className="fotoperfil isShortUpload"></div>
                        <text className="nombre-short">Agregar</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend isShortUpload"></div>
                        <text className="nombre-short">faribb10</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend isShortUpload"></div>
                        <text className="nombre-short">user1</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend isShortUpload"></div>
                        <text className="nombre-short">user2</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend isShortUpload"></div>
                        <text className="nombre-short">user3</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend isShortUpload"></div>
                        <text className="nombre-short">user4</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend isShortUpload "></div>
                        <text className="nombre-short">user2</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend isShortUpload "></div>
                        <text className="nombre-short">user3</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user4</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user2</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user3</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user4</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user2</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user3</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user4</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user2</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user3</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user4</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user2</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user3</text>
                    </div>
                    <div className="friends-short">
                        <div className="fotoperfil-friend "></div>
                        <text className="nombre-short">user4</text>
                    </div>

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
                                <text>Q ganas de una caguama elada  caguama eladaQ ganas de una caguama elada</text>
                                <br></br>
                                <text>#Tecate #Helado</text>
                                <br></br>
                                <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C", }} /></button>
                                <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{ color: "#0CCA4A", }} /></button>
                            </div>
                        </div>
                    </div>


                    <div className="comment-user">
                        <div className="fotoarea">
                            <div className="fotoperfil-comment "></div>
                        </div>
                        <div className="text-postarea">
                            <div className="post-content">
                                <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                                <br></br>
                                <text>Un saludo a la bandita q la sigue cotorriando</text>
                                <button className="boton-post" id="likeCommentbtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C", }} /></button>
                            </div>
                        </div>
                    </div>

                    <div className="comment-user">
                        <div className="fotoarea">
                            <div className="fotoperfil-comment "></div>
                        </div>
                        <div className="text-postarea">
                            <div className="post-content">
                                <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                                <br></br>
                                <text>Un saludo a la bandita q la sigue cotorriando</text>
                                <button className="boton-post" id="likeCommentbtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C", }} /></button>
                            </div>
                        </div>
                    </div>

                    <div className="comment-user">
                        <div className="fotoarea">
                            <div className="fotoperfil-comment "></div>
                        </div>
                        <div className="text-postarea">
                            <div className="post-content">
                                <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                                <br></br>
                                <text>Un saludo a la bandita q la sigue cotorriando</text>
                                <button className="boton-post" id="likeCommentbtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C", }} /></button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="comment-user">
                        <div className="fotoarea">
                            <div className="fotoperfil-comment "></div>
                        </div>
                        <div className="text-postarea">
                            <div className="post-content">
                                <text><strong>@Oscarin21 </strong>- Hace 10 minutos</text>
                                <br></br>
                                <text>Un saludo a la bandita q la sigue cotorriando</text>
                                <button className="boton-post" id="likeCommentbtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C", }} /></button>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>
                </div>

                <form className="comment-post">
                    <input type="text" placeholder="Escribe aquí tu opinión..." id="txt-comment" />
                    <input type="submit" size="lg" value="COMENTAR" id="btn-comment" />
                </form>

            </div>
        )
    }
}