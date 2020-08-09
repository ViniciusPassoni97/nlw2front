import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/index';
import Input from '../../components/Input/index';
import './style.css';
import Select from '../../components/Select';

const TeacherList:React.FC = () => {
  return (
    <div id="page-teacher-list" className="">
      <PageHeader title='Estes são os professores
      disponíveis'>
        <form id='search-teachers' action="">
                     
        <Select 
           label='Matéria' 
           name='subject'
           options={[
             {value:'Artes',label:"Artes"},
             {value:'Matemática',label:"Matemática"},
             {value:'Biologia',label:"Biologia"},
             {value:'História',label:"História"},
             {value:'Filosofia',label:"Filosifia"},
             {value:'Português',label:"Português"},
           ]}
           />
          <Select 
           label='Dia da Semana' 
           name='week_day'
           options={[
             {value:'1 ',label:"Segunda Feira"},
             {value:'2',label:"Terça"},
             {value:'3',label:"quarta"},
             {value:'4',label:"Quinta"},
             {value:'5',label:"Sexta"},
             {value:'6',label:"Sábado"},
           ]}
           />
          <Input type='time' label='Hora' name='time'/>

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