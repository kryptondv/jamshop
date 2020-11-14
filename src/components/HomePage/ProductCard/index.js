import React from "react"
import { Link } from "gatsby"

import {
  StyledLink,
  StyledImg,
  StyledHeading,
  StyledDescription,
  StyledButton,
} from "./styles"

export default function ProductCard({ product }) {
  const {
    excerpt,
    image: { publicURL },
    name,
    slug,
  } = product

  const addProduct = (e) => {
    e.preventDefault()
    console.log(name)
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
