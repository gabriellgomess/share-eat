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
  const [lugares, setLugares] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLugares(listaLugares);
  },[]);
  
  
  return (
    
    <>
      <ContextAPI.Provider value={{lugares, setLugares, showForm, setShowForm}}>
        <div className='container-app'>
          <img className='m-auto mb-[50px]' src={Title} alt="Logo Share Eat" />
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