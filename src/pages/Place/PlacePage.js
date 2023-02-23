import React, { useState, useContext } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PlacePage.css";

const PlacePage = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history(-1);
  };

  const { lugares } = useContext(ContextAPI);
  const { name } = useParams();

  // Encontra o estabelecimento pelo nome
  const lugar = lugares.find((lugar) => lugar.name === name);

  if (!lugar) {
    return <div>Lugar não encontrado.</div>;
  }

  return (
    <div className="text-[#FFFFFF] w-[330px] m-auto">
      <div
        onClick={()=>handleVoltar()}
        className="fixed top-[12px] cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 0 24 24"
          width="32px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
        </svg>
      </div>

      <h1 className="text-[#F3AA00] text-[36px] title">{lugar.name}</h1>
      
        <div className="h-[500px] overflow-auto">
          <p className="simple-text">
            {lugar.menuItems.length > 1
              ? lugar.menuItems.length + " pratos"
              : lugar.menuItems.length + " prato"}
          </p>
          {lugar.menuItems.map((menuItem) => (
            <div
              key={menuItem.name}
              className="px-[19px] py-[12px]  mx-auto bg-[#464646] rounded-[8px] shadow-lg flex items-start justify-start space-x-4 m-4 flex-col w-[312px] h-[127px] borda"
            >
              <div className="w-[100%] flex justify-between mb-[9px]">
                <h2 className="title">{menuItem.name}</h2>
                <h2 className="title">
                  {" "}
                  {parseFloat(menuItem.price).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h2>
              </div>
              <p className="simple-text !ml-0">{menuItem.description}</p>
            </div>
          ))}

          <Link
            to={`/share-eat/menu/${lugar.name}`}
            className="w-[64px] h-[64px] bg-[#F3AA00] rounded-full fixed bottom-[30px] right-[24px] flex items-center justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18.669}
              height={18.669}
              viewBox="0 0 18.669 18.669"
            >
              <defs>
                <style>{".a{fill:#121212;}"}</style>
              </defs>
              <g transform="translate(0)">
                <path
                  className="a"
                  d="M3442.669,990.668h-8v8H3432v-8h-8V988h8v-8h2.667v8h8Z"
                  transform="translate(-3424 -980)"
                />
              </g>
            </svg>
          </Link>
        </div>
     
    </div>
  );
};

export default PlacePage;
