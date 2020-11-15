import React, { useContext } from "react"

import { CartContext } from "../../../contexts/cartContext"

import Button from "../../Common/Button"

import {
  StyledLink,
  StyledImg,
  StyledHeading,
  StyledDescription,
  ButtonContainer,
} from "./styles"

export default function ProductCard({ product }) {
  const { addProduct } = useContext(CartContext)

  const {
    excerpt,
    image: { publicURL },
    name,
    slug,
  } = product

  const addToCart = (e) => {
    e.preventDefault()
    addProduct(product)
  }

  return (
    <StyledLink to={`products/${slug}`}>
      <StyledImg src={publicURL} alt="" />
      <StyledHeading>{name}</StyledHeading>
      <StyledDescription>{excerpt}</StyledDescription>
      <ButtonContainer>
        <Button
          handleClick={(e) => addToCart(e)}
          w="44"
          h="44"
          radius="50%"
          fontFamily="Roboto, sans-serif"
          fontSize="32px"
          fontWeight="700"
          lineHeight="37px"
          color="#fff"
        >
          +
        </Button>
      </ButtonContainer>
    </StyledLink>
  )
}
