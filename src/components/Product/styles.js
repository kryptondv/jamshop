import styled from "styled-components"
import { media } from "~/layouts/mediaQueries.js"

export const StyledImg = styled.img`
  width: 40%;
  min-width: 200px;

  ${media.tablet} {
    width: 330px;
  }
`
export const StyledTag = styled.span`
  display: block;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 0.875rem;
  line-height: 16px;
  text-transform: uppercase;
`

export const StyledHeading = styled.h2`
  margin-bottom: 19px;
  color: ${({ theme }) => theme.color.neutralLight};
  font-size: 2rem;
  font-weight: 700;
  line-height: 40px;
`

export const StyledDescription = styled.p`
  max-width: 410px;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.color.neutralDark};
  font-size: 1.125rem;
  line-height: 21px;
`
export const StyledPrice = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 26px;
  color: ${({ theme }) => theme.color.neutralLight};
  margin-bottom: 17px;
  position: relative;
  left: -5px;
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1400px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 100px 0 50px;
  font-family: ${({ theme }) => theme.font.secondary};

  ${media.tablet} {
    flex-direction: row;
  }
`

export const Left = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  ${media.tablet} {
    width: 50%;
    margin: 0;
    padding-right: 64px;
    justify-content: flex-end;
  }
`
export const Right = styled.div`
  width: 100%;

  ${media.tablet} {
    width: 50%;
    padding-left: 64px;
  }
`
