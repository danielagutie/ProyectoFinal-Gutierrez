import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../data/API.js";

export default function ItemDetailContainer() {
    const { idProd } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getProductById(idProd)
            .then((data) => setProduct(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [idProd]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="card">
            <div className="image-container">
                <img src={product.img} alt={product.title} className="product-image" />
            </div>
            <div className="product-detail-container">
                <h5 className="dress-name">{product.title}</h5>
                <h5 className="dress-name">Categoría: {product.categoria}</h5>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="new-price">Precio: ${product.price}</span>
                </div>
            </div>
            <div><button>Agregar al carrito</button></div>
        </div>
    );
}