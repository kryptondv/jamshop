import React from "react"

import Header from "../components/Layout/Header"

import { GlobalStyle } from "./globalStyle"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <footer />
    </>
  )
}
