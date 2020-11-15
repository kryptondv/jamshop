import React from "react"
import styled from "styled-components"
import Chevron from "../../../assets/icons/chevron.svg"

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
  cursor: ${(props) => (props.active ? "pointer" : "default")};
`

export const StyledIconContainer = styled.div`
  position: relative;
`

export const StyledChevron = styled((props) => <Chevron {...props} />)`
  position: absolute;
  right: -18px;
  transition: 0.2s ease-out;
  transform: ${(props) => (props.flipped ? "rotateX(180deg)" : "initial")};
`

export const StyledCounter = styled.span`
  position: absolute;
  right: -4px;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 13px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#AB528D" : "#301346")};
  font-family: "Roboto", sans-serif;
  font-size: 8px;
  line-height: 1;
  transition: 0.1s ease-out;
  transform: ${(props) => (props.animate ? "scale(1.2)" : "initial")};
`
