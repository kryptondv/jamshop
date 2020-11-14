import React, { useContext } from "react"

import { CartContext } from "../../../contexts/cartContext"

import {
  StyledLink,
  StyledImg,
  StyledHeading,
  StyledDescription,
  StyledButton,
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
      <StyledButton onClick={(e) => addToCart(e)}>+</StyledButton>
    </StyledLink>
  )
}
