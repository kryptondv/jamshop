import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { CartContext } from "../contexts/cartContext"

import Header from "../components/Layout/Header"
import Cart from "../components/Cart"

import { GlobalStyle } from "./globalStyle"

export default function Layout({ children }) {
  const { cartOpen } = useContext(CartContext)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle cartOpen={cartOpen} />
        <Header />
        {cartOpen && <Cart />}
        <main>{children}</main>
        <footer />
      </>
    </ThemeProvider>
  )
}
