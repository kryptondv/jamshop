import React from "react"
import styled from "styled-components"
import Chevron from "~/assets/icons/chevron.svg"

export const StyledCartNavBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: transparent;
  color: white;
  z-index: 20;
  outline: none;
  cursor: ${({ active }) => (active ? "pointer" : "default")};
`

export const StyledIconContainer = styled.div`
  position: relative;
`

export const StyledChevron = styled((props) => <Chevron {...props} />)`
  position: absolute;
  right: -20px;
  transition: 0.2s ease-out;
  transform: ${({ flipped }) => (flipped ? "rotateX(180deg)" : "initial")};
`

export const StyledCounter = styled.span`
  position: absolute;
  right: -5px;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ active, theme }) => (active ? theme.color.counterActive : theme.color.counter)};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 8px;
  line-height: 1;
  transition: 0.1s ease-out;
  transform: ${({ animate }) => (animate ? "scale(1.2)" : "initial")};
`
