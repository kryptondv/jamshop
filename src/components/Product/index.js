import React from "react"

import {
  ProductContainer,
  Left,
  Right,
  StyledImg,
  StyledTag,
  StyledHeading,
  StyledDescription,
  StyledPrice,
  StyledButton,
} from "./styles"

export default function Product({ product }) {
  const {
    name,
    description,
    image: { publicURL },
    price,
    tag,
  } = product

  return (
    <ProductContainer>
      <Left>
        <StyledImg src={publicURL} alt="product" />
      </Left>
      <Right>
        <StyledTag>{tag}</StyledTag>
        <StyledHeading>{name}</StyledHeading>
        <StyledDescription>{description}</StyledDescription>
        <StyledPrice>${price}</StyledPrice>
        <StyledButton>Add to cart</StyledButton>
      </Right>
    </ProductContainer>
  )
}
