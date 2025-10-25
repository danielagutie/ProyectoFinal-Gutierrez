import React from "react";
import { Link } from "react-router";

export default function Item({ product }) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
      <Link to={`/detalle/${product.id}`}>
        <div className="single_product">
          <div className="product_thumb">
            <img className="primary_img" src={product.img} alt={product.title} />
          </div>
          <div className="product_content grid_content text-center">
            <h4 className="product_name">{product.title}</h4>
            <div className="price_box">
              <span className="current_price">${product.price}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
