import React, { useContext } from "react"

import { CartContext } from "../../../contexts/cartContext"

import CartIcon from "../../../assets/icons/cart.svg"

import {
  StyledContainer,
  StyledIconContainer,
  StyledCounter,
  StyledChevron,
} from "./styles"

export default function CartNav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  const handleIconClick = () => {
    if (cart.length > 0) {
      setCartOpen((prev) => !prev)
    }
  }

  return (
    <StyledContainer onClick={handleIconClick} active={cart.length > 0}>
      <StyledIconContainer>
        <CartIcon />
        <StyledCounter active={cart.length > 0}>{cart.length}</StyledCounter>
      </StyledIconContainer>
      <StyledChevron flipped={cartOpen ? 1 : 0} />
    </StyledContainer>
  )
}
