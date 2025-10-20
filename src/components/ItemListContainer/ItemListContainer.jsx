import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import "./ItemListContainer.css";
// import { getProductsByCategory } from "../../data/API.js";
import { getProducts, getProductsByCategory } from "../../data/firebase.js";
import Item from "../Item.jsx";

export default function ItemListContainer(props) {
  const { idCategory } = useParams();
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory(idCategory).then((data) => setProducts(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    } else {
      getProducts().then((data) => setProducts(data))
      setLoading(false)
    }
  }, [idCategory])

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!loading && products.length === 0)
    return <p>No hay productos para la categoría seleccionada.</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{props.titulo}</h2>
      <div className="row g-3">
        {products.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}