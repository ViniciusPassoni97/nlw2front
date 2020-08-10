import React,{useState,FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea/index';
import Select from '../../components/Select/index';
import './index.css';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

const TeacherForm:React.FC = () => {
  const history = useHistory();
  const[name,setName]=useState('');
  const[avatar,setAvatar]=useState('');
  const[whatsapp,setWhatsapp]=useState('');
  const[bio,setBio]=useState('');
  const[subject,setSubeject]=useState('');
  const[cost,setCost]=useState('');
  const[scheduleItens,setScheduleItens] = useState([
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
  function handleCreateClass(e:FormEvent){
    e.preventDefault();
    api.post('classes',{
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost:Number(cost),
      schedule:scheduleItens,
    }).then(()=>{
      alert('Cadastro Realizado com Sucesso');
      history.push('/');
    }).catch(()=>{
      alert("Erro no cadastro !");
    });
  }
  function setScheduleItenValue(positon:number,field:string,value:string){
    const newArray=scheduleItens.map((scheduleIten,index)=>{
      //console.log(index,positon);
      if(index === positon){
        return {...scheduleIten,[field]:value};
      }
      return scheduleIten;
    });
    //console.log(newArray);
    setScheduleItens(newArray);
  }
  return(
    <div id="page-teacher-form" >
      <PageHeader title='Incrível que você quer dar aulas' description='Estudante de Sistemas de Informação, Técnico de Suporte
       e estudante de Node.js, React.js e ReactNative.js '
       />
       <main>
        <form onSubmit={handleCreateClass}>
         <fieldset>
           <legend>Seus dados</legend>
           <Input label='Meu Nome' name='Meu Nome'
           value={name}
           onChange={(e)=>{setName(e.target.value)}}/>
           <Input label='Avatar' 
           name='avatar'
           value={avatar}
           onChange={(e)=>{setAvatar(e.target.value)}}/>
           <Input label='Whattsapp' 
           name='whatsapp'
           value={whatsapp}
           onChange={(e)=>{setWhatsapp(e.target.value)}}
           />
           <TextArea 
           name='bio' 
           label='Biografia'
           value={bio}
            onChange={(e)=>{setBio(e.target.value)}}
           ></TextArea>
         </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
           
           <Select 
           label='Matéria' 
           name='subject'
           value={subject}
           onChange={(e)=>{setSubeject(e.target.value)}}
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
           <Input 
           label='Custo Hora Aula' 
           name='Custo'
           value={cost}
           onChange={(e)=>{setCost(e.target.value)}}
           />
           <br/>
          </fieldset>
          <fieldset className='input'>
            <legend>Horarios Disponiveis
              <button type='button' onClick={AddScheduleIten}>
                Novo Horário
              </button>
            </legend>
              {scheduleItens.map((scheduleIten,index) => {
                return(
                <div key={scheduleIten.week_day} className="schedule-item">
                  <Select 
                  label='Dia da Semana' 
                  name='week_day'
                  value={scheduleIten.week_day}
                  onChange={e => setScheduleItenValue(index,'week_day',e.target.value)}
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
                  name='from' 
                  label='Das' 
                  type='time'
                  value={scheduleIten.from}
                  onChange={e=>setScheduleItenValue(index,'from',e.target.value)}
                  />
                  <Input
                  name='from'
                   label='Ate' 
                   type='time'
                   value={scheduleIten.to}
                   onChange={e=>setScheduleItenValue(index,'to',e.target.value)}
                   />
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
            <button type='submit'>Salvar Cadastro</button>
          </footer>
        </form> 
       </main>
    </div>
  );
}

export default TeacherForm;