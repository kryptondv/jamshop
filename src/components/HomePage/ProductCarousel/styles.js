import React from "react"
import styled, { css } from "styled-components"
import ArrowLeftIcon from "~/assets/icons/arrow-left.svg"
import ArrowRightIcon from "~/assets/icons/arrow-right.svg"

const Arrow = css`
  &:active {
    filter: brightness(0.85);
  }

  @media (max-width: 500px) {
    width: 50px;
  }

  @media (max-width: 420px) {
    width: 40px;
  }
`

export const SliderContainer = styled.div`
  position: relative;
  width: 65%;
  max-width: 1480px;
  margin: 0 auto;
`
export const SliderButton = styled.button`
  border: none;
  border-radius: 80%;
  background: transparent;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(0.95);
  }
`

export const BtnContainerLeft = styled.div`
  position: absolute;
  top: 50%;
  left: -70px;
  transform: translateY(-50%);

  @media (max-width: 500px) {
    left: -50px;
  }

  @media (max-width: 300px) {
    left: -45px;
  }
`
export const BtnContainerRight = styled.div`
  position: absolute;
  top: 50%;
  right: -70px;
  transform: translateY(-50%);

  @media (max-width: 500px) {
    right: -50px;
  }

  @media (max-width: 300px) {
    right: -45px;
  }
`

export const SliderItem = styled.div`
  width: 100%;
  /* !important flag for overriding react-slick styles  */
  display: flex !important;
  justify-content: center;
`

export const ArrowLeft = styled((props) => <ArrowLeftIcon {...props} />)`
  ${Arrow}
`

export const ArrowRight = styled((props) => <ArrowRightIcon {...props} />)`
  ${Arrow}
`
