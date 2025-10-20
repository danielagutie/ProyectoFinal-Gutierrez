import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(newItem) {
    const newCartItems = structuredClone(cartItems);

    const indexItem = newCartItems.findIndex(item => item.id == newItem.id);

    if (indexItem !== -1) {
      newCartItems[indexItem].quantity++;
    } else {
      newCartItems.push({ ...newItem, quantity: 1 });
    }

    setCartItems(newCartItems);
    console.log(newCartItems);
  }

  function removeFromCart(itemId) {
    const newCartItems = cartItems.filter((item) => item.id !== itemId)
    setCartItems(newCartItems)
  }

  function removeUnitFromCart(itemId) {
    const newCartItems = structuredClone(cartItems);
    const indexItem = newCartItems.findIndex((item) => item.id === itemId)

    if (newCartItems[indexItem].quantity > 1) {
      newCartItems[indexItem].quantity--
      setCartItems(newCartItems)
    } else {
      removeFromCart(itemId)
    }
  }

  function countItems() {
    let count = 0;
    cartItems.forEach(item => count += item.quantity)
    return count
  }

  function CalculateTotalCart() {
    let totalCart = 0;
    cartItems.forEach(item => totalCart += item.quantity * item.price)
    return totalCart
  }

  function ClearCart() {
    setCartItems([])
  } 

  return (
    <CartContext.Provider value={{ cartItems, countItems, addToCart, removeFromCart, removeUnitFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;