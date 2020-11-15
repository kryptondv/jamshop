import React from 'react';
import styled from "styled-components"
import ArrowLeftIcon from "../../../assets/icons/arrow-left.svg"
import ArrowRightIcon from "../../../assets/icons/arrow-right.svg"

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
  transform: translateY(-50%);
  right: -70px;

  @media (max-width: 500px) {
    right: -50px;
  }

  @media (max-width: 300px) {
    right: -45px;
  }
`

export const SliderItem = styled.div`
  width: 100%;
  display: flex !important;
  justify-content: center;
`

export const ArrowLeft = styled((props) => <ArrowLeftIcon {...props} />)`
  @media (max-width: 500px) {
    width: 50px;
  }

  @media (max-width: 420px) {
    width: 40px;
  }

  
`

export const ArrowRight = styled((props) => <ArrowRightIcon {...props} />)`
  @media (max-width: 500px) {
    width: 50px;
  }

  @media (max-width: 420px) {
    width: 40px;
  }
`
