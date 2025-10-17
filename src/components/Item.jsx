import React from "react";
import { Link } from "react-router";

export default function Item({ prod }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">

      <Link to={`/detalle/${prod.idProd}`}>
        <div className="card">
          <div className="image-container">
            <img src={prod.img} alt={prod.title} className="product-image" />
          </div>
          <div className="product-detail-container">
            <h5 className="dress-name">{prod.title}</h5>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span className="new-price">${prod.price}</span>
            </div>
          </div>
        </div>
      </Link>

    </div>

    // <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    //   <div className="product-item image-zoom-effect link-effect p-1">
    //     <div className="image-holder">
    //       <a href="#">
    //         <img src={prod.img} alt={prod.title} className="product-image" />
    //       </a>
    //     </div>
    //     <div className="product-content">
    //       <h5 className="text-uppercase fs-6"><a href="#">{prod.title}</a></h5>
    //       <a href="#" className="text-decoration-none" data-after="Add to cart">
    //         <span>${prod.price}</span>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}
