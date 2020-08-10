import React from 'react';
import iconWhats from '../../assets/images/icons/whatsapp.svg';
import './style.css';
export interface Teacher{
    avatar:string,
    bio:string,
    cost:number,
    name:string,
    subject:string,
    id:number,
    whatsapp:string
}
interface TeacherItemProps{
  teacher:Teacher;
}
const TeacherItem:React.FC<TeacherItemProps>=({teacher})=>{
  return(
    <article className="teacher-item">
    <header>
      <img src={teacher.avatar} alt={teacher.name}/>
      <div>
        <strong>{teacher.name}</strong>
        <span>{teacher.subject}</span>
      </div>
    </header>
    <p>
    {teacher.bio} 
    <br/>
    </p>
    <footer>
      <p>
        Preço por hora
      <strong>R${teacher.cost}</strong>
      </p>
      <a href={`https://wa.me/${teacher.whatsapp}`}>
        <img src={iconWhats} alt="Entrar em contato" />
        Entrar em contato
      </a>
    </footer>
  </article>
  );
}
export default TeacherItem;