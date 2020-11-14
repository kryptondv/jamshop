import styled from "styled-components"

export const StyledImg = styled.img`
  width: 329px;
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
  width: 410px;
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
`

export const StyledButton = styled.button`
  width: 146px;
  height: 40px;
  left: 777px;
  top: 483px;
  background: #ab528d;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;
  line-height: 15px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  border: none;

  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background: #923974;
    box-shadow: 0 0 10px rgba(171, 82, 141, 0.5);
  }
`

export const ProductContainer = styled.div`
  width: 90%;
  max-width: 1480px;
  margin: 0 auto;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`

export const Left = styled.div`
  width: 50%;
  padding-right: 64px;
  display: flex;
  justify-content: flex-end;
`
export const Right = styled.div`
  width: 50%;
  padding-left: 64px;
`
