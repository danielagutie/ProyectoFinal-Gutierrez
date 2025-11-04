import React from "react";
import { Link } from "react-router";

export default function Item({ product }) {
  return (
    <Link to={`/detalle/${product.id}`}>
      <div className="single_product">
        <div className="product_thumb">
          <a href="product-details.html">
            <img className="primary_img" src={product.img} alt={product.title} />
          </a>
        </div>

        <div className="product_content grid_content text-center">
          <h4 className="product_name">{product.title}</h4>
          <div className="price_box">
            <span className="current_price">${product.price}</span>
          </div>
          <div className="add_to_cart">
            <a className="btn btn-primary" href="#">Add To Cart</a>
          </div>
        </div>
      </div>
    </Link>
  );
}
