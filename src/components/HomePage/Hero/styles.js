import styled, { keyframes } from "styled-components"
import HeroDecor from "../../../assets/elements/hero_decor.svg"

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
  }
`

export const StyledHero = styled.section`
  height: 697px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: right top;
`

export const StyledHeading = styled.h1`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 48px;
  line-height: 55px;
  color: #e4e3e3;
  padding-left: 34px;
  height: 127px;
  margin-bottom: 33px;
  position: relative;

  &::after {
    content: url("${HeroDecor}");
    position: absolute;
    top: -15px;
    right: -95px;
    z-index: -1;
  }

  span {
    display: block;
    opacity: 0;
    animation: ${fadeUp} .5s forwards;
    overflow: hidden;

    &:nth-of-type(1) {
      animation-delay: 0.1s;
    }
  }
`
export const StyledButton = styled.button`
  width: 146px;
  height: 40px;
  background: #ab528d;
  border: none;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    background: #923974;
    box-shadow: 0 0 10px rgba(171, 82, 141, 0.5);
  }
`

export const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Left = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Right = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 32px;
`
