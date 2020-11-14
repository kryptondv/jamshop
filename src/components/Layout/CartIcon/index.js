import React, { useContext } from "react"
import CartIcon from "../../../assets/icons/cart.svg"
import Chevron from "../../../assets/icons/chevron.svg"
import { CartContext } from '../../../contexts/cartContext';

import { StyledContainer, StyledIconContainer, StyledCounter } from "./styles"

export default function CartNav() {
  const { cart } = useContext(CartContext);

  return (
    <StyledContainer>
      <StyledIconContainer>
        <img src={CartIcon} alt="cart icon" />
        <StyledCounter>{cart.length}</StyledCounter>
      </StyledIconContainer>
      <img src={Chevron} alt="chevron" />
    </StyledContainer>
  )
}
