import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment, faUnlock, faCircle } from '@fortawesome/free-solid-svg-icons'
import Shorts from "./Shorts";
import { axiosBase as axios } from "../config";

var flag = true;

export default class PopularPost extends Component {

    state = {
        posts: [],
    };

    render() {
        const { posts } = this.state;

        if (flag) {
            axios.get(`api/talkie`)
                .then((res) => {
                    console.log(res.data.posts)
                    this.setState({ posts: res.data.posts });
                })
                .catch((err) => {
                    alert('Usuario no existe');
                    console.log(err);
                })

            //flag = false
        }
        return (

            <div className="contenido-pagina">
                <Shorts />
                <div className="posts-tt">


                    {posts.map((post, index) => (
                        <div className="post-user" key={index}>
                            <div className="fotoarea">
                                <div className="fotoperfil-post"></div>
                            </div>
                            <div className="text-postarea">
                                <div className="post-content">
                                    <strong>{post.username} </strong>- {post.post_date}
                                    <br />
                                    {post.post_content}
                                    <br />
                                    {post.hashs.split(',').map((hash, hashIndex) => (
                                        <span key={hashIndex}>#{hash.trim()} </span>
                                    ))}
                                    <br />
                                    <button className="boton-post" id="likebtn">
                                        <FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C" }} />
                                    </button>
                                    <button className="boton-post">
                                        <FontAwesomeIcon icon={faComment} size="2xl" style={{ color: "#0CCA4A" }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}



                    {/* 
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
                                <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C", }} /></button>
                                <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{ color: "#0CCA4A", }} /></button>
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
                                <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C", }} /></button>
                                <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{ color: "#0CCA4A", }} /></button>
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
                                <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C", }} /></button>
                                <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{ color: "#0CCA4A", }} /></button>
                            </div>
                        </div>
                    </div>
                    */}

                </div>
            </div>
        )
    }
}