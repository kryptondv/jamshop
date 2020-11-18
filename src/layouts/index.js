import React, { useContext } from "react"
import { CartContext } from '../contexts/cartContext'

import Header from "../components/Layout/Header"
import Cart from "../components/Cart"

import { GlobalStyle } from "./globalStyle"

export default function Layout({ children }) {
  const { cartOpen } = useContext(CartContext);

  return (
    <>
      <GlobalStyle cartOpen={cartOpen} />
      <Header />
      {cartOpen && <Cart />}
      <main>{children}</main>
      <footer />
    </>
  )
}
