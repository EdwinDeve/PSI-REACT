import React from 'react'
import PlantaCafe from '../../Assets/Images/cscs.jpg'

function System() {
  return (

    <div>

    

    <div className='container shadow p-3 rounded'>

      <div className='row'>
      <h1>La incubadora de semillas </h1>
      </div>
      <br />
      <div className='row'>
        <p>El Proyecto PSI (Portable Seed Incubator) es una innovadora creación diseñada con el propósito de proporcionar una solución portátil para la incubación de semillas. Inicialmente concebido para adaptarse a diversas variedades de semillas, los creadores decidieron enfocar su enfoque en el cultivo de café, reconociendo su importancia global y el potencial de crecimiento en este sector.

        <br />
        <br />
        
        La incubadora portátil PSI ofrece una plataforma versátil y eficiente para el cultivo de semillas de café en diversas ubicaciones y condiciones ambientales.Equipada con tecnología basada en Arduino, la incubadora PSI proporciona un entorno óptimo para el desarrollo saludable de las semillas de café. Los parámetros de temperatura, humedad y luz se controlan de manera precisa y se ajustan según las necesidades específicas de las semillas, garantizando condiciones ideales para su germinación y crecimiento inicial. 
        
        <br />
        <br />
        
        Además, el Proyecto PSI se ha desarrollado teniendo en cuenta la sostenibilidad y la conservación del medio ambiente. La incubadora utiliza materiales reciclables y de bajo impacto ambiental, y también incorpora tecnologías de eficiencia energética para minimizar el consumo de recursos y reducir las emisiones.

        <br />
        <br />

        Con el enfoque específico en el cultivo de café, el Proyecto PSI busca mejorar la calidad y la productividad del café a nivel local y global. Al proporcionar a los agricultores una herramienta accesible y confiable, se fomenta la diversificación de las fuentes de ingresos y se promueve la autosuficiencia en la producción de café.

        </p>
        <br/>
      </div>

      <div className='row'>

        <img src={PlantaCafe} alt="Planta de cafe" />

      </div>

    </div>

    <br />

    <div className='container shadow'>

    <div className='row'>
      <h1>Acerca del producto</h1>
    </div>
    <div className='row'>
      <p>Los usuarios que adquieran el producto tendran que tener en consideracion que los siguientes componentes tendran que correr por cuenta de el usuario que adquiere el producto.</p>
    </div>

    <div className='row'>
      <p><strong>Bomba de agua:</strong>&nbsp;Esta debera contar con la potencia de 1HP, para poder otorgar la presion suficiente para el sistema de aspersion.</p>
    </div>
    <div className='row'>
      <p><strong>Sustrato:</strong>&nbsp;Comunmente conocido como abono, puede ser vegetal o de origen animal.</p>
    </div>
    <div className='row'>
      <p><strong>Contenedor de agua:</strong>&nbsp;Con una capacidad aproximada de 1,000L para un flujo constante de agua, tomando en cunta que al contenedor debe estar adecuado un filtro para eliminar las impurezas que podrian obstruir el sistema de aspersion. </p>
    </div>

    </div>

    <br />

    </div>
  )
}

export default System