import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="Productos" />} />
        <Route path='/detalle/:idProd' element={<h1>detalle</h1>} />
        <Route path='*' element={<h1>pagina no encontrada</h1>} />
        {/* <ItemListContainer saludo="hola" /> */}
      </Routes>
    </BrowserRouter >
  );
}
