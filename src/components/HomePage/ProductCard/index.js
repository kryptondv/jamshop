import React, { useContext } from "react"

import { CartContext } from '../../../contexts/cartContext';

import {
  StyledLink,
  StyledImg,
  StyledHeading,
  StyledDescription,
  StyledButton,
} from "./styles"

export default function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);


  const {
    excerpt,
    image: { publicURL },
    name,
    slug,
  } = product

  const addProduct = (e) => {
    e.preventDefault()
    setCart([...cart, product])
  }

  return (
      <StyledLink to={`products/${slug}`}>
        <StyledImg src={publicURL} alt="" />
        <StyledHeading>{name}</StyledHeading>
        <StyledDescription>{excerpt}</StyledDescription>
        <StyledButton onClick={(e) => addProduct(e)}>+</StyledButton>
      </StyledLink>
  )
}
