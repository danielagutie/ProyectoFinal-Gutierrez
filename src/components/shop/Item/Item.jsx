import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { QuantityInput } from "@/components";
import CartContext from "../../../context/cartContext";

export default function Item({ product }) {
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const context = useContext(CartContext);

  const handleAdd = () => {
    // Si está vacío, NaN o 0 → usa 1
    const qty = Number(quantityToAdd) || 1;
    context.addToCart(product, qty);
  };

  return (
    <div className="single_product">
      <Link to={`/detalle/${product.id}`}>
        <div className="product_thumb">
          <img className="primary_img" src={product.img} alt={product.title} />
        </div>
      </Link>

      <div className="product_content grid_content text-center">
        <Link to={`/detalle/${product.id}`}>
          <h4 className="product_name">{product.title}</h4>
          <div className="price_box">
            <span className="current_price">${product.price}</span>
          </div>
        </Link>

        <div className="add_to_cart d-flex align-items-center gap-2">

          <QuantityInput
            min={1}
            max={100}
            onChange={setQuantityToAdd}
          />

          <button className="btn btn-primary" onClick={handleAdd}>
            <Plus size={18} /> Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
