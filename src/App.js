import React, {useEffect, useState} from 'react';
import Lugares from './pages/Lugares/Lugares';
import ContextAPI from "./ContextAPI/ContextAPI";
import listaLugares from './data/listaLugares.json';
import Title from './assets/img/title_share_eat.png';
import './App.css'
  
const App = () => {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    setLugares(listaLugares);
  });
  
  
  return (
    <div className='container-app'>
      <img className='m-auto mb-[50px]' src={Title} alt="Logo Share Eat" />
      <div className='w-[290px] m-auto'>
        <h1 className='text-[#F3AA00] text-[36px] title'>Lugares</h1>
        <p className='text-white simple-text'>{lugares.length>1?lugares.length+" lugares cadastrados":"lugar cadastrado"}</p>
      </div>
      
      <ContextAPI.Provider value={{lugares, setLugares}}>
        <Lugares />
      </ContextAPI.Provider>      
    </div>
  );
}

export default App;