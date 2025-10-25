import React, { useState } from "react";
import { Link } from "react-router";

import CartWidget from "./CartWidget";
import "./NavBar.css";

export default function Header() {
  return (
    <header className="header_section border-bottom">
      <div className="main_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header_container d-flex justify-content-between align-items-center">

                {/* Logo */}
                <div className="header_logo">
                  <Link to="/" className="sticky_none">
                    <img src="/images/logo-text.png" alt="Pampa" />
                  </Link>
                </div>

                {/* Menú principal */}
                <div className="main_menu d-flex">
                  <nav>
                    <ul className="d-flex flex-row">
                      <li>
                        <Link to="/category/Accesorios">Accesorios</Link>
                      </li>
                      <li>
                        <Link to="/category/Candados">Candados</Link>
                      </li>
                      <li>
                        <Link to="/category/Cerraduras">Cerraduras</Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Carrito / cuenta */}
                <div className="header_account">
                  <ul className="d-flex">
                    <CartWidget />
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
