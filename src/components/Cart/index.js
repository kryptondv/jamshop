import React from "react"

import { StyledCartOverlay, StyledCart, Container } from "./styles"

export default function Cart() {
  return (
    <StyledCartOverlay>
      <Container>
        <StyledCart></StyledCart>
      </Container>
    </StyledCartOverlay>
  )
}
