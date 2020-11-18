import React, { useContext } from "react"
import PropTypes from "prop-types"

import { CartContext } from "~/contexts/cartContext"

import Button from "components/Common/Button"

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
        <Button handleClick={(e) => addToCart(e)} round bold secondaryFamily>
          +
        </Button>
      </ButtonContainer>
    </StyledLink>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
}
