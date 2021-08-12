import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import Image from "../../images/background2.jpg"

const HeroContainer = styled.div`
  background: url(${Image}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;
`
const Title = styled.h1`
  color: #fff;
  font-size: 100px;
  margin-top: 0px;

  @media screen and (max-width: 960px) {
    font-size: 70px;
  }
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
`

const Subtext = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`

const HeroBtns = styled.div`
  margin-top: 32px;
`

const HeroSection = () => {
  return (
    <HeroContainer>
      <Title>Travel More</Title>
      <Subtext>Plan your next trip today</Subtext>
      <HeroBtns>
        <Button fontBig big primary>
          Get Started
        </Button>
      </HeroBtns>
    </HeroContainer>
  )
}

export default HeroSection
