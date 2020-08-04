import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg'
import giveIcon from '../../assets/images/icons/give-classes.svg';
import pupleIcon from '../../assets/images/icons/purple-heart.svg';
import './style.css';

const Landing:React.FC = () => {
  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className=" logo-container">
          <img src={Logo} alt="Logo"/>
          <h2>Sua Plataforma de estudos online</h2>
        </div>
        <img src={landingImg} 
        alt="Plataforma de Estudos" 
        className="hero-image"/>
        <div className="buttons-container">
            <Link to="/study"  className="study">
              <img src={studyIcon} alt="Estudar"/>
              Estudar
            </Link>
            <Link to="/give-classes"  className="give-classes">
              <img src={giveIcon} alt="Dar Aulas"/>
              Dar Aulas 
            </Link>
        </div>
        <span className='total-connections'>
          Total de 200 conexões
          <img src={pupleIcon} alt="Coração Roxo"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;