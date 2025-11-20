import { useState, useContext } from "react";
import { ShoppingCart, ChevronRight, X, CheckCircle } from "lucide-react";

import CartContext from "../../../context/cartContext.jsx";
import { createOrder } from "../../../data/firebase.js";

import { Breadcrumbs, QuantityInput } from "@/components";
import FormCheckOut from "./FormCheckOut.jsx";

export default function CartContainer() {
  const [message, setMessage] = useState("");
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  async function handleCheckout(formData) {
    const orderData = {
      buyer: formData,
      items: cartItems,
      priceTotal: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      date: new Date(),
    };

    const newOrder = await createOrder(orderData);
    clearCart();
    setMessage(`Compra realizada con éxito. Nro ${newOrder.id}`);
  }

  return (
    <>
      <div className="breadcrumbs_area breadcrumbs_other">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Breadcrumbs items={[{ label: "Inicio", link: "/" }, { label: "Carrito" }]} page_title="Carrito" />
            </div>
          </div>
        </div>
      </div>

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
                            <th></th>
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
                                </div>
                              </td>
                              <td>
                                <div className="cart_product_price">
                                  <span>${item.price.toFixed(2)}</span>
                                </div>
                              </td>
                              <td className="product_quantity">
                                <div className="cart_product_quantity">

                                  {/* <QuantityInput min={1} initial={1} size="small" onChange={(e) => updateQuantity(item.id, Number(e.target.value))} /> */}

                                  <input type="number" min="1" value={item.quantity} className="qty_input"
                                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))} />
                                </div>
                              </td>
                              <td>
                                <div className="cart_product_price">
                                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                              </td>
                              <td>
                                <div className="cart_product_remove text-right">
                                  <X size={20} style={{ cursor: "pointer" }}
                                    onClick={() => removeFromCart(item.id)} />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="cart_page_button border-top d-flex justify-content-between">
                      <div className="shopping_cart_btn">
                        <button className="btn btn-primary border" onClick={clearCart}>Vaciar carrito</button>
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
    </>

  );
}
