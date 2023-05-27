import React, { Component, useState, useEffect, useRef } from 'react'
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUnlock, faCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

let config = {
    headers : {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    }
  }


export default class ForYou extends Component {



    CargarCategorias = async (event) => {
       await axios
      .get('https://trendtalks-service.onrender.com/api/categories')
      .then(function (response) {
        var data = JSON.stringify(response.data)
        var categories = JSON.parse(data)
        var up = document.getElementById("dropdowncategorias2");
        for (var i in categories) {
          var opt = document.createElement("option")
          opt.value = categories[i]["categoria"]
          opt.innerHTML = "<option>" + categories[i]["categoria"] + "</option>"
          up.appendChild(opt)
        }

      })
    }

    CargarPublicaciones =  () => {
        var Category = document.getElementById("dropdowncategorias2").value
         axios.post("https://trendtalks-service.onrender.com/api/categories/filtro",{
            categoria : Category
        },config)
        .then(function (response){
            const posts =  response.data.posts;
            var clasepost = document.getElementById("posttt")
            clasepost.innerHTML=""
            for(var i in posts){
                var opt = document.createElement("div")
                opt.className = "post-user"
                opt.innerHTML = '<div class="fotoarea"><div class="fotoperfil-post "></div></div><div class="text-postarea"><div class="post-content"><text><strong>@' + posts[i]["username"]+'</strong>- '+ posts[i]["post_date"]+'</text><br></br><text>'+ posts[i]["post_content"]+'</text><br></br><text>'+posts[i]["hashs"]+'</text><br></br><button class="boton-post"></button></div></div>'
                clasepost.appendChild(opt)
            }
            
        })
    }


    render() {

        
        return (
            <div className="contenido-pagina" onLoad={this.CargarCategorias()}>
                <div className="exploreCont">
                    <div class="btn-group" role="group">
                        <Button id="boton-explore-use" href="/ForYou">PARA TI</Button>
                        <Button id="boton-explore" href="/PopularPost">POPULARES</Button>
                    </div>
                    <br />
                    <br />
                    <select id="dropdowncategorias2" onChange={(event) => { this.CargarPublicaciones()}} >
                </select>
                    <text id='txt-categorias'><strong>Categorías</strong></text>
                </div>
                <div>

                </div>
                <div className="posts-tt" id="posttt">


                    

                    

                </div>
            </div>
        )
    }
}

