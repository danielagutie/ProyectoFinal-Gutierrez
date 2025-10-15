import { useState } from "react";
// import "./ItemListContainer.css";

import { products } from "../../data/products.js";
import Item from "../Item.jsx";

export default function ItemListContainer(props) {
  let todos = []
  //  console.log({products});

  return (

    <div class="container mt-4">
      <div class="row g-3">
        {products.map((prod) => (
          <Item key={prod.idProd} prod={prod} />
        ))}
      </div>
    </div>
    // <div className="container mt-4">
    //   <div className="row g-1">
    //     {products.map((prod) => (
    //       <Item key={prod.idProd} prod={prod} />
    //     ))}
    //   </div>
    // </div>

    // <section id="best-sellers" className="bg-light py-5">
    //   <div className="container">
    //     <div className="row">
    //       {products.map((prod) => (
    //         <Item key={prod.idProd} product={prod} />
    //       ))}
    //     </div>
    //   </div>
    // </section>

  );
}