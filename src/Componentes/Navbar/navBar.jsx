import React from 'react'
import LogoPSI from '../../Assets/Escudo_PSI.png'
import { Link } from 'react-router-dom'


function navBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-success-subtle">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>PSI</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/acerca'}>Sobre PSI</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/contacto'}>Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/PSI'}>Sistema</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/GuiaDeUsuario'}>Guia de usuario PSI</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navBar