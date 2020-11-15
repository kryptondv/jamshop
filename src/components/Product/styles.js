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
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  color: #fbe067;
  margin-bottom: 11px;
`

export const StyledHeading = styled.h2`
  font-size: 32px;
  line-height: 37px;
  color: #eeeeee;
  margin-bottom: 19px;
`

export const StyledDescription = styled.p`
  max-width: 410px;
  font-size: 18px;
  line-height: 21px;
  color: #c4c4c4;
  margin-bottom: 25px;
`
export const StyledPrice = styled.span`
  display: block;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #eeeeee;
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
  font-family: "Roboto", sans-serif;

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
