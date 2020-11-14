import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: #1C042E;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    position: ${(props) => (props.cartOpen ? "fixed" : "static")};
    width: 100%;
    overflow-y: scroll;
  }
`
