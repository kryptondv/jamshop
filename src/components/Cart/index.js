import React, { useContext, useRef } from "react"

import { CartContext } from "../../contexts/cartContext"

import { StyledCartOverlay, StyledCart, Container } from "./styles"

export default function Cart() {
  const { cart, setCartOpen } = useContext(CartContext)

  const cartEl = useRef(false)

  console.log(cart)
  const renderItems = () => {}

  const handleOutsideClick = (target) => {
    if(!cartEl.current.contains(target)){
      setCartOpen(false)
    }
  }

  return (
    <StyledCartOverlay onClick={e => handleOutsideClick(e.target)}>
      <Container>
        <StyledCart ref={cartEl}></StyledCart>
      </Container>
    </StyledCartOverlay>
  )
}
