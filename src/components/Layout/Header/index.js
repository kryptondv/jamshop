import React from "react"

import CartNavBtn from "components/Layout/CartNavBtn"

import { StyledHeader, StyledInner, StyledLink } from "./styles"

export default function Header() {
  return (
    <StyledHeader>
      <StyledInner>
        <StyledLink to="/">Jam Shop</StyledLink>
        <CartNavBtn />
      </StyledInner>
    </StyledHeader>
  )
}
