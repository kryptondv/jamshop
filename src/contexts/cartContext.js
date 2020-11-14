import React, { createContext, useState } from "react"

export const CartContext = createContext(null)

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default Provider
