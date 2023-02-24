import React, { useContext } from "react";
import "./Lugares.css";
import CardLugares from "../../components/CardLugares";
import ContextAPI from "../../ContextAPI/ContextAPI";

const Lugares = () => {
  // invocando o contexto para ter acesso aos lugares
  const { lugares } = useContext(ContextAPI);
  
  return (
    <>
      <div className='w-[312px] m-auto mb-[16px] '>
        <h1 className='mb-[6px] text-[#F3AA00] text-[36px] title'>Lugares</h1>
        {/* Aqui fazemos uma verificação, caso tenha mais de um lugar cadastrado, completamos a frase no plural, senão no singular */}
        <p className='text-white simple-text'>{lugares.length > 1 ? lugares.length + " lugares cadastrados" : "lugar cadastrado"}</p>
      </div>
      {/* Renderização dos cards dos lugares cadastrados */}
      <CardLugares />
    </>    
  );
};

export default Lugares;
