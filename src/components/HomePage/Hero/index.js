import React from "react"

import HeroBackground from "../../../assets/elements/hero_background.svg"
import HeroImage from "../../../assets/elements/monitor.svg"
import Button from "../../Common/Button"

import {
  StyledHero,
  StyledImage,
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
          <StyledImage src={HeroImage} alt="Vector Monitor" />
        </Left>
        <Right>
          <StyledHeading>
            <span>Don't waste time</span>
            <span>on boring things</span>
          </StyledHeading>
          <Button
            w="146"
            h="40"
            radius="4px"
            fontFamily="Montserrat, sans-serif"
            fontSize="13px"
            fontWeight="700"
            color="#fff"
            lineHeight="16px"
          >
            GO EXPLORE
          </Button>
        </Right>
      </Container>
    </StyledHero>
  )
}

export default HomepageHero
