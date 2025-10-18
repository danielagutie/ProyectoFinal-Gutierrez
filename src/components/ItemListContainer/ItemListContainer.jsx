import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import "./ItemListContainer.css";
import { getProducts, getProductsByCategory } from "../../data/API.js";
import Item from "../Item.jsx";

export default function ItemListContainer(props) {
  const { idCategory } = useParams();
  getProductsByCategory(idCategory);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{props.titulo}</h2>
      <div className="row g-3">
        {products.map((prod) => (
          <Item key={prod.idProd} prod={prod} />
        ))}
      </div>
    </div>
  );
}