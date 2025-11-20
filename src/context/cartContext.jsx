import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider(props) {

  // 1. Cargar carrito desde localStorage
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Guardar carrito cada vez que cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);


  // Agrega un producto al carrito
  function addToCart(newItem, quantityToAdd) {
    const newCartItems = structuredClone(cartItems);

    const indexItem = newCartItems.findIndex(item => item.id === newItem.id);

    if (indexItem !== -1) {
      newCartItems[indexItem].quantity += quantityToAdd;
    } else {
      newCartItems.push({ ...newItem, quantity: quantityToAdd });
    }

    setCartItems(newCartItems);
  }


  // Elimina un producto
  function removeFromCart(itemId) {
    const newCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(newCartItems);
  }


  // Resta 1 unidad
  function removeUnitFromCart(itemId) {
    const newCartItems = structuredClone(cartItems);
    const indexItem = newCartItems.findIndex(item => item.id === itemId);

    //if (indexItem === -1) return;

    if (newCartItems[indexItem].quantity > 1) {
      newCartItems[indexItem].quantity--;
      setCartItems(newCartItems);
    } else {
      removeFromCart(itemId);
    }
  }


  // Actualiza cantidad desde input
  function updateQuantity(itemId, newQty) {
    const newCartItems = structuredClone(cartItems);
    const indexItem = newCartItems.findIndex(item => item.id === itemId);

    if (indexItem === -1) return;

    // if (newQty < 1) {
    //   removeFromCart(itemId);
    //   return;
    // }

    newCartItems[indexItem].quantity = newQty;
    setCartItems(newCartItems);
  }


  // Cantidad total de items
  function countItems() {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }


  // Total del carrito
  function calculateTotalCart() {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }


  // Vaciar carrito 
  function clearCart() {
    setCartItems([]);
  }


  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, removeUnitFromCart, updateQuantity, clearCart, countItems, calculateTotalCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
