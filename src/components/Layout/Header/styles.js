import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { media, container } from "~/utils/cssVariables.js"

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
`

export const StyledInner = styled.div`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-right: 22px;
  ${media.tablet} {
    padding-right: 40px;
  }
`

export const StyledLink = styled((props) => <Link {...props} />)`
  color: ${({ theme }) => theme.color.neutral};
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.color.neutralDark};
  }
`
