import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Project from "../components/project"
import { withStyles } from "@material-ui/core/styles"
import styled from "styled-components"

const Order = () => {
  return (
    <StyledProjectContainer>
      <a href="http://order.thyhive.com">
        <StyledImage
          className="webImage"
          src={require("../images/order.png")}
        />
      </a>
      <StyledProjectTitleDiv>
        <StyledProjectName>Order </StyledProjectName>
      </StyledProjectTitleDiv>

      <StyleMiddleWrapper className="middleWarpper">
        <StyledDescriptionText classsName="descriptionText">
          A mobile first design platform that can help family and friends to
          order a batch of goods as a group.
        </StyledDescriptionText>
        <Grid container>
          <StyledGridButton xs={6}>
            <StyledButton
              size="small"
              variant="outlined"
              href="http://order.thyhive.com"
            >
              Go To Site
            </StyledButton>
          </StyledGridButton>

          <StyledGridButton xs={6}>
            <StyledButton
              size="small"
              variant="outlined"
              href="#outlined-buttons"
            >
              GitHub
            </StyledButton>
          </StyledGridButton>
        </Grid>
      </StyleMiddleWrapper>
    </StyledProjectContainer>
  )
}

const Property = () => {
  return (
    <StyledProjectContainer>
      <a href="https://musing-lamarr-e2a2c5.netlify.com/">
        <StyledImage
          className="webImage"
          src={require("../images/property.png")}
        />
      </a>
      <StyledProjectTitleDiv>
        <StyledProjectName>Property </StyledProjectName>
      </StyledProjectTitleDiv>
      <StyleMiddleWrapper className="middleWarpper">
        <StyledDescriptionText classsName="descriptionText">
          A quick and esay way to find out your property's worth
        </StyledDescriptionText>
        <Grid container>
          <StyledGridButton xs={6}>
            <StyledButton
              size="small"
              variant="outlined"
              href="http://order.thyhive.com"
            >
              Go To Site
            </StyledButton>
          </StyledGridButton>

          <StyledGridButton xs={6}>
            <StyledButton
              size="small"
              variant="outlined"
              href="#outlined-buttons"
            >
              GitHub
            </StyledButton>
          </StyledGridButton>
        </Grid>
      </StyleMiddleWrapper>
    </StyledProjectContainer>
  )
}

const Inventory = () => {
  return (
    <StyledProjectContainer>
      <a href="https://musing-lamarr-e2a2c5.netlify.com/">
        <StyledImage
          className="webImage"
          src={require("../images/inventory.png")}
        />
      </a>
      <StyledProjectTitleDiv>
        <StyledProjectName>Inventory </StyledProjectName>
      </StyledProjectTitleDiv>

      <StyleMiddleWrapper className="middleWarpper">
        <StyledDescriptionText classsName="descriptionText">
          online inventory management to help you take control of your business
        </StyledDescriptionText>
        <Grid container>
          <StyledGridButton xs={6}>
            <StyledButton
              size="small"
              variant="outlined"
              href="http://order.thyhive.com"
            >
              Go To Site
            </StyledButton>
          </StyledGridButton>

          <StyledGridButton xs={6}>
            <StyledButton
              size="small"
              variant="outlined"
              href="#outlined-buttons"
            >
              GitHub
            </StyledButton>
          </StyledGridButton>
        </Grid>
      </StyleMiddleWrapper>
    </StyledProjectContainer>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6}>
        <StyledProjectDiv>
          <Order />
        </StyledProjectDiv>
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledProjectDiv>
          <Property />
        </StyledProjectDiv>
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledProjectDiv>
          <Inventory />
        </StyledProjectDiv>
      </Grid>
    </Grid>

    {/*
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Project />
    */}
  </Layout>
)

export default IndexPage

//Styled
const StyledProjectContainer = styled.div`
  position: relative;
  width: 100%;
  :hover .webImage {
    opacity: 0.5;
  }
  :hover > .middleWarpper {
    opacity: 0.5;
  }
`

const StyledProjectDiv = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`
const StyledProjectTitleDiv = styled.div`
  text-align: center;
`
const StyledProjectName = styled.h3`
  margin-bottom: 8px;
  letter-spacing: 0.02em;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.6em;
  text-transform: capitalize;
  text-decoration: none;
  color: rgb(79, 79, 79);
`

const StyleMiddleWrapper = styled.div`
  transition: 0.5s ease;
  height: 35%;

  text-align: center;

  @media (min-width: 500px) {
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    opacity: 0;
  }
`
const StyledImage = styled.img`
  margin-bottom: 8px;
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
`
const StyledDescriptionText = styled.div`
  margin-bottom: 8px;
  font-size: 0.8em;
  text-align: left;
  line-height: 1.6em;
  text-transform: capitalize;
  letter-spacing: 0.02em;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  font-family: "Open Sans", sans-serif;
  color: rgb(79, 79, 79);

  @media (min-width: 500px) {
    color: white;

    padding: 16px 32px;
  }
`
const StyledGridButton = styled(Grid)`
  display: block;
`
const StyledButton = styled(Button)`
  color: white;
  margin: 40px;

  @media (min-width: 500px) {
    color: black;
  }
`
