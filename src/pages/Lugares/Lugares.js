import React, { useContext } from "react";
import "./Lugares.css";
import CardLugares from "../../components/CardLugares";
import ContextAPI from "../../ContextAPI/ContextAPI";
import { useNavigate } from 'react-router-dom';

const Lugares = () => {
  const history = useNavigate();

  const handleVoltar = () => {
      history(-1);
  }
  const { lugares } = useContext(ContextAPI);
  
  return (
    <>
      <div className='w-[290px] m-auto'>
        <h1 className='text-[#F3AA00] text-[36px] title'>Lugares</h1>
        <p className='text-white simple-text'>{lugares.length>1?lugares.length+" lugares cadastrados":"lugar cadastrado"}</p>
      </div>
      <CardLugares />
    </>    
  );
};

export default Lugares;
