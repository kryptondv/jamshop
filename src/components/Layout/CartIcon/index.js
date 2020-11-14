import React from "react"
import CartIcon from "../../../assets/icons/cart.svg"
import Chevron from "../../../assets/icons/chevron.svg"

import { StyledContainer, StyledIconContainer, StyledCounter } from "./styles"

export default function CartNav() {
  return (
    <StyledContainer>
      <StyledIconContainer>
        <img src={CartIcon} alt="cart icon" />
        <StyledCounter>1</StyledCounter>
      </StyledIconContainer>
      <img src={Chevron} alt="chevron" />
    </StyledContainer>
  )
}
