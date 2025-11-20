import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Breadcrumbs, Item, Pagination } from "@/components";
import { getProducts, getProductsByCategory } from "@/data/firebase.js";

export default function ItemListContainer() {
  const { idCategory } = useParams();

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15; // 3 columnas x 2 filas

  useEffect(() => {
    setLoading(true);
    setCurrentPage(1); // resetear paginado al cambiar de categoría

    const fetchData = idCategory
      ? getProductsByCategory(idCategory)
      : getProducts();

    fetchData
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [idCategory]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!loading && products.length === 0)
    return <p>No hay productos para la categoría seleccionada.</p>;

  // Calcular datos del paginado
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="shop_section shop_reverse">
      <div className="container">
        <div className="row">
          {/* Lateral de filtros */}
          <div className="col-lg-3 col-md-12">
            {/* <Filters /> */}
          </div>

          <div className="col-lg-9 col-md-12">
            <Breadcrumbs items={[{ label: "Inicio", link: "/" }, { label: "Productos" },]} />
            {/* Listado */}
            <div className="row shop_wrapper">
              {currentProducts.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 col-6" >
                  <Item product={product} />
                </div>
              ))}
            </div>
            {/* Paginacion */}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
