import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { XCircle } from 'react-bootstrap-icons';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faImages, faClapperboard, faPlay, faPause, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import Vid1 from "../Life.mp4";
import Vid2 from "../videos/1.mp4";
import Vid3 from "../videos/2.mp4";
import Vid4 from "../videos/3.mp4";

import "../Shorts.css";

// SWIPER
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Shorts extends React.Component {

    state = {
        shortModal: false
    }

    abrirModalShort = () => {
        this.setState({ shortModal: !this.state.shortModal });
    }

    render() {
        const videos = [
            {
                url: Vid1,
                usuario: "@USUARIO1",
            },
            {
                url: Vid2,
                usuario: "@USUARIO2",
            },
            {
                url: Vid3,
                usuario: "@USUARIO3",
            },
            {
                url: Vid4,
                usuario: "@USUARIO4",
            },
        ];

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            beforeChange: (current, next) => {
                const video = document.querySelector(`#video-${current}`);
                if (video) {
                    video.pause();
                }
            },
            afterChange: (current) => {
                const video = document.querySelector(`#video-${current}`);
                if (video) {
                    video.play();
                }
            },
        };

        return (

            <>
                <text className="pregunta-shortalk">¿Que opinas de la inflación?</text>
                <div className="shorttalks">

                    <div className="friends-short user">
                        <div className="fotoperfil isShortUpload"></div>
                        <text className="nombre-short">Agregar</text>
                    </div>

                    <div className="friends-short" onClick={this.abrirModalShort}>
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
                <Modal isOpen={this.state.shortModal} className="modal-content-shorts">
                    <ModalHeader>
                        <Link to="/">
                            <XCircle color="#fff" size={30} onClick={this.abrirModalShort} className="svg-shorts" />
                        </Link>
                    </ModalHeader>
                    <div class="cont-slider">
                        <Slider {...settings}>
                            {videos.map((video, index) => (
                                <div key={index}>
                                    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
                                        <video
                                            src={video.url}
                                            controls
                                            id={`video-${index}`}
                                            onEnded={() => {
                                                const nextIndex = index + 1 < videos.length ? index + 1 : 0;
                                                Slider.slickGoTo(nextIndex);
                                            }}
                                            style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto"}}
                                        />
                                    </div>
                                    <div style={{ position: "absolute", top: 50, padding: "15px" }}>
                                        <a style={{ color: "white", float: "left", fontFamily: "Montserrat", fontWeight: 600 }}>
                                            {video.usuario}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div >
                </Modal >


            </>
        )
    }
}

export default Shorts;
