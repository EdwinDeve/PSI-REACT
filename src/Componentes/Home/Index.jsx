import React from 'react'
import { Link } from 'react-router-dom'

import CajaFuncional from '../../Assets/Images/Incubadora_Funcional.png'


function Index() {
  return (
    <div className='container shadow p-3 rounded text-center'>
      <div className='row'>
        <h1>Portable Seed Incubator PSI</h1>
      </div>
      <div className='row'>
        <p>
          La incubadora de semillas busca ser una de las soluciones al problema del desabasto de cosechas, disminuyendo el tiempo de necesario para germinacion de la semilla
        </p>
      </div>
      <div className=' row'>
        <img src={CajaFuncional}  alt="image de la incubadora" />
      </div>
      <div className='row fst-italic'>
        <p>
          ¿Quieres saber mas acerca de PSI?
        </p>
      </div>
      <div className='col-sm-2 mx-auto'>
        <Link className='btn btn-success rounded-pill shadow' to={'/contacto'}>Acerca del proyecto</Link>
      </div>
    </div>
  )
}

export default Index