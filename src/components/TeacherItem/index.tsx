import React from 'react';
import iconWhats from '../../assets/images/icons/whatsapp.svg';
import './style.css';
function TeacherItem() {
  return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/43391455?s=400&u=caba174eb9fdcb10d416010c19fd5b658f89cd82&v=4" alt=''/>
      <div>
          <strong>Vinicius Passoni</strong>
          <span>Professor de Matemática</span>
      </div>
    </header>
    <p>
    Sou professor de matemática e atuo a mais 5 anos anos dando aula em universidades.
    Amo fazer cálculos matemáticos. 
    <br/>
    </p>
    <footer>
      <p>
        Preço por hora
        <strong>R$20,00</strong>
      </p>
      <button type='button'>
        <img src={iconWhats} alt="Entrar em contato" />
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}
export default TeacherItem;