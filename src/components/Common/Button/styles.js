import styled from "styled-components"

export const StyledButton = styled.button`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background: #ab528d;
  color: ${(props) => props.color};
  border: none;
  border-radius: ${(props) => props.radius ? props.radius : '0'};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "1")};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease-out;
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
    border: 1px solid #ddd;
  }
`