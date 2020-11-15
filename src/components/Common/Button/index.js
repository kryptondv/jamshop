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

Button.propTypes = {
  w: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
}

Button.defaultProps = {
  radius: "0",
  lineHeight: "1",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: "400",
}
