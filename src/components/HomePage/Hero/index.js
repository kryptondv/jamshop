import React from "react"

import HeroBackground from "~/assets/elements/hero_background.svg"
import HeroImage from "~/assets/elements/monitor.svg"
import { Button } from "components"

import {
  StyledHero,
  StyledImage,
  StyledHeading,
  Container,
  Left,
  Right,
} from "./styles"

function HomepageHero() {
  return (
    <StyledHero background={HeroBackground}>
      <Container>
        <Left>
          <StyledImage src={HeroImage} alt="Vector Monitor" />
        </Left>
        <Right>
          <StyledHeading>
            <span>Don&apos;t waste time</span>
            <span>on boring things</span>
          </StyledHeading>
          <Button big borderRadius bold>
            Go explore
          </Button>
        </Right>
      </Container>
    </StyledHero>
  )
}

export default HomepageHero
