import { useState, useEffect } from "react";
// import "./ItemListContainer.css";
import getProducts from "../../data/API.js";
import Item from "../Item.jsx";

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => { getProducts().then((data) => setProducts(data)) },
    [])

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{props.titulo}</h2>
      <div className="row g-3">
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