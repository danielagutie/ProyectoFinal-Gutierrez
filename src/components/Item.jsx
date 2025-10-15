import React from "react";

export default function Item({ prod }) {
  return (


    <div class="col-lg-3 col-md-6 col-sm-12">
      <div class="card">
        <div class="image-container">
          <a href="#">
            <img src={prod.img} alt={prod.title} className="product-image" />
          </a>
        </div>
        <div class="product-detail-container">
          <h5 class="dress-name">{prod.title}</h5>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <span class="new-price">${prod.price}</span>
            <span class="buy">Agregar +</span>
          </div>
        </div>
      </div>
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
