import React from 'react';
import styled from "styled-components"
import Chevron from "../../../assets/icons/chevron.svg"

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
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
`
