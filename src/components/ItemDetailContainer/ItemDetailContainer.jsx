import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Tag, Plus } from "lucide-react";
import { getProductById } from "../../data/firebase.js";
import CartContext from "../../context/cartContext";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const context = useContext(CartContext);

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

    return (
        <section className="product_details mb-135">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-6">
                        <div className="product_zoom_gallery">
                            <div className="zoom_gallery_inner d-flex">
                                <div className="product_zoom_main_img">
                                    <div className="product_zoom_thumb">
                                        <img data-image={product.img} src={product.img} alt={product.title} />
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
                                    <li><Tag size={20} style={{ transform: "rotate(90deg)" }} /> Categoria: {product.categoria} </li>
                                    <li>Marca: <span className="stock">Marca del producto</span></li>
                                </ul>
                            </div>
                            <div className="product_desc">
                                <p>{product.description}</p>
                            </div>

                            <div className="product_variant">
                                <div className="variant_quantity_btn d-flex">
                                    {/* <div className="pro-qty border">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                  </div> */}
                                    <button className="button btn btn-primary" onClick={() => context.addToCart(product)}>
                                        <Plus /> Agregar al carrito
                                    </button>
                                </div>
                            </div>

                            <div className="product_sku">
                                <p><span>SKU: </span> {product.idProd}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>



        // <div className="card">
        //     <div className="image-container">
        //         <img src={product.img} alt={product.title} className="product-image" />
        //     </div>
        //     <div className="product-detail-container">
        //         <h5 className="dress-name">{product.title}</h5>
        //         <h5 className="dress-name">Categoría: {product.categoria}</h5>
        //         <div className="d-flex justify-content-between align-items-center mt-2">
        //             <span className="new-price">Precio: ${product.price}</span>
        //         </div>
        //     </div>
        //     <div><button onClick={() => context.addToCart(product)}>Agregar al carrito</button></div>
        // </div>
    );
}