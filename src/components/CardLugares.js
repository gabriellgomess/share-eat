import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContextAPI from "../ContextAPI/ContextAPI";
import PlusSmall from "../assets/img/plus-sm.png";

const CardLugares = () => {
  const { lugares } = useContext(ContextAPI);
  const {showForm, setShowForm} = useContext(ContextAPI);
  const [place, setPlace] = useState([]);

  const handleShowForm = (lugar) => {
    setPlace(lugar);
    setShowForm(true);
  };

  return (
   
    <div className="flex flex-col items-center h-[500px] overflow-auto">      
      
        <>
          {lugares.map((lugar) => (        
            <div key={lugar.name} className="flex items-center">
              <Link className="w-[310px]" to={`/share-eat/place/${lugar.name}`}>
                <div className="p-6 max-w-sm mx-auto bg-[#333333] rounded-[8px] shadow-lg flex items-start justify-evenly space-x-4 m-4 flex-col w-[254px] h-[75px] cursor-pointer">
                  <div className="text-xl font-medium text-white title">{lugar.name}</div>
                  <p style={{ marginLeft: 0 }} className="text-white simple-text">
                    {lugar.menuItems.length}
                    {lugar.menuItems.length > 1 ? " pratos" : " prato"}
                  </p>
                </div>
              </Link>
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
