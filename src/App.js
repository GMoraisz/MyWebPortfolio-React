import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { BiSolidRocket } from 'react-icons/bi';
import { AiFillInfoCircle, AiFillFilePdf } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';


import './App.css';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Resume from './Components/Pages/Resume/Resume';
import Contact from './Components/Pages/Contact/Contact';
import MyProjects from './Components/Pages/Projects/Projects';
import Hamburguer from './Components/Layout/Menu/Hamburguer';

function App() {


 

  return (
    <Router>
      <div className='Container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Resume" element={<Resume />} />
          <Route exact path="/Contato" element={<Contact />} />
          <Route exact path="/Projetos" element={<MyProjects />} />
          <Route exact path="/Sobre" element={<About />} />
        </Routes>

      

        <div className='right'>
        <div className='deviceMenu'> <Hamburguer/> </div>
          <Link to="/"> <span> Home  </span><IoHome /> </Link>
          <Link to="/Projetos"> <span> Projetos  </span> < BiSolidRocket /> </Link>
          <Link to="/Sobre"> <span> Sobre  </span><AiFillInfoCircle /> </Link>
          <Link to="/Resume"> <span> Currículo  </span>< AiFillFilePdf /> </Link>
          <Link to="/Contato"> <span> Contato  </span> <FaCommentDots /> </Link>
        </div>

      
      


        <div className='footer'>
          <h3>©2024 <strong>Gabriel Morais</strong> | Todos os Direitos Reservados</h3>
        </div>
      </div>
    </Router>
  );
}

export default App;
