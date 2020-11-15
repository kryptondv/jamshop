import styled from "styled-components"

export const StyledButton = styled.button`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  border: none;
  border-radius: ${(props) => props.radius};
  background: #ab528d;
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-transform: uppercase;
  transition: 0.2s ease-out;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #923974;
    box-shadow: 0 0 12px rgba(171, 82, 141, 0.5);
  }

  &:active {
    background: #fff;
    color: #ab528d;
  }

  &:focus {
    border: 1px solid #bbb;
  }
`
