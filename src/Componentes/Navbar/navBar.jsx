import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from "react-icons/fi";

import Home from '../../Assets/Images/Escudo_PSI.png'

function navBar() {
    return (

        <nav className="navbar navbar-expand-lg shadow fw-bold" style={{backgroundColor: "darkkhaki"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <h1><FiHome></FiHome></h1>
                    {/* <img src={Home} width={58} alt="Escudo de PSI" /> */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Inicio</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link link-light" to={'/acerca'}>Sobre PSI</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-light" to={'/PSI'}>Sobre el Sistema</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-light" to={'/GuiaDeUsuario'}>Guia de usuario PSI</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-light" to={'/contacto'}>Contactanos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navBar