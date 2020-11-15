import React, { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"

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
  const { addProduct } = useContext(CartContext)

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
        <StyledButton onClick={() => addProduct(product)}>Add to cart</StyledButton>
      </Right>
    </ProductContainer>
  )
}
