import styled from "styled-components"

export const StyledImg = styled.img`
  width: 329px;

  @media (max-width: 768px) {
    width: 40vw;
    min-width: 200px;
  }
`
export const StyledTag = styled.span`
  display: block;
  margin-bottom: 11px;
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 0.875rem;
  line-height: 16;
  text-transform: uppercase;
`

export const StyledHeading = styled.h2`
  margin-bottom: 19px;
  color: ${({ theme }) => theme.color.neutralLight};
  font-size: 2rem;
  font-weight: 700;
  line-height: 37px;
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
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.secondary};

  @media (max-width: 768px) {
    padding: 100px 0 50px;
    height: 100%;
    min-height: 100vh;
    flex-direction: column;
  }
`

export const Left = styled.div`
  width: 50%;
  padding-right: 64px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;
  }
`
export const Right = styled.div`
  width: 50%;
  padding-left: 64px;

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`
