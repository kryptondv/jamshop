import React from "react"

import CartNavBtn from "../CartNavBtn"

import { StyledHeader, StyledInner, StyledLink } from "./styles"

export default function Header() {
  return (
    <StyledHeader>
      <StyledInner>
        <StyledLink to="/">JAM SHOP</StyledLink>
        <CartNavBtn />
      </StyledInner>
    </StyledHeader>
  )
}
