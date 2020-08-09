import React,{InputHTMLAttributes} from 'react';
import './index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    name:string;
}

const Input:React.FC<InputProps> = ({name,label,...rest}) => {
    return(
      <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest}/>
      </div>
    );
}

export default Input;