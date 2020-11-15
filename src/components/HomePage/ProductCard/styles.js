import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled((props) => <Link {...props} />)`
  width: 265px;
  height: 273px;
  border: 3px solid #969393;
  border-radius: 2px;
  background: #331f41;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 22px 22px 22px;
  position: relative;
  text-decoration: none;
  transition: 0.1s ease-out;

  &:hover {
    transform: scale(0.99);
    background: #261234;
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
  text-transform: uppercase;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 3px;
  color: #eeeeee;
`

export const StyledDescription = styled.p`
  font-size: 14px;
  color: #c4c4c4;
  margin: 0;
  max-width: 192px;

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
