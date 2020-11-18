import styled, { css } from "styled-components"

const type = {
  big: css`
    width: 146px;
    height: 40px;
    line-height: 16px;
    font-size: 13px;
  `,
  small: css`
    width: 89px;
    height: 27px;
    line-height: 14px;
    font-size: 12px;
  `,
  round: css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    line-height: 37px;
    font-size: 32px;
  `,
}

export const StyledButton = styled.button`
/* add styles for button type */
  ${(props) => {
    for (const key in type) {
      if (props[key]) {
        return type[key]
      }
    }
  }}
  
  border: none;
  border-radius: ${(props) => props.borderRadius && "4px"};
  background: #ab528d;
  color: ${(props) => (props.secondaryColor ? "#eeeeee" : "#fff")};
  font-family: ${(props) =>
    props.secondaryFamily ? "Roboto, sans-serif" : "Montserrat, sans-serif"};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
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
