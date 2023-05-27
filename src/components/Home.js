import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment, faUnlock, faCircle,faLock } from '@fortawesome/free-solid-svg-icons'
import Shorts from "./Shorts";
import { axiosBase as axios } from "../config";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, List } from 'reactstrap';

import { Display, SdCard, XCircle } from 'react-bootstrap-icons';

var flag = true;

export default class PopularPost extends Component {

    state = {
        posts: [],
        PerfilModal2: false,

    };
    


    VerPerfilUsuario = async (username) => {
            await axios
              .get('https://trendtalks-service.onrender.com/api/users/perfil/' + username)
              .then(function (response) {
                var data = response.data
                localStorage.setItem("nameclick",data[0].name)
                localStorage.setItem("usernameclick",data[0].username)
                localStorage.setItem("idclick",data[0]._id)
               
              })
    }

    follow = () => {

    }

    
    abrirModalPerfil2 = (user) => {
        this.VerPerfilUsuario(user)
        this.setState({ PerfilModal2: !this.state.PerfilModal2 });
      }

    render() {
        const tab2 = <>&nbsp;&nbsp;&nbsp;</>;

        const { posts } = this.state;

        if (flag) {
            axios.get(`api/talkie`)
                .then((res) => {
                    //validacion con backend de seguimiento
                    this.setState({ posts: res.data.posts });
                })
                .catch((err) => {
                })

            //flag = false
        }
        return (

            <div className="contenido-pagina">
                <Shorts />
                <div className="posts-tt">


                    {posts.map((post, index) => (
                        <div className="post-user" key={index}>
                            <div className="fotoarea"  onClick={() => this.abrirModalPerfil2(this.VerPerfilUsuario(post.username))}>
                                <div className="fotoperfil-post"></div>
                            </div>
                            <div className="text-postarea">
                                <div className="post-content">
                                    <strong>{post.username} </strong>- {post.post_date}
                                    <br />
                                    {post.post_content}
                                    <br />
                                    {post.hashs.split(',').map((hash, hashIndex) => (
                                        <span key={hashIndex}>{hash.trim()} </span>
                                    ))}
                                    <br />
                                    <br />
                                    {post.photo_post.length  > 10 && <img src={post.photo_post} width={"200px"}></img> }
                                    {localStorage.getItem("loggedin") == "True" && <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C" }} /></button>}
                                    {localStorage.getItem("loggedin") == "True" && <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{ color: "#0CCA4A" }} /></button>}
                                    {localStorage.getItem("loggedin")== 'False' && <button className="boton-post"><FontAwesomeIcon icon={faLock} size="2xl" style={{color: "#858585",}} /></button>}
                                </div>
                            </div>
                        </div>
                    ))}



                </div>
                <Modal isOpen={this.state.PerfilModal2} className="perfil-cuadro" >
                    <ModalHeader style={{backgroundColor: "black"}}>

                        <div id="perfil-user">
                            <XCircle color="white" size={20} onClick={this.abrirModalPerfilotro2Perfil2} />
                            {tab2}
                            <text className="titulo-modal-perfil">{localStorage.getItem("nameclick")}</text>
                            <text className="Subtitulo-modal">{localStorage.getItem("usernameclick")}</text>
                            <div className="friends-short">
                            <div className="fotoperfil-friend isShortUpload Perfil-perfil"></div>
                            <text className="nombre-short"></text>
                            <Button color="success" id="boton-follow" onClick={()=>this.follow(localStorage.getItem("usernameclick"))} >Seguir</Button>
                        </div>

                        </div>
                    </ModalHeader>
                </Modal>

            </div>
            
        )
    }
}