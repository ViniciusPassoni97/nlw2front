import React,{useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea/index';
import Select from '../../components/Select/index';
import './index.css';

const TeacherForm:React.FC = () => {
  const [scheduleItens,setScheduleItens] = useState([
    {
      week_day:0,
      from:'',
      to:''
    }
  ]);
  function AddScheduleIten(){
    setScheduleItens([
      ...scheduleItens,
      {
        week_day:0,
        from:'',
        to:''
      }
    ]);
  }
  return(
    <div id="page-teacher-form" >
      <PageHeader title='Incrível que você quer dar aulas' description='Estudante de Sistemas de Informação, Técnico de Suporte
       e estudante de Node.js, React.js e ReactNative.js '
       />
       <main>
         <fieldset>
           <legend>Seus dados</legend>
           <Input label='Meu Nome' name='Meu Nome'/>
           <Input label='Avatar' name='avatar'/>
           <Input label='Whattsapp' name='whatsapp'/>
           <TextArea name='bio' label='Biografia'></TextArea>
         </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
           
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
          <br/>
          <br/>
           <Input label='Custo Hora Aula' name='Custo'/>
           <br/>
          </fieldset>
          <fieldset className='input'>
            <legend>Horarios Disponiveis
              <button type='button' onClick={AddScheduleIten}>
                Novo Horário
              </button>
            </legend>
              {scheduleItens.map(scheduleIten => {
                return(
                <div key={scheduleIten.week_day} className="schedule-item">
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
                  <Input name='from' label='Das' type='time'/>
                  <Input name='from' label='Ate' type='time'/>
                  </div>
                );
              })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante"/>
              Importante
              <br/>
              Preencha todos os dados
            </p>
            <button type='button'>Salvar Cadastro</button>
          </footer>
       </main>
    </div>
  );
}

export default TeacherForm;