import { useState, useContext } from "react";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

import CartContext from "../../context/cartContext";

export default function CartWidget() {
  const { countItems } = useContext(CartContext);

  const items = countItems();


  return (

    <li className="shopping_cart">
      <Link to="/cart">
        <ShoppingCart />
      </Link>
      {items > 0 && <span className="item_count">{items}</span>}
    </li>
  );
}