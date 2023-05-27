import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment, faUnlock, faCircle,faLock } from '@fortawesome/free-solid-svg-icons'
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
                    //validacion con backend de seguimiento
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
                                    <br />
                                    {post.photo_post.length  > 10 && <img src={post.photo_post} width={"200px"}></img> }
                                    {localStorage.getItem("loggedin") == true && <button className="boton-post" id="likebtn"><FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#CA0C0C" }} /></button>}
                                    {localStorage.getItem("loggedin") == true && <button className="boton-post"><FontAwesomeIcon icon={faComment} size="2xl" style={{ color: "#0CCA4A" }} /></button>}
                                    {!!localStorage.getItem("loggedin")  && <button className="boton-post"><FontAwesomeIcon icon={faLock} size="2xl" style={{color: "#858585",}} /></button>}
                                </div>
                            </div>
                        </div>
                    ))}



                </div>
            </div>
        )
    }
}