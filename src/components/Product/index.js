import React, { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import Button from "../Common/Button"

import {
  ProductContainer,
  Left,
  Right,
  StyledImg,
  StyledTag,
  StyledHeading,
  StyledDescription,
  StyledPrice,
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
        <Button
          handleClick={() => addProduct(product)}
          w="146"
          h="40"
          radius="4px"
          fontFamily="Roboto, sans-serif"
          fontSize="13px"
          fontWeight="700"
          lineHeight="15px"
          color="#fff"
        >
          Add to cart
        </Button>
      </Right>
    </ProductContainer>
  )
}
