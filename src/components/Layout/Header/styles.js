import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
`

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding-right: 40px;

  @media (max-width: 780px) {
    padding-right: 22px;
  }
`

export const StyledLink = styled((props) => <Link {...props} />)`
  color: #e4e3e3;
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  transition: 0.2s ease-out;
  text-transform: uppercase;

  &:hover {
    color: #b1b0b0;
  }
`
