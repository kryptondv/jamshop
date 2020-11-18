import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled((props) => <Link {...props} />)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 265px;
  height: 273px;
  padding: 32px 22px 22px 22px;
  border: 3px solid ${({ theme }) => theme.color.productCardBorder};
  border-radius: 2px;
  background: ${({ theme }) => theme.color.backgroundLight};
  text-decoration: none;
  transition: 0.1s ease-out;

  &:hover {
    background: ${({ theme }) => theme.color.backgroundHover};
    transform: scale(0.99);
    box-shadow: 0 0 10px ${({ theme }) => theme.color.productCardShadow};
  }

  @media (max-width: 450px) {
    width: 250px;
    height: 290px;
  }

  @media (max-width: 380px) {
    width: 240px;
  }
`

export const StyledImg = styled.img`
  align-self: center;
  margin-bottom: 37px;

  @media (max-width: 380px) {
    margin-bottom: 20px;
  }
`

export const StyledHeading = styled.h3`
  margin-bottom: 3px;
  color: ${({ theme }) => theme.color.neutralLight};
  font-size: 1.125rem;
  line-height: 22px;
  text-transform: uppercase;
`

export const StyledDescription = styled.p`
  max-width: 192px;
  margin: 0;
  color: ${({ theme }) => theme.color.neutralDark};
  font-size: 0.875rem;

  @media (max-width: 380px) {
    max-width: 170px;
    margin-bottom: 20px;
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`
