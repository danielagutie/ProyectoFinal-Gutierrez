import { useState, useContext } from "react"
import CartContext from "../../context/cartContext"
import { createOrder } from "../../data/firebase.js";


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

  return (
    <div>
      <h3>Carrito</h3>
      {
        cartItems.map(item =>
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Quitar del carrito</button>
          </div>)
      }
      <br /><br />
      <button onClick={() => handleCheckout()}>Finalizar compra</button>

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

    </div >
  )
} 