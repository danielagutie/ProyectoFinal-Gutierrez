import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="Productos" />} />
        <Route path='/detalle/:idProd' element={<ItemDetailContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='*' element={<h1>pagina no encontrada</h1>} />
        {/* <ItemListContainer saludo="hola" /> */}
      </Routes>
    </BrowserRouter >
  );
}
