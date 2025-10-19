import { useContext } from "react"
import CartContext from "../../context/cartContext"

export default function CartContainer() {
  const { cartItems, removeFromCart } = useContext(CartContext)

  return (
    <div>
      <h3>Carrito</h3>
      {
        cartItems.map(item =>
          <div key={item.idProd}>
            <h4>{item.title}</h4>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.idProd)}>Quitar del carrito</button>
          </div>)
      }
    </div>
  )
} 