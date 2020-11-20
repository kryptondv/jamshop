import styled, { keyframes } from "styled-components"
import HeroDecor from "~/assets/elements/hero_decor.svg"

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
  height: 70vh;
  min-height: 600px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 40%;

  @media (min-width: 780px) {
    height: 70vh;
    min-height: 600px;
    margin: 0;
  }

  @media (min-width: 900px) {
    height: 680px;
    background-size: auto;
  }
`

export const StyledHeading = styled.div`
  position: relative;
  min-height: 127px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.color.neutral};
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;

  @media (min-width: 456px) {
    font-size: 2rem;
    line-height: 1.5;
  }

  @media (min-width: 1200px) {
    padding-left: 0;
    font-size: 2.5rem;
  }

  @media (min-width: 1400px) {
    font-size: 3.5rem;
  }

  &::after {
    @media (min-width: 980px) {
      content: url("${HeroDecor}");
      position: absolute;
      top: -15px;
      right: -95px;
      z-index: -1;
    }
  }

  span {
    display: block;
    opacity: 0;
    animation: ${fadeUp} 0.5s forwards;

    &:nth-of-type(1) {
      animation-delay: 0.1s;
    }
  }
`

export const StyledImage = styled.img`
  width: clamp(200px, 40vw, 395px);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding-top: 150px;

  @media (min-width: 780px) {
    flex-direction: row;
    padding: 0;
  }
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 780px) {
    width: 50%;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;

  @media (min-width: 780px) {
    width: 50%;
    align-items: flex-start;
    padding-top: 0;
    padding-left: 30px;
  }

`
