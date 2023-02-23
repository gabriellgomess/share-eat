import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContextAPI from "../../ContextAPI/ContextAPI";

const Menu = () => {
  const { lugares, setLugares } = useContext(ContextAPI);
  const { name } = useParams();
  const [nomePrato, setNomePrato] = useState("");
  const [valorPrato, setValorPrato] = useState("");
  const [descricaoPrato, setDescricaoPrato] = useState("");
 
  const history = useNavigate();

  const handleVoltar = () => {
    history(-1);
  };

  const handleNomePrato = (e) => {
    setNomePrato(e.target.value);
  };

  const handleValorPrato = (e) => {
    setValorPrato(e.target.value);
  };

  const handleDescricaoPrato = (e) => {
    setDescricaoPrato(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoPrato = {
      name: nomePrato,
      description: descricaoPrato,
      price: valorPrato,
    };

    const updatedLugares = lugares.map((lugar) => {
      if (lugar.name === name) {
        return {
          ...lugar,
          menuItems: [...lugar.menuItems, novoPrato],
        };
      }
      return lugar;
    });

    setLugares(updatedLugares);

    handleVoltar();
  };

  const caracteresRestantes = 200 - descricaoPrato.length;

  return (
    <div className='w-[290px] m-auto'>
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
      <h1 className="text-[#F3AA00] text-[36px] title mb-[22px]">{name}</h1>
      <div className="text-[#FFFFFF] w-[290px] m-auto">
        <form onSubmit={handleSubmit}>
          <label className="simple-text block mb-[4px] text-[14px] font-bold" htmlFor="nome_prato">
            Nome do prato
          </label>
          <input
            onChange={handleNomePrato}
            value={nomePrato}
            type="text"
            id="nome_prato"
            className="rounded-[4px] block w-[311px] p-2.5 text-[#464646] focus:outline-none mb-[16px]"
            placeholder="Prato"
            required
          />
          <label htmlFor="valor_prato" className="simple-text block mb-[4px] text-[14px] font-bold">
            Valor
          </label>
          <input
            onChange={handleValorPrato}
            value={valorPrato}
            className="rounded-[4px] block w-[111px] p-2.5 text-[#464646] focus:outline-none mb-[16px]"
            placeholder="R$ 0,00"
            type="text"
            id="valor_prato"
          />
          <label htmlFor="descricao_prato" className="simple-text block mb-[4px] text-[14px] font-bold">
            Descrição do prato
          </label>
          <textarea
            onChange={handleDescricaoPrato}
            value={descricaoPrato}
            className="rounded-[4px] block w-[311px] h-[136px] p-2.5 text-[#464646] focus:outline-none resize-none"
            cols="30"
            rows="10"
            placeholder="Insira uma descrição"
            id="descricao_prato"
            maxLength={200}
          ></textarea>
          <div className="text-[10px] w-[311px] flex justify-end">{caracteresRestantes} caracteres restantes</div>
          <span className="text-[14px]">
            *A descrição deve conter até 200 caracteres
          </span>
          <div
            onClick={handleSubmit}
          className="w-[311px] h-[42px] flex items-center justify-center rounded-[4px] bg-[#F3AA00] text-[#121212] title cursor-pointer mt-[93px]"
        >
          Salvar
        </div>
        </form>
      </div>
    </div>
  );
};

export default Menu;
