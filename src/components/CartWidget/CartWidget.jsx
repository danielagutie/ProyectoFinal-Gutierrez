import { useState, useContext } from "react";
import { Link } from "react-router";
import CartContext from "../../context/cartContext";

import "./CartWidget.css";

export default function CartWidget() {
  const { countItems } = useContext(CartContext);

  return (
    <div className="col-3 col-lg-auto">
      <ul className="list-unstyled d-flex m-0">
        <li className="d-none d-lg-block">
          🛒cart <span className="cart-count">({countItems()})</span>
        </li>
      </ul>
    </div>
  );
}