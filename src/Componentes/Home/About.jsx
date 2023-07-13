import React from 'react'

import CajaFuncional from '../../Assets/Images/Incubadora_Funcional.png'

function About() {
  return (
    <div className='container'>

      <div className='shadow p-3'>
      <div className='row'>
        <h1>Portable Seed Incubator PSI</h1>
      </div>
      <div className='row'>
        <p>
          Esta idea surge con el propósito de hacer un invernadero en el cual se plantarán semillas seleccionadas que presentan un crecimiento lento en este tipo de región ya que la planta tarda en romper el cascaron que lo rodea. La incubadora nos permitirá tener un constante cuidado para la rapida germinacion de las semillas y ser auto suficiente con la minima intervencion humana.
        </p>
      </div>
      <div className='row'>
      <img src={CajaFuncional}  alt='imagen de la incubadora' />
      </div>
      <div className='row fst-italic'>
        <p>
          Primer prototipo del proyecto PSI
        </p>
      </div>
      </div>

      <br />

      {/* //////////////////////////////////// */}


      <div className="shadow">
        <br />
        <div className="container text-center">
          <label >
            Mision, Vision y Valores
          </label>
        </div>
        <div className="container ">

          <div className="accordion " id="AcordionPSI">

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Misión
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#AcordionPSI">
                <div class="accordion-body">
                  <p>
                    Ayuda a las personas a ahorrar tiempo, dinero y esfuerzo en la produccion de brotes de semillas y a la terraformacion de areas deforestadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Vision
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#AcordionPSI">
                <div class="accordion-body">
                  <p>
                    Implementar tecnologias de mejor calidad para obtener resultados mas eficientes en un futuro y nuevas funciones para el envio de datos al usuario.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Valores
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#AcordionPSI">
                <div className="accordion-body">
                  <p>
                    <strong>
                      Responsabilidad:
                    </strong>
                    El equipo de trabajo se compromete a ser responsable con los recursos que manejan y con el medio ambiente
                  </p>
                  <p>
                    <strong>
                      Productividad:
                    </strong>
                    El equipo de trabajo se compromete a entregar resultados en tiempo y forma y de buena calidad
                  </p>
                  <p>
                    <strong>
                      Solidaridad:
                    </strong>
                    El equipo de trabajo sera solidario con los integrantes del mismo y con los usuarios
                  </p>
                  <p>
                    <strong>
                      Confianza:
                    </strong>
                    El equipo de trabajo se compromete a entregar soluciones y productos de confianza
                  </p>
                  <p>
                    <strong>
                      Eficiencia:
                    </strong>
                    El equipo de trabajo sera eficiente en la entregar resultados
                  </p>
                  <p>
                    <strong>
                      Eficacia:
                    </strong>
                    El equipo de trabajo entregara resultados eficaces
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <br />
      </div>


    </div>
  )
}

export default About