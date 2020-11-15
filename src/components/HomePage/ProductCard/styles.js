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
  border: 3px solid #969393;
  border-radius: 2px;
  background: #331f41;
  text-decoration: none;
  transition: 0.1s ease-out;

  &:hover {
    background: #261234;
    transform: scale(0.99);
    box-shadow: 0 0 10px rgba(150, 147, 147, 0.3);
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
  color: #eeeeee;
  font-size: 1.125rem;
  line-height: 22px;
  text-transform: uppercase;
`

export const StyledDescription = styled.p`
  max-width: 192px;
  margin: 0;
  color: #c4c4c4;
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
