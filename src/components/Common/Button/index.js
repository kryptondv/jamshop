import React from "react"
import PropTypes from "prop-types"

import { StyledButton } from "./styles"

export default function Button({ children, handleClick, ...restProps }) {
  return (
    <StyledButton
      onClick={(e) => (handleClick ? handleClick(e) : null)}
      {...restProps}
    >
      {children}
    </StyledButton>
  )
}

const requiredPropsCheck = (props) => {
  if (!props.big && !props.small && !props.round) {
    return new Error(
      "One of 'big', 'small' or 'round' is required by Button component.")
  }
}

Button.propTypes = {
  big: requiredPropsCheck,
  small: requiredPropsCheck,
  round: requiredPropsCheck,
  secondaryColor: PropTypes.bool,
  secondaryFamily: PropTypes.bool,
  bold: PropTypes.bool,
  borderRadius: PropTypes.bool,
}
