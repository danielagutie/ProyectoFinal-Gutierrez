import { useState, useContext } from "react";
import CartContext from "../../context/cartContext";
import { createOrder } from "../../data/firebase.js";

import FormCheckOut from "./FormCheckOut.jsx";

import { ShoppingCart, ChevronRight, X, CheckCircle } from "lucide-react";

export default function CartContainer() {
  const [message, setMessage] = useState("");
  const { cartItems, removeFromCart, ClearCart } = useContext(CartContext);

  async function handleCheckout(formData) {
    const orderData = {
      buyer: formData,
      items: cartItems,
      priceTotal: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      date: new Date(),
    };

    const newOrder = await createOrder(orderData);
    ClearCart();
    setMessage(`Compra realizada con éxito. Nro ${newOrder.id}`);
  }

  return (
    <div className="shopping_cart_area">
      <div className="container">

        {/* Mensaje de compra exitosa */}
        {message && (
          <div className="row">
            <div className="col-12">
              <div className="user-actions">
                <h3>
                  <CheckCircle size={16} />
                  <span> {message} </span>
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Contenido del carrito */}
        {cartItems.length > 0 ? (
          <>
            {/* Tabla de productos */}
            <div className="cart_page_inner">
              <div className="row">
                <div className="col-12">
                  <div className="cart_page_tabel">
                    <table>
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th>Descripción</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id} className="border-top">
                            <td>
                              <div className="cart_product_thumb">
                                <img src={item.img} alt={item.title} />
                              </div>
                            </td>
                            <td>
                              <div className="cart_product_text">
                                <h4>{item.title}</h4>
                                <ul>
                                  <li>
                                    <ChevronRight size={16} /> Categoría:{" "}
                                    <span>{item.categoria}</span>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td>
                              <div className="cart_product_price">
                                <span>${item.price.toFixed(2)}</span>
                              </div>
                            </td>
                            <td className="product_quantity">
                              <div className="cart_product_quantity">
                                <span>{item.quantity}</span>
                              </div>
                            </td>
                            <td>
                              <div className="cart_product_price">
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            </td>
                            <td>
                              <div className="cart_product_remove text-right">
                                <X
                                  size={20}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => removeFromCart(item.id)}
                                />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="cart_page_button border-top d-flex justify-content-between">
                    <div className="shopping_cart_btn">
                      <button className="btn btn-primary border" onClick={ClearCart}>Vaciar carrito</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="cart_page_bottom">
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10">
                  <FormCheckOut handleCheckout={handleCheckout} />
                </div>
              </div>
            </div>
          </>
        ) : (
          //Carrito vacio
          <div className="row">
            <div className="col-12 text-center py-5">
              <ShoppingCart size={64} />
              <h4>El carrito está vacío</h4>
              <p>Agrega productos para comenzar tu compra</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
