import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.color.background};
    font-family: ${({ theme }) => theme.font.primary};
    position: ${(props) => (props.cartOpen ? "fixed" : "static")};
    width: 100%;
    overflow-y: scroll;
    -webkit-tap-highlight-color: transparent;
  }
`
