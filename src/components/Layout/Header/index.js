import React from "react"

import CartIcon from "../CartIcon"
import { StyledHeader, StyledInner, StyledLink } from "./styles"

export default function Header() {
  return (
    <StyledHeader>
      <StyledInner>
        <StyledLink to="/">JAM SHOP</StyledLink>
        <CartIcon />
      </StyledInner>
    </StyledHeader>
  )
}
