import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextAPI from "../ContextAPI/ContextAPI";
import PlusSmall from "../assets/img/plus-sm.png";

const CardLugares = () => {
  // invocando o contexto para ter acesso aos lugares
  const { lugares } = useContext(ContextAPI);

  return (
   
    <div className="flex flex-col items-center h-[500px] overflow-auto">
        <>
          {/* Percorrendo a lista de lugares e renderizando os cards da página Lugares */}
          {lugares.map((lugar) => (        
            <div key={lugar.name} className="flex items-center mb-[16px]">
              {/* Link para a página do lugar */}
              <Link className="w-[274px] mr-[20px]" to={`/share-eat/place/${lugar.name}`}>
                <div className="p-6 max-w-sm mx-auto bg-[#333333] rounded-[8px] shadow-lg flex items-start justify-evenly space-x-4 flex-col w-[254px] h-[75px] cursor-pointer">
                  <div className="text-xl font-medium text-white title">{lugar.name}</div>
                  <p style={{ marginLeft: 0 }} className="text-white simple-text">
                    {lugar.menuItems.length}
                    {lugar.menuItems.length > 1 ? " pratos" : " prato"}
                  </p>
                </div>
              </Link>
              {/* Link para a página de cadastro de pratos */}
              <Link to={`/share-eat/menu/${lugar.name}`} className="w-[36px] h-[36px] border-solid border-2 border-white rounded-full flex items-center justify-center cursor-pointer">
                <img className="w-[18px] h-[18px]" src={PlusSmall} alt="" />
              </Link>            
            </div>        
          ))}
        </>
      
    </div>
 
    
  );
};

export default CardLugares;
