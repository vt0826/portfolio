import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Project from "../components/project"
import { withStyles } from "@material-ui/core/styles"
import styled from "styled-components"

import { Link } from "gatsby"
const Order = () => {
  return (
    <StyledProjectContainer>
      <StyledMiddleContainer>
        <StyleMiddleWrapper className="middleWarpper">
          <StyledProjectTitleDiv>
            <StyledProjectName>Order </StyledProjectName>
          </StyledProjectTitleDiv>

          <StyledDescriptionText classsName="descriptionText">
            help family and friends to order a batch of goods as a group.
          </StyledDescriptionText>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12}>
              <StyledProjectLink href="http://order.thyhive.com">
                Go To Site
              </StyledProjectLink>
            </Grid>
          </Grid>
        </StyleMiddleWrapper>
      </StyledMiddleContainer>
      <a href="http://order.thyhive.com">
        <StyledImage
          className="webImage"
          src={require("../images/order.png")}
        />
      </a>
    </StyledProjectContainer>
  )
}

const Property = () => {
  return (
    <StyledProjectContainer>
      <StyledMiddleContainer>
        <StyleMiddleWrapper className="middleWarpper">
          <StyledProjectTitleDiv>
            <StyledProjectName>Property </StyledProjectName>
          </StyledProjectTitleDiv>

          <StyledDescriptionText classsName="descriptionText">
            A quick and esay way to find out your property's worth
          </StyledDescriptionText>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={6}>
              <StyledProjectLink href="https://musing-lamarr-e2a2c5.netlify.com/">
                Go To Site
              </StyledProjectLink>
            </Grid>

            <Grid item xs={6}>
              <StyledProjectLink href="https://github.com/vt0826/property">
                GitHub
              </StyledProjectLink>
            </Grid>
          </Grid>
        </StyleMiddleWrapper>
      </StyledMiddleContainer>
      <a href="https://musing-lamarr-e2a2c5.netlify.com/">
        <StyledImage
          className="webImage"
          src={require("../images/property.png")}
        />
      </a>
    </StyledProjectContainer>
  )
}

const Inventory = () => {
  return (
    <StyledProjectContainer>
      <StyledMiddleContainer>
        <StyleMiddleWrapper className="middleWarpper">
          <StyledProjectTitleDiv>
            <StyledProjectName>Inventory </StyledProjectName>
          </StyledProjectTitleDiv>

          <StyledDescriptionText classsName="descriptionText">
            online inventory management to help you take control of your
            business
          </StyledDescriptionText>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={6}>
              <StyledProjectLink href="https://github.com/vt0826/inventory">
                Go To Site
              </StyledProjectLink>
            </Grid>

            <Grid item xs={6}>
              <StyledProjectLink href="https://github.com/vt0826/inventory">
                GitHub
              </StyledProjectLink>
            </Grid>
          </Grid>
        </StyleMiddleWrapper>
      </StyledMiddleContainer>
      <a href="https://musing-lamarr-e2a2c5.netlify.com/">
        <StyledImage
          className="webImage"
          src={require("../images/inventory.png")}
        />
      </a>
    </StyledProjectContainer>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Grid container spacing={6}>
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
  :hover > .middleWarpper {
    opacity: 1;
  }
`

const StyledProjectDiv = styled.div``
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

const StyledMiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyleMiddleWrapper = styled.div`
  margin: auto;
  @media (min-width: 500px) {
    margin-bottom: 12px;
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
  @media (min-width: 600px) {
    :hover {
      opacity: 0.8;
    }
  }
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
`
const StyledGridButton = styled(Grid)`
  display: block;
  width: 100%;
`
const StyledButton = styled(Button)`
  color: white;
  margin: 100px;
  @media (min-width: 500px) {
    color: black;
  }
  .gitHubButton {
    float: right;
  }
`
const StyledProjectLink = styled.a`
  margin-top: 4px;
  margin-bottom: 20px;
  font-size: 0.7em;
  display: block;
  margin-top: 12px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 0.02em;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  font-family: "Open Sans", sans-serif;
  color: black;
  :hover > .webImage {
    opacity: 0.5;
  }

  @media (min-width: 600px) {
    font-size: 0.8em;
    margin-top: 0;
    :hover {
      -webkit-transform: scale(1.1);
    }
  }
`
