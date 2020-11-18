import React, { useContext } from "react"
import PropTypes from "prop-types"

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
          big
          bold
          borderRadius
          secondaryFamily
        >
          Add to cart
        </Button>
      </Right>
    </ProductContainer>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
  }),
}
