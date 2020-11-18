import React, { useContext, useEffect, useState } from "react"

import { CartContext } from "~/contexts/cartContext"

import CartIcon from "~/assets/icons/cart.svg"

import {
  StyledCartNavBtn,
  StyledIconContainer,
  StyledCounter,
  StyledChevron,
} from "./styles"

export default function CartNavBtn() {
  const [animate, setAnimate] = useState(false)
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  const handleIconClick = () => {
    if (cart.length > 0) {
      setCartOpen((prev) => !prev)
    }
  }

  // add animation on new cart item
  useEffect(() => {
    if (cart.length > 0) {
      setAnimate(true)
    }
    const animationTimeout = setTimeout(() => {
      setAnimate(false)
    }, 200)

    return () => {
      clearTimeout(animationTimeout)
    }
  }, [cart])
  return (
    <StyledCartNavBtn onClick={handleIconClick} active={cart.length > 0}>
      <StyledIconContainer>
        <CartIcon />
        <StyledCounter active={cart.length > 0} animate={animate}>{cart.length}</StyledCounter>
      </StyledIconContainer>
      <StyledChevron flipped={cartOpen ? 1 : 0} />
    </StyledCartNavBtn >
  )
}
