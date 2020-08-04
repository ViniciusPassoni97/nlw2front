import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/index';
import './style.css';

const TeacherList:React.FC = () => {
  return (
    <div id="page-teacher-list" className="">
      <PageHeader title='Estes são os professores
      disponíveis'>
        <form id='search-teachers' action="">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id='subject'/>
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id='week_day'/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id='time'/>
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  );
}

export default TeacherList;