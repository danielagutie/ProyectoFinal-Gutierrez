import { useState } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router";

export default function NavBar() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg border-bottom align-items-center">
      <div className="container-fluid full-width-container">
        {/* Logo */}
        <div className="col-auto">
          <Link to="/">
            <img src="/images/logo-text.png" alt="Pampa Logo" className="logo-img" />
          </Link>
        </div>

        {/* Menú */}
        <div className="col-auto">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOffcanvasOpen(!offcanvasOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`offcanvas offcanvas-end ${offcanvasOpen ? "show" : ""}`}
            tabIndex="-1"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close text-reset"
                onClick={() => setOffcanvasOpen(false)}
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 gap-1 gap-md-5 pe-3">

                <li className="nav-item">
                  <a className="nav-link" href="#">NOSOTROS</a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="productosDropdown"
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      const dropdown = e.currentTarget.nextElementSibling;
                      dropdown.classList.toggle("show");
                    }}
                  >
                    PRODUCTOS
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="productosDropdown">
                    <li><Link to={`/category/Accesorios`} className="dropdown-item" >Accesorios</Link></li>
                    <li><Link to={`/category/Candados`} className="dropdown-item">Candados</Link></li>
                    <li><Link to={`/category/Cerraduras`} className="dropdown-item">Cerraduras</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACTO</a>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Carrito */}
        <Link to="cart"> <CartWidget /></Link>
      </div>
    </nav>

  );
}
