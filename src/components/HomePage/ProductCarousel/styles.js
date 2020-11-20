import React from "react"
import styled, { css } from "styled-components"
import ArrowLeftIcon from "~/assets/icons/arrow-left.svg"
import ArrowRightIcon from "~/assets/icons/arrow-right.svg"
import { media, container } from "~/utils/cssVariables.js"

const arrow = css`
  width: 40px;

  &:active {
    filter: brightness(0.85);
  }

  ${media.small} {
    width: 62px;
  }
`

const btnContainer = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const SliderContainer = styled.div`
  ${container}
  position: relative;
  width: 65%;
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

  ${media.small} {
    left: -50px;
  }

  ${media.tablet} {
    left: -70px;
  }
`
export const BtnContainerRight = styled.div`
  ${btnContainer}
  right: -45px;

  ${media.small} {
    right: -50px;
  }

  ${media.small} {
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
