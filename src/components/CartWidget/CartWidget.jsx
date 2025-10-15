import { useState } from "react";
import "./CartWidget.css";

export default function CartWidget() {
  const [cartCount, setCartCount] = useState(0);
  
  return (
    <div className="col-3 col-lg-auto">
      <ul className="list-unstyled d-flex m-0">
        <li className="d-none d-lg-block">
          <a href="#" className="text-uppercase mx-3">
            🛒cart <span className="cart-count">({cartCount})</span>
          </a>
        </li>
      </ul>
    </div>
  );
}