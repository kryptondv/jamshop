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
