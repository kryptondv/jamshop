import React, { createContext, useState } from "react"

export const CartContext = createContext(null)

const Provider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addProduct = (product) => {
    setCart([...cart, product])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default Provider
