import React, { useContext } from "react"
import CartIcon from "../../../assets/icons/cart.svg"
import Chevron from "../../../assets/icons/chevron.svg"
import { CartContext } from '../../../contexts/cartContext';


import { StyledContainer, StyledIconContainer, StyledCounter, StyledChevron } from "./styles"

export default function CartNav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  const handleIconClick = () => {
    if(cart.length > 0) {
      setCartOpen(prev => !prev)
    }
  }


  return (
    <StyledContainer onClick={handleIconClick} active={cart.length > 0}>
      <StyledIconContainer>
        <CartIcon />
        <StyledCounter active={cart.length > 0}>{cart.length}</StyledCounter>
      </StyledIconContainer>
      <StyledChevron src={Chevron} alt="chevron" flipped={cartOpen} />
    </StyledContainer>
  )
}
