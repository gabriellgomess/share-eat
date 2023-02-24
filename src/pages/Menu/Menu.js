import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContextAPI from "../../ContextAPI/ContextAPI";

const Menu = () => {
  // invocando o contexto para ter acesso aos lugares
  const { lugares, setLugares } = useContext(ContextAPI);
  // Hook para pegar o nome do estabelecimento da URL
  const { name } = useParams();
  // state para armazenar o nome do prato
  const [nomePrato, setNomePrato] = useState("");
  // state para armazenar o valor do prato
  const [valorPrato, setValorPrato] = useState("");
  // state para armazenar o valor do prato formatado
  const [valorPratoFormatado, setValorPratoFormatado] = useState("");
  // state para armazenar a descrição do prato
  const [descricaoPrato, setDescricaoPrato] = useState("");
 
  // Hook para navegar entre as páginas
  const history = useNavigate();
  // Função para voltar para a página anterior
  const handleVoltar = () => {
    history(-1);
  };

  // Manipulador de eventos para o input do nome do prato
  const handleNomePrato = (e) => {
    setNomePrato(e.target.value);
  };

  // Manipulador de eventos para o input do valor do prato, formatando o valor para o padrão monetário
  // e armazenando o valor formatado e o valor sem formatação
  const handleValorPrato = (e) => {
    const formattedValue = formatCurrency(e.target.value);
    setValorPratoFormatado(formattedValue);
    const newValue = formattedValue.replace('R$', '').replace(',', '.');
    const newValue2 = parseFloat(newValue).toFixed(2);
    setValorPrato(newValue2);
  };
  
  // Manipulador de eventos para o input da descrição do prato
  const handleDescricaoPrato = (e) => {
    setDescricaoPrato(e.target.value);
  };

  // Manipulador de eventos para o submit do formulário
  const handleSubmit = (e) => {
    // verifica se os campos do formulário estão preenchidos
    if(nomePrato === '' || valorPrato === '' || descricaoPrato === '') {
      alert('Preencha todos os campos');
      return;
    }else{
    // previne o comportamento padrão do formulário
    e.preventDefault();
    // cria um novo prato com os dados do formulário
    const novoPrato = {
      name: nomePrato,
      description: descricaoPrato,
      price: valorPrato,
    };
    // cria um novo array de lugares, atualizando o prato do estabelecimento selecionado
    const updatedLugares = lugares.map((lugar) => {
      if (lugar.name === name) {
        return {
          ...lugar,
          menuItems: [...lugar.menuItems, novoPrato],
        };
      }
      return lugar;
    });
    // atualiza o state de lugares com o novo array
    setLugares(updatedLugares);
    // volta para a página anterior
    handleVoltar();
    }
  };

  // Verificação de quantos caracteres restam para o limite de 200 caracteres
  const caracteresRestantes = 200 - descricaoPrato.length;

  // Função para formatar o valor do prato para o padrão monetário
  const formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const stringValue = value.replace(/\D/g, '');
    const floatValue = parseFloat(stringValue) / 100;
    const formattedValue = formatter.format(floatValue);
    return formattedValue;
  };
  
  return (
    <div className='w-[290px] m-auto'>
      {/* Botão para voltar à página anterior */}
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
            onChange={(value)=>handleValorPrato(value)}
            value={valorPratoFormatado}
            className="rounded-[4px] block w-[111px] p-2.5 text-[#464646] focus:outline-none mb-[16px]"
            placeholder="R$ 0,00"
            type="text"
            id="valor_prato"
            required
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
            required
          ></textarea>
          <div className="text-[10px] w-[311px] flex justify-end">{caracteresRestantes} caracteres restantes</div>
          <span className="text-[14px]">
            *A descrição deve conter até 200 caracteres
          </span>
          <button
            onClick={handleSubmit}
          className="w-[311px] h-[42px] flex items-center justify-center rounded-[4px] bg-[#F3AA00] text-[#121212] title cursor-pointer mt-[93px]"
        >
          Salvar
        </button>
        </form>
      </div>
    </div>
  );
};

export default Menu;
