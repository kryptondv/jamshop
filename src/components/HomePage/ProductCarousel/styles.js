import styled from "styled-components"

export const SliderContainer = styled.div`
  width: 65%;
   margin: 0 auto;
   max-width: 1480px;
   position: relative;
`
export const SliderButton = styled.button`
  border-radius: 50%;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: .2s ease-out;


  &:hover {
    transform: scale(.95)
  }
`

export const BtnContainerLeft = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -70px;
`
export const BtnContainerRight = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -70px;
`

export const SliderItem = styled.div`
  width: 100%;
  display: flex !important;
  justify-content: center;
`