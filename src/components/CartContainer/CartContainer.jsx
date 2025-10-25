import { useState, useContext } from "react"
import CartContext from "../../context/cartContext"
import { createOrder } from "../../data/firebase.js";

import { ChevronRight, X } from "lucide-react";

export default function CartContainer() {
  const [message, setMessage] = useState("");
  const { cartItems, removeFromCart, ClearCart } = useContext(CartContext)

  const orderData = {
    buyer: { name: "Juan Perez", email: "jp@gmail.com" },
    items: cartItems,
    priceTotal: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    date: new Date()
  }

  async function handleCheckout() {
    const newOrder = await createOrder(orderData)
    ClearCart()
    setMessage(`Compra realizada con éxito. Nro ${newOrder.id}`);
  }

  let totalCart = 0;

  return (

    <div className="shopping_cart_area">
      <div className="container">

        <div className="cart_page_inner mb-60">
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
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => (
                        <tr className="border-top">
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
                                  <ChevronRight size={16} /> Categoría : <span> {item.categoria}</span>
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
                              <X size={20} style={{ cursor: "pointer" }} onClick={() => removeFromCart(item.id)} />
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-3"> El carrito está vacío</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="cart_page_button border-top d-flex justify-content-between">
                <div className="shopping_cart_btn">
                  <button className="btn btn-primary border" onClick={() => ClearCart()}>
                    Vaciar carrito
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="cart_page_bottom">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="grand_totall_area">
                <div className="grand_totall_inner border-bottom">
                  <div className="cart_grandtotal d-flex justify-content-between">
                    <p>Total</p>
                    <span>${totalCart.toFixed(2)}</span>
                  </div>
                </div>
                <div className="proceed_checkout_btn">
                  <button className="btn btn-primary" onClick={() => handleCheckout()}>
                    Finalizar Compra
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 