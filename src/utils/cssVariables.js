import { css } from "styled-components"

export const media = {
  small: "@media (min-width: 456px)",
  tablet: "@media (min-width: 768px)",
  desktop: "@media (min-width: 1200px)",
  large: "@media (min-width: 1400px)",
}

export const container = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`

export const fontSize = {
  xs: "0.875rem",
  s: "1.125rem",
  sm: "1.75rem",
  m: "2.125rem",
  l: "3rem",
  xl: "3.5rem",
}
