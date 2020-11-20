import styled, { keyframes } from "styled-components"
import HeroDecor from "~/assets/elements/hero_decor.svg"
import { media } from "~/layouts/mediaQueries.js"

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
  margin-bottom: 50px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 40%;

  ${media.tablet} {
    margin: 0;
    padding-top: 200px;
  }

  ${media.desktop} {
    margin-bottom: 70px;
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

  ${media.small} {
    font-size: 2rem;
    line-height: 1.5;
  }
  ${media.tablet} {
    font-size: 2rem;
    line-height: 1.5;
  }

  ${media.desktop} {
    padding-left: 0;
    font-size: 3rem;
  }

  ${media.large} {
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
  width: 60%;

  ${media.tablet} {
    /* width: clamp(200px, 100%, 395px); */
  }
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

  ${media.tablet} {
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

  ${media.tablet} {
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

  ${media.tablet} {
    width: 50%;
    align-items: flex-start;
    padding-top: 0;
    padding-left: 30px;
  }
`
