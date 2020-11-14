import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #1C042E;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    position: ${props => props.cartOpen ? "fixed" : "static"};
    width: 100%;
    min-height: 100vh;
    overflow: scroll;
  }
`
