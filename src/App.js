
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BarraNavegacion from './Componentes/Navbar/navBar';

import InicioPage from './Componentes/Home/Index'
import ContactoPage from './Componentes/Home/Contact'
import AcercaPage from './Componentes/Home/About'

import Sistema from './Componentes/PSI/System'
import GuiaUsuario from './Componentes/PSI/UserGuide'






function App() {
  return (
    <BrowserRouter>

      <BarraNavegacion></BarraNavegacion>

        <br></br>

      <Routes>
        <Route path='/' Component={InicioPage}></Route>
        <Route path='/contacto' Component={ContactoPage}></Route>
        <Route path='/acerca' Component={AcercaPage}></Route>
        <Route path='/PSI' Component={Sistema}></Route>
        <Route path='/GuiaDeUsuario' Component={GuiaUsuario}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
