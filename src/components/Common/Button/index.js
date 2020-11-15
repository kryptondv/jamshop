import React from "react"

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
