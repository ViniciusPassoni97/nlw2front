import React,{useState,FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem,{Teacher} from '../../components/TeacherItem/index';
import Input from '../../components/Input/index';
import './style.css';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherList:React.FC = () => {
  const [listTeachers, setListTeachers]=useState([]);
  const [subject,setSubject]=useState('');
  const [week_day,setWeek_day]=useState('');
  const [time,setTime]=useState('');
  async function searchTeachers(e:FormEvent){
    e.preventDefault();
    const professor = await api.get('/classes',{
      params:{
        subject,
        week_day,
        time
      }
    });
    setListTeachers(professor.data);
  } 
  return (
    <div id="page-teacher-list" className="">
      <PageHeader title='Estes são os professores
      disponíveis'>
        <form id='search-teachers' onSubmit={searchTeachers}>
                     
        <Select 
           label='Matéria' 
           name='subject'
           value={subject}
           onChange={e => {setSubject(e.target.value)}}
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
           value={week_day}
           onChange={e => {setWeek_day(e.target.value)}}
           options={[
             {value:'1 ',label:"Segunda Feira"},
             {value:'2',label:"Terça"},
             {value:'3',label:"quarta"},
             {value:'4',label:"Quinta"},
             {value:'5',label:"Sexta"},
             {value:'6',label:"Sábado"},
           ]}
           />
          <Input 
          type='time' 
          label='Hora' 
          name='time'
          value={time}
          onChange={e => {
            setTime(e.target.value)
          }}
          />
          <button type='submit'>
            Buscar
          </button>

        </form>
      </PageHeader>
      <main>
        {listTeachers.map((teacher:Teacher)=>{
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </main>
    </div>
  );
}

export default TeacherList;