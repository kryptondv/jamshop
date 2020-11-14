import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const StyledCartOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: rgba(28, 4, 46, 0.55);
  backdrop-filter: blur(10px);
  animation: ${fadeIn} .1s ease-out;
`

export const StyledCart = styled.div`
  width: 281px;
  height: 276px;
  position: absolute;
  top: 59px;
  background: #220538;
  right: 0;
  border: 2px solid #f5f5f5;
  border-radius: 4px;
`

export const StyledButton = styled.button`

`

export const Container = styled.div`
  width: 90%;
  max-width: 1480px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`

