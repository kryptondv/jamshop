import styled from "styled-components"
import { media } from "~/layouts/mediaQueries.js"

export const StyledProductList = styled.div`
  margin-bottom: 135px;
  padding-top: 65px;
`

export const StyledHeading = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.neutralLight};
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 35px;
`
export const StyledLead = styled.p`
  max-width: 373px;
  margin: 0 auto 60px;
  color: ${({ theme }) => theme.color.neutralDark};
  font-size: 1rem;
  line-height: 20px;

  ${media.tablet} {
    margin: 0;
    margin-bottom: 60px;
  }
`

export const Container = styled.div`
  width: 90%;
  max-width: 1180px;
  margin: 0 auto;
  text-align: center;
  ${media.tablet} {
    text-align: left;
  }
`
