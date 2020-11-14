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
  width: 90%;
  max-width: 1480px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
`

export const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
`
