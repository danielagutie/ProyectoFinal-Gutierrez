import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../../data/firebase.js";
import Item from "../Item/Item.jsx";

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
    <div className="shop_section shop_reverse">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="row shop_wrapper">
              {products.map((product) => (
                <Item key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}