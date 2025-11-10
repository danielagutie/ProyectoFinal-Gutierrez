import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../../data/firebase.js";
import Filters from "../Filters/Filters.jsx";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
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

          <div className="col-lg-3 col-md-12">
            {/* <Filters /> */}
          </div>

          <div className="col-lg-9 col-md-12">
            <Breadcrumbs items={[{ label: "Inicio", link: "/" }, { label: "Productos" }]} />

            {/* ToDo: Mostrar cantidad de productos */}
            {/* <div className="shop_toolbar_wrapper d-flex justify-content-between align-items-center">
              <div className="page_amount">
                <p><span></span> Cantidad de productos</p>
              </div>
            </div> */}

            <div className="row shop_wrapper">
              {products.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <Item product={product} />
                </div>
              ))}
            </div>

            <div className="pagination_style pagination justify-content-center">
              <ul className="d-flex">
                <li><a href="#">&lt;&lt;</a></li>
                <li><a href="#">1</a></li>
                <li><a className="current" href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">&gt;&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}