// src/components/NavBar.jsx
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-300">
            Distribuidora Llaves
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-200">Inicio</a>
            <a href="/productos" className="hover:text-blue-200">Productos</a>
            <a href="/contacto" className="hover:text-blue-200">Contacto</a>
          </div>

          {/* Carrito y menu mobile */}
          <div className="flex items-center space-x-4">
            {/* Carrito */}
            <button className="relative hover:text-blue-200">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-blue-800">
          <a href="/" className="block px-3 py-2 rounded hover:bg-blue-700">Inicio</a>
          <a href="/productos" className="block px-3 py-2 rounded hover:bg-blue-700">Productos</a>
          <a href="/contacto" className="block px-3 py-2 rounded hover:bg-blue-700">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
