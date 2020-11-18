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
  height: 697px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: right top;

  @media (max-width: 900px) {
    height: 600px;
    background-size: 40%;
  }

  @media (max-width: 780px) {
    height: 70vh;
    min-height: 600px;
    margin-bottom: 20px;
  }
`

export const StyledHeading = styled.h1`
  position: relative;
  height: 127px;
  margin-bottom: 33px;
  padding-left: 34px;
  color: ${({ theme }) => theme.color.neutral};
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 3rem;
  line-height: 55px;

  @media (min-width: 1400px) {
    font-size: 3.5rem;
  }

  @media (max-width: 1200px) {
    padding-left: 0;
    font-size: 2.5rem;
  }

  @media (max-width: 456px) {
    font-size: 2rem;
    line-height: 1.5;
  }

  @media (max-width: 300px) {
    font-size: 1.5rem;
  }

  &::after {
    content: url("${HeroDecor}");
    position: absolute;
    top: -15px;
    right: -95px;
    z-index: -1;
    @media (max-width: 980px) {
      display: none;
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
  width: clamp(200px, 40vw, 393px);
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 780px) {
    flex-direction: column;
    padding-top: 150px;
  }
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  @media (max-width: 780px) {
    width: 100%;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding-left: 32px;

  @media (max-width: 940px) {
    padding-left: 0;
  }

  @media (max-width: 780px) {
    width: 100%;
    align-items: center;
    padding-top: 30px;
  }
`
