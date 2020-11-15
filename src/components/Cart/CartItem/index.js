import React from "react"

import { StyledItem, StyledImg, StyledName, StyledPrice } from "./styles"

export default function CartItem({ item, number }) {
  const {
    image: { publicURL },
    price,
    name,
  } = item
  return (
    <StyledItem>
      <StyledImg src={publicURL} alt="product" />
      <StyledName>
        {name} #{number}
      </StyledName>
      <StyledPrice>${price}</StyledPrice>
    </StyledItem>
  )
}
