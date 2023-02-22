import React, { useState, useContext } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import { useParams, useNavigate } from "react-router-dom";

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
    const novoPrato = {
      name: nomePrato,
      description: descricaoPrato,
      price: valorPrato,
    };

    setLugares(
      lugares.map((lugar) => {
        if (lugar.name === name) {
          return {
            ...lugar,
            menuItems: [...lugar.menuItems, novoPrato],
          };
        }
        return lugar;
      })
    );

    handleVoltar();
  };

  return (
    <div>
        <h1 className="text-[#F3AA00] text-[36px] title">{name}</h1>
        <div className="text-[#FFFFFF] w-[290px] m-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nome do prato
        </label>
        <input
          onChange={(e) => handleNomePrato(e)}
          type="text"
          id="nome_prato"
          className="rounded-[4px] block w-[311px] p-2.5 text-[#464646] focus:outline-none"
          placeholder="Prato"
          required
        />
        <label className="block">Valor</label>
        <input
          onChange={(e) => handleValorPrato(e)}
          className="rounded-[4px] block w-[111px] p-2.5 text-[#464646] focus:outline-none"
          placeholder="R$ 0,00"
          type="text"
        />
        <label className="block">Descrição do prato</label>
        <textarea
          onChange={(e) => handleDescricaoPrato(e)}
          className="rounded-[4px] block w-[311px] p-2.5 text-[#464646] focus:outline-none"
          cols="30"
          rows="10"
          placeholder="Insira uma descrição"
        ></textarea>
        <span className="text-[14px]">
          *A descrição deve conter até 200 caracteres
        </span>
        <div
          onClick={handleSubmit}
          className="w-[311px] h-[42px] flex items-center justify-center rounded-[4px] bg-[#F3AA00] text-[#121212] title"
        >
          Salvar
        </div>
      </div>
    </div>
  );
};

export default Menu;
