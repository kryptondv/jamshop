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

  @media (max-width: 900px) {
    height: 600px;
    background-size: 40%;
  }

  @media (max-width: 780px) {
    min-height: 600px;
    height: 70vh;
    margin-bottom: 20px;
  }
`

export const StyledHeading = styled.h1`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 3rem;
  line-height: 55px;
  color: #e4e3e3;
  padding-left: 34px;
  height: 127px;
  margin-bottom: 33px;
  position: relative;

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

  @media (max-width:780px) {
    flex-direction: column;
    padding-top: 150px;
  }
`

export const Left = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 780px) {
    width: 100%;
  }
`

export const Right = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
