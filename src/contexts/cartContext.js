import React, { createContext, useState } from "react"

export const CartContext = createContext(null)

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartOpen,
        setCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default Provider
