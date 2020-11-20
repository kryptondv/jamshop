import React from "react"
import styled, { css } from "styled-components"
import ArrowLeftIcon from "~/assets/icons/arrow-left.svg"
import ArrowRightIcon from "~/assets/icons/arrow-right.svg"

const arrow = css`
  width: 40px;

  &:active {
    filter: brightness(0.85);
  }

  @media (min-width: 420px) {
    width: 50px;
  }
  @media (min-width: 500px) {
    width: 62px;
  }
`

const btnContainer = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
  ${btnContainer}
  left: -45px;

  @media (min-width: 300px) {
    left: -50px;
  }

  @media (min-width: 500px) {
    left: -70px;
  }
`
export const BtnContainerRight = styled.div`
  ${btnContainer}
  right: -45px;

  @media (min-width: 300px) {
    right: -50px;
  }

  @media (min-width: 500px) {
    right: -70px;
  }
`

export const SliderItem = styled.div`
  width: 100%;
  /* !important flag for overriding react-slick styles  */
  display: flex !important;
  justify-content: center;
`

export const ArrowLeft = styled((props) => <ArrowLeftIcon {...props} />)`
  ${arrow}
`

export const ArrowRight = styled((props) => <ArrowRightIcon {...props} />)`
  ${arrow}
`
