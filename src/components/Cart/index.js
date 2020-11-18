import React, { useContext, useRef } from "react"

import { CartContext } from "~/contexts/cartContext"

import CartItem from "./CartItem"
import Button from "components/Common/Button"

import {
  StyledCartOverlay,
  StyledCart,
  Container,
  ItemsContainer,
} from "./styles"

export default function Cart() {
  const { cart, setCartOpen } = useContext(CartContext)

  const cartEl = useRef(null)

  const renderItems = () => {
    return cart.map((item, i) => (
      <CartItem key={item.slug + i} item={item} number={i + 1} />
    ))
  }

  const handleOutsideClick = (target) => {
    if (!cartEl.current.contains(target)) {
      setCartOpen(false)
    }
  }

  return (
    <StyledCartOverlay onClick={(e) => handleOutsideClick(e.target)}>
      <Container>
        <StyledCart ref={cartEl}>
          <ItemsContainer>{renderItems()}</ItemsContainer>
          <Button small secondaryFamily secondaryColor>
            Submit
          </Button>
        </StyledCart>
      </Container>
    </StyledCartOverlay>
  )
}
