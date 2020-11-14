import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 42px;
`

export const StyledIconContainer = styled.div`
  position: relative;
`

export const StyledCounter = styled.span`
  position: absolute;
  font-family: "Roboto", sans-serif;
  width: 12px;
  height: 13px;
  line-height: 1;
  font-size: 8px;
  background: #301346;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  right: -4px;
  top: 8px;
`
