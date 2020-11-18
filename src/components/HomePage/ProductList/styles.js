import styled from "styled-components"

export const StyledProductList = styled.div`
  margin-bottom: 135px;
  padding-top: 63px;
`

export const StyledHeading = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.neutralLight};
  font-size: 1.75rem;
  line-height: 34px;
`
export const StyledLead = styled.p`
  max-width: 373px;
  margin-bottom: 62px;
  color: ${({ theme }) => theme.color.neutralDark};
  font-size: 1rem;
  line-height: 20px;
`

export const Container = styled.div`
  width: 90%;
  max-width: 1180px;
  margin: 0 auto;
  @media (max-width: 780px) {
    text-align: center;
  }
`
