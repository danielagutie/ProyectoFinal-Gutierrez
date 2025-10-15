import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="hola"/>
    </>
  );
}
