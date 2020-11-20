import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { CartContext } from "~/contexts/cartContext"

import { Header, CartEl } from "components"

// eslint-disable-line no-unused-vars
import "reset-css"
import { GlobalStyle } from "./globalStyle"

export default function Layout({ children }) {
  const { cartOpen } = useContext(CartContext)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle cartOpen={cartOpen} />
        <Header />
        {cartOpen && <CartEl />}
        <main>{children}</main>
        <footer />
      </>
    </ThemeProvider>
  )
}
