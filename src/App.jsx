import { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { CartProvider } from "./context/cartContext";
import app from "./data/firebase";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer titulo="Productos" />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<h1>pagina no encontrada</h1>} />
        </Routes>
      </BrowserRouter >
    </CartProvider>
  );
}
