import React from 'react';
import styled from "styled-components"
import Chevron from "../../../assets/icons/chevron.svg"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 20;
  cursor: ${(props) => (props.active ? "pointer" : "default")}; ;
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
  font-family: "Roboto", sans-serif;
  width: 12px;
  height: 13px;
  line-height: 1;
  font-size: 8px;
  background: ${(props) => (props.active ? "#AB528D" : "#301346")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  right: -4px;
  top: 8px;
`

