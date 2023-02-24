import React, {useEffect, useState} from 'react';
import ContextAPI from "./ContextAPI/ContextAPI";
import listaLugares from './data/listaLugares.json';
import Title from './assets/img/title_share_eat.png';
import Lugares from './pages/Lugares/Lugares';
import PlacePage from './pages/Place/PlacePage';
import Menu from './pages/Menu/Menu';
import { Routes, Route } from "react-router-dom";
import './App.css'
  
const App = () => {
  // state que irá guardar a lista de lugares, com os pratos de cada estabelecimento
  // caso fosse uma API, o state seria preenchido com o resultado da requisição
  const [lugares, setLugares] = useState([]);

  // useEffect para preencher o state com a lista de lugares no carregamento da página
  useEffect(() => {
    setLugares(listaLugares);
  },[]);
  
  
  return (    
    <>
      {/* Contexto responsável por deixar disponível em toda a aplicação a lista de lugares */}
      <ContextAPI.Provider value={{lugares, setLugares}}>
        <div className='container-app'>
          <img className='m-auto mb-[50px]' src={Title} alt="Logo Share Eat" />
          {/* Rotas da aplicação */}
          <Routes>      
            <Route path="/share-eat" element={<Lugares />}/>
            <Route path="/share-eat/place/:name" element={<PlacePage />}/>
            <Route path="/share-eat/menu/:name" element={<Menu />}/>
          </Routes>
        </div>
      </ContextAPI.Provider> 
    </> 
  );
}

export default App;