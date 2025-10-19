import React from 'react';
import CoffeeIcon from '../../assets/icons/coffee.png'

const NavBar = () => {

  return (
    <nav>
        <img src={CoffeeIcon}/>
        <ul id="navBarLinks">
          <li><a href="#aboutSection">Sobre Mim</a></li>
          <li><a href="#skillsSection">Skills</a></li>
          <li><a>Projetos</a></li>
          <li><a href="#contactSection">Contato</a></li>
        </ul>
      </nav>
  );
};

export default NavBar;