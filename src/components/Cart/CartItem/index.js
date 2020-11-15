import React from "react"
import PropTypes from "prop-types"

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

CartItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  number: PropTypes.number.isRequired,
}
