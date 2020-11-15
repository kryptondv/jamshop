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
    box-shadow: 0 0 10px rgba(150, 147, 147, .3);
  }
`

export const StyledImg = styled.img`
  align-self: center;
  margin-bottom: 37px;
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
  width: 192px;
`

export const StyledButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: #fff;
  background: #ab528d;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease-out;
  outline: none;

  &:hover {
    background: #923974;
    box-shadow: 0 0 10px rgba(171, 82, 141, 0.4);
  }

  &:active {
    background: #fff;
    color: #ab528d;
  }
`
