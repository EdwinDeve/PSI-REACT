import React from 'react';

import Arduino1 from '../../Assets/Images/GuiaDeUsuario/002.png'

import Frontal from '../../Assets/Images/GuiaDeUsuario/Frontal.png'
import Bomba from '../../Assets/Images/GuiaDeUsuario/Bomba de awa.png'
import Riego from '../../Assets/Images/GuiaDeUsuario/Tierra y tuberias.png'
import Calefaccion from '../../Assets/Images/GuiaDeUsuario/Iluminacion.png'

function UserGuide() {
  return (
    <div className="container">
      <br />

      <div className="container text-center">
        <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
          Guia de usuario
        </label>
      </div>

      <div className="container shadow p-3 rounded">
        <a data-bs-toggle="collapse" href="#Herramientas" role="button">
          <label style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>
            &raquo; Herramientas necesarias
          </label>
        </a>

        <div className="collapse" id="Herramientas">
          <div className="container">
            <div>
              <br />
              <label>
                Por el momento para controlar la incubadora es necesario contar con el IDE de aruino, aqui se modificaran los parametros para los diferentes tipos de plantas que se van a monitorear dentro esta.
              </label>
              <br />
              <div className="container text-center">
                <img src="~/Assets/Images/GuiaDeUsuario/001.png" alt="Arduino_IDE" width="190" />
              </div>
              <div className="container text-center">
                <img src={Arduino1} alt="Arduino_IDE" width="700" />
              </div>
            </div>
            <br />
            <div>
              <label>
                Obligatoriamente necesitas la incubadora por obvias razones
              </label>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="container shadow p-3 rounded">
        <a data-bs-toggle="collapse" href="#ArduinoIDE" role="button">
          <label style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>
            &raquo; Arduino IDE
          </label>
        </a>

        <div className="collapse" id="ArduinoIDE">
          <div className="container">
            <br />
            <label>
              Para poder modificar los parametros para los diferentes tipos de plantas que puede germinar la incubadora, es necesario saber que planta es la que se va a incubar, para asi poder saber
              que dato se va a cambiar dentro del arduino IDE
            </label>
            <br />
            <br />
            <label>
              Dentro del codigo de arduino IDE encontraremos estos dos parametros t y h los cuales son las lecturas de temperatura y humedad respectivamente.
            </label>
            <br />
            <code>
              float t = dht.readTemperature();<br />
              float h = dht.readHumidity();
            </code>
            <br />
            <br />
            <label>
              Mas adelante del codigo encontraremos 3 condicionales los cuales controlan cada componente de el sistema con base a sus lecturas
            </label>

            <br />
            <br />
            <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Control de la calefaccion
            </label>
            <br />
            <label>La siguinete condicional dice que si la temperatura es menor a 25°C se encendera el sistema de calefacion hasta que la temperatura suba</label>
            <br />
            <code>
              if (t &lt;= 25)<br />
              digitalWrite(led, HIGH);<br />
              else<br />
              digitalWrite(led,LOW);<br />
              <br />
            </code>

            <br />
            <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Alerta de temperatura
            </label>
            <br />
            <label>La siguinete condicional dice que si la temperatura es mayor a 25°C se encendera el sistema de alerta de temperatura alta y el sistema de ventilacion comenzara a funcionar</label>
            <br />
            <code>
              if (t &gt;= 25)<br />
              digitalWrite(zumb,HIGH);<br />
              tone(zumb, 3000, 200);<br />
              delay(50);<br />
              digitalWrite(zumb,LOW);<br />
              delay(50);<br />
              else <br />
              digitalWrite(zumb,LOW);<br />
            </code>

            <br />
            <br />
            <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Sistema de riego
            </label>
            <br />
            <label>La siguinete condicional dice que si la humedad llega a niveles criticos el sistema de irrigacion se activara</label>
            <br />
            <code>
              if (h &lt;= 100)<br />
              digitalWrite(bomba, HIGH);<br />
              else<br />
              digitalWrite(bomba,LOW);<br />
              
            </code>

            <br />
            <br />
            <label>
              Como se puede ver el sistema funciona a base las lecturas de temperatura y humedad <strong>t</strong> y <strong>h</strong>
              asi que para adecuar el funcionamiento de la incubadora a las plantas se deben de cambiar los valores de comparacion en las condicionales que mostramos enteriormente
            </label>


            <br />
            <br />
            <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Ejemplo
            </label>
            <br />
            <label>Para cambiar la humedad minima a la que se activara el sistema de irrigacion cambiaremos el valor de comparacion</label>
            <br />
            <label>Humedad minima para activarse = 100</label>
            <br />
            <code>
              if (h &lt;= 100)<br />
            </code>
            <br />
            <label>Humedad minima para activarse = 40</label>
            <br />
            <code>
              if (h &lt;= 40)<br />
            </code>

          </div>
        </div>

      </div>

      <br />

      <div className="container shadow p-3 rounded">
        <a data-bs-toggle="collapse" href="#Incubadora" role="button">
          <label style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>
            &raquo; Incubadora
          </label>
        </a>

        <div className="collapse" id="Incubadora">

          <div className="container">
            <br />
            <div className='container'>
            <label className='fw-bold'>
              La incubadora consta de muchas partes
            </label>
            </div>
            <br />
            <div className="container">
              <div >
                <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Vista Frontal de la incubadora
                </label>
                <br />
                <div className='row mx-auto'>
                <img src={Frontal} alt="Parte de la incubadora" width="800" />
                </div>
                <br />
                <label>Se muetsra la vista frontal de la incubadora, como se ve en la imagen el cuerpo de la incubadora consta de dos partes que se desacoplan, el cuerpo de la incubadora y la tapa</label>

              </div>
              <br />
              <div >
                <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Bomba de agua
                </label>
                <br />
                <div className='row mx-auto'>
                <img src={Bomba} alt="Parte de la incubadora" width="800" />
                </div>
                <br />
                <label>La bomba de agua se activa siguiendo la logica que se mostro en la seccion de la explicacion del codigo</label>
              </div>
              <br />
              <div >
                <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Sistema de riego y ventilacion
                </label>
                <br />
                <div className='row mx-auto'>
                <img src={Riego} alt="Parte de la incubadora" width="800" />
                </div>
                <br />
                <label>Se muestra como esta la distribucion de las tuberias de riego, y el acceso para la ventilacion, ambos se activan siguiendo la logica que se mostro en la seccion de la explicacion del codigo</label>
              </div>
              <br />
              <div >
                <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Sistema de calefaccion
                </label>
                <br />
                <div className='row mx-auto'>
                <img src={Calefaccion} alt="Parte de la incubadora" width="800" />
                </div>
                <br />
                <label>Como se puede observar el sistema de calefacicon funciona por medio de una bombilla la cual se activa siguiendo la logica que se mostro en la seccion de la explicacion del codigo</label>
              </div>
              <br />
            </div>

          </div>
        </div>

      </div>

      <br />
    </div>
  );
};

export default UserGuide;
