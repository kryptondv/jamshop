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
  animation: ${fadeIn} 0.1s ease-out;
`

export const StyledCart = styled.div`
  position: absolute;
  top: 59px;
  width: 281px;
  height: 276px;
  background: ${({ theme }) => theme.color.cartBackground};
  right: 0;
  border: 2px solid ${({ theme }) => theme.color.cartBorder};
  border-radius: 4px;
  padding: 37px 30px 23px 19px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Container = styled.div`
  width: 90%;
  max-width: 1480px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`
export const ItemsContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: auto;
  margin-bottom: 10px;
  max-height: 200px;
  padding-right: 2px;

  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.color.primaryShadow};
    -webkit-box-shadow: inset 0 0 6px
      ${({ theme }) => theme.color.primaryShadow};
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.color.primary};
    -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.color.primary};
  }
`
