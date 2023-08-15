import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../Assets/Images/Escudo_PSI.png'


function Index() {
  return (
    <div className='container shadow p-3 rounded '>
      <div className='row fw-bold'>
        <h1>Portable Seed Incubator PSI</h1>
      </div>
      <div className='row'>
        <p>
          La incubadora de semillas busca ser una de las soluciones al problema del desabasto de cosechas, disminuyendo el tiempo de necesario para germinacion de la semilla
        </p>
      </div>
      <div className=' row'>
        
        <img src={Logo}  alt='imagen de la incubadora' />
      </div>
      <div className='row fst-italic text-center'>
        <p>
          ¿Quieres saber mas acerca de PSI?
        </p>
      </div>
      <div className='text-center'>
        <Link className='btn btn-success rounded-pill shadow' to={'/PSI'}>Acerca del proyecto</Link>
      </div>
    </div>
  )
}

export default Index