import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "~/layouts/mediaQueries.js"

export const StyledLink = styled((props) => <Link {...props} />)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 310px;
  padding: 32px 22px 22px 22px;
  border: 3px solid ${({ theme }) => theme.color.productCardBorder};
  border-radius: 2px;
  background: ${({ theme }) => theme.color.backgroundLight};
  text-decoration: none;
  transition: 0.1s ease-out;

  ${media.small} {
    width: 265px;
    height: 275px;
  }

  &:hover {
    background: ${({ theme }) => theme.color.backgroundHover};
    transform: scale(0.99);
    box-shadow: 0 0 10px ${({ theme }) => theme.color.productCardShadow};
  }
`

export const StyledImg = styled.img`
  align-self: center;
  margin-bottom: 20px;

  ${media.small} {
    margin-bottom: 35px;
  }
`

export const StyledHeading = styled.h3`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.neutralLight};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
`

export const StyledDescription = styled.p`
  max-width: 170px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.neutralDark};
  font-size: 0.875rem;
  line-height: 17px;

  ${media.small} {
    max-width: 190px;
    margin: 0;
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`
