import "./NavBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown, User } from "lucide-react";
import CartWidget from "./CartWidget";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const menuItems = [
    // { label: "shop", to: "/shop" },
    {
      label: "PRODUCTOS",
      children: [
        { label: "Accesorios", to: "/category/Accesorios" },
        { label: "Candados", to: "/category/Candados" },
        { label: "Cerraduras", to: "/category/Cerraduras" },
      ],
    },
    {
      label: "BLOG",
      children: [
        { label: "Blog Pages", to: "/blog" },
        { label: "Blog Details", to: "/blog-details" },
      ],
    }
  ];

  // Solo un submenú abierto a la vez en mobile
  const toggleSubmenu = (index) => {
    if (isMobile) {
      setOpenSubmenus((prev) => {
        const isOpen = !!prev[index];
        return isOpen ? {} : { [index]: true };
      });
    }
  };

  // Detectar resize para cambiar entre mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
        setOpenSubmenus({});
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Limpiar submenus cuando se cierra menu
  useEffect(() => { if (!menuOpen) setOpenSubmenus({}); }, [menuOpen]);

  return (
    <header className="header_section border-bottom">
      <div className="main_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header_container d-flex justify-content-between align-items-center">

                {/* Boton hamburguesa mobile */}
                <div className="canvas_open d-lg-none">
                  <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
                </div>

                {/* Logo */}
                <div className="header_logo">
                  <Link to="/" className="sticky_none">
                    <img src="./images/logo-text.png" alt="Logo" />
                  </Link>
                </div>

                {/* Menu desktop */}
                <div className="main_menu d-none d-lg-block">
                  <nav>
                    <ul className="d-flex">
                      {menuItems.map((item, index) => (
                        <li
                          key={index}
                          className={item.children ? "menu-item-has-children" : ""}
                        >
                          {item.children ? (
                            <>
                              <span className="d-flex align-items-center gap-1 menu-label">
                                {item.label}
                                <ChevronDown size={14} />
                              </span>
                              <ul className="sub_menu">
                                {item.children.map((child) => (
                                  <li key={child.label}>
                                    <Link to={child.to}>{child.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link to={item.to}>{item.label}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Menú mobile */}
                <div className={`offcanvas_menu_wrapper ${menuOpen ? "active" : ""} d-lg-none`}>
                  <div className="canvas_close">
                    <button onClick={() => setMenuOpen(false)}>
                      <X size={24} />
                    </button>
                  </div>

                  <ul className="offcanvas_main_menu">
                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        className={`menu-item-has-children ${item.children && openSubmenus[index] ? "menu-open" : ""}`}
                      >
                        {item.children ? (
                          <>
                            <div onClick={() => toggleSubmenu(index)}>
                              <span>{item.label}</span>
                              <ChevronDown size={14} />
                            </div>
                            <ul className="sub-menu">
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <Link to={child.to}
                                    onClick={() => {
                                      setMenuOpen(false);     // cierra menú mobile
                                      setOpenSubmenus({});    // cierra submenú abierto
                                    }}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link to={item.to} onClick={() => setMenuOpen(false)} >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Overlay */}
                <div
                  className={`off_canvas_overlay ${menuOpen ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                ></div>

                {/* Account / Cart */}
                <div className="header_account">
                  <ul className="d-flex">
                    <li className="account_link">
                      <Link to="#">
                        <User />
                      </Link>
                      <ul className="dropdown_account_link">
                        <li><a href="#">Salir</a></li>
                      </ul>
                    </li>
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
