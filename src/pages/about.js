import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GridList from "@material-ui/core/GridList"
import Grid from "@material-ui/core/Grid"
import GridListTile from "@material-ui/core/GridListTile"
import Image from "../components/image"

import styled from "styled-components"

const AboutMe = () => {
  return (
    <React.Fragment>
      <StyledAboutText className="aboutTitle">About</StyledAboutText>
      <StyledAboutText className="aboutContent">
        I’ve always sought out opportunities and challenges that are meaningful
        to me. Although my professional path has taken many twists and turns.
        I've never stopped engaging my passion to help others and solve
        problems. As a web developer, I enjoy using my obsessive attention to
        detail, and my unequivocal love for making things. That's why I’m
        excited to make a big impact at a high growth company.
      </StyledAboutText>
    </React.Fragment>
  )
}

const SkillSets = () => {
  return (
    <React.Fragment>
      <StyledAboutText className="aboutTitle">Skillsets</StyledAboutText>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <StyledSkillSetsUl>
            <StyledSkillSetsLi>HTML & CSS</StyledSkillSetsLi>
            <StyledSkillSetsLi>JavaScripts ES6</StyledSkillSetsLi>
            <StyledSkillSetsLi>NodeJs</StyledSkillSetsLi>
            <StyledSkillSetsLi>ReactJs</StyledSkillSetsLi>
            <StyledSkillSetsLi>Redux</StyledSkillSetsLi>
          </StyledSkillSetsUl>
        </Grid>

        <Grid item xs={6} sm={6}>
          <StyledSkillSetsUl>
            <StyledSkillSetsLi>Apollo QL</StyledSkillSetsLi>
            <StyledSkillSetsLi>Graph QL</StyledSkillSetsLi>
            <StyledSkillSetsLi>Ruby On Rails</StyledSkillSetsLi>
            <StyledSkillSetsLi>MongoDB</StyledSkillSetsLi>
            <StyledSkillSetsLi>PostgreSQL</StyledSkillSetsLi>
          </StyledSkillSetsUl>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
const About = props => (
  <Layout>
    <SEO title="About Me" />

    <Grid container spacing={3}>
      <Grid item>
        <StyledImage src={require("../images/aboutme.jpg")} />
      </Grid>
      <StyledGridSkillSets item xs={12} sm={6}>
        <SkillSets />
      </StyledGridSkillSets>

      <StyledGridAbout item xs={12} sm={6}>
        <AboutMe />
      </StyledGridAbout>
    </Grid>
  </Layout>
)
export default About

//Styled

const StyledImage = styled.img`
  display: block;
  margin-bottom:40px;
  width: 100%;
  height: auto;
  }
`

const StyledGridSkillSets = styled(Grid)`
  order: 2;
  @media (min-width: 600px) {
    order: 1;
  }
`

const StyledGridAbout = styled(Grid)`
  order: 1;
  float: right;
  @media (min-width: 600px) {
    order: 2;
  }
`
const StyledSkillSetsUl = styled.ul`
  margin: 0;
`
const StyledSkillSetsLi = styled.li`
  line-height: 1.5em;
  letter-spacing: 0.02em;
  text-decoration: none;

  text-rendering: optimizeLegibility;
  font-size: 1em;

  font-weight: 400;
  font-style: normal;
  font-family: "Open Sans", sans-serif;

  list-style: none;
  margin-bottom: 12px;
`

const StyledAboutText = styled.h6`
  line-height: 1.8em;
  letter-spacing: 0.02em;
  text-decoration: none;

  text-rendering: optimizeLegibility;
  font-weight: 400;
  font-style: normal;
  font-family: "Open Sans", sans-serif;

  &.aboutTitle {
    margin-bottom: 16px;
    text-transform: uppercase;
    line-height: 1.6em;
    letter-spacing: 0.2em;
  }
  &.aboutContent {
    font-size: 1em;
  }
`
