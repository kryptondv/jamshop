import React from "react"

import HeroBackground from "../../../assets/elements/hero_background.svg"
import HeroImage from "../../../assets/elements/monitor.svg"
import HeroDecor from "../../../assets/elements/hero_decor.svg"

import {
  StyledHero,
  StyledHeading,
  StyledButton,
  Container,
  Left,
  Right,
} from "./styles"

function HomepageHero() {
  return (
    <StyledHero background={HeroBackground}>
      <Container>
        <Left>
          <img src={HeroImage} alt="Vector Monitor" />
        </Left>
        <Right>
          <StyledHeading>
            Don't waste time
            <br />
            on boring things
          </StyledHeading>
          <StyledButton>GO EXPLORE</StyledButton>
        </Right>
      </Container>
    </StyledHero>
  )
}

export default HomepageHero
