import React, { useEffect, useState, useContext } from "react";
import ContextAPI from "../ContextAPI/ContextAPI";
import PlusSmall from "../assets/img/plus-sm.png";

const CardLugares = () => {
  const { lugares } = useContext(ContextAPI);

  return (
    <div className="flex flex-col items-center">
      {lugares.map((lugar) => (
        <div className='flex items-center w-[310px]' key={lugar.name}>
          <div class="p-6 max-w-sm mx-auto bg-[#333333] rounded-[8px] shadow-lg flex items-start justify-evenly space-x-4 m-4 flex-col w-[254px] h-[75px] cursor-pointer">            
              <div class="text-xl font-medium text-white title">{lugar.name}</div>
              <p style={{ marginLeft: 0 }} class="text-white simple-text">
                {lugar.menuItems.length}
                {lugar.menuItems.length > 1 ? " pratos" : " prato"}
              </p>            
          </div>
          <div className="w-[36px] h-[36px] border-solid border-2 border-white rounded-full flex items-center justify-center cursor-pointer">
            <img className="w-[18px] h-[18px]" src={PlusSmall} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLugares;
