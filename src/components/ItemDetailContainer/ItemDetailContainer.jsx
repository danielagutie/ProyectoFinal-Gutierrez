import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Layers, Plus } from "lucide-react";
import { getProductById } from "../../data/firebase.js";
import CartContext from "../../context/cartContext";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import QuantityInput from "../QuantityInput/QuantityInput.jsx";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const context = useContext(CartContext);
    const [quantityToAdd, setQuantityToAdd] = useState(1);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getProductById(id)
            .then((data) => setProduct(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return null;

    return (
        <>
            <div className="breadcrumbs_area breadcrumbs_product">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumbs items={[{ label: "Inicio", link: "/" }, { label: "Productos", link: "/" }, { label: product.title }]} />
                        </div>
                    </div>
                </div>
            </div>
            <section className="product_details mb-135">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="product_zoom_gallery">
                                <div className="zoom_gallery_inner d-flex">
                                    <div className="product_zoom_main_img">
                                        <div className="product_zoom_thumb">
                                            <img src={product.img} alt={product.title} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="product_d_right">
                                <h1>{product.title}</h1>

                                <div className="price_box">
                                    <span className="current_price">${product.price}</span>
                                </div>

                                <div className="product_availalbe">
                                    <ul className="d-flex">
                                        <li>
                                            <Layers size={18} /><span>{product.linea || "TRANSPONDER"}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="product_desc">
                                    <p>{product.description}</p>
                                </div>

                                <div className="product_variant">
                                    <div className="filter__list  d-flex align-items-center">
                                        <h3>categor&iacute;a:</h3>
                                        <span>{product.categoria || "Sin especificar"}</span>
                                    </div>

                                    <div className="filter__list  d-flex align-items-center">
                                        <h3>Marca:</h3>
                                        <span>{product.marca || "Sin especificar"}</span>
                                    </div>

                                    <div className="variant_quantity_btn d-flex">
                                        <QuantityInput min={1} max={100} initial={1} onChange={setQuantityToAdd} />
                                        <button className="button btn btn-primary"
                                            onClick={() => context.addToCart(product, quantityToAdd)}>
                                            <Plus size={18} /> Agregar
                                        </button>
                                    </div>
                                </div>

                                <div className="product_sku">
                                    <p><span>SKU:</span> {product.idProd}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
