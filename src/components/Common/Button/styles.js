import styled, { css } from "styled-components"

const type = {
  big: css`
    width: 145px;
    height: 40px;
    line-height: 16px;
    font-size: 13px;
  `,
  small: css`
    width: 90px;
    height: 30px;
    line-height: 14px;
    font-size: 12px;
  `,
  round: css`
    width: 45px;
    height: 45px;
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
  border-radius: ${({ borderRadius }) => borderRadius && "4px"};
  background: ${({ theme }) => theme.color.primary};
  color: ${({ secondaryColor, theme }) =>
    secondaryColor ? theme.color.neutralLight : theme.color.white};
  font-family: ${({ secondaryFamily, theme }) =>
    secondaryFamily ? theme.font.secondary : theme.font.primary};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.color.primaryHover};
    box-shadow: 0 0 12px ${({ theme }) => theme.color.primaryShadow};
  }

  &:active {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.primary};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.focus};
  }
`
