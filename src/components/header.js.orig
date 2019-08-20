import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import styled from "styled-components"

const NavBar = () => {
  return (
    <React.Fragment>
      <Grid item md={3}>
        <StyledNavLink to="/" activeStyle={{ color: "black" }}>
          Projects
        </StyledNavLink>
      </Grid>

      <Grid item md={3}>
        <StyledNavLink to="/about" activeStyle={{ color: "black" }}>
          About
        </StyledNavLink>
      </Grid>
      <Grid item md={3}>
        <StyledEmailLink href="https://github.com/vt0826">
          GitHub
        </StyledEmailLink>
      </Grid>
      <Grid item md={3}>
        <StyledEmailLink href="mailto:vt0826@gmail.com">
          Contact
        </StyledEmailLink>
      </Grid>
    </React.Fragment>
  )
}

const NavBarMobile = () => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <StyledNavLink to="/" activeClassName="active">
          P
        </StyledNavLink>
      </Grid>

      <Grid item xs={4}>
        <StyledNavLink to="/about" activeClassName="active">
          A
        </StyledNavLink>
      </Grid>

      <Grid item xs={4}>
        <StyledEmailLink href="mailto:vt0826@gmail.com">G</StyledEmailLink>
      </Grid>
      <Grid item xs={4}>
        <StyledEmailLink href="mailto:vt0826@gmail.com">C</StyledEmailLink>
      </Grid>
    </React.Fragment>
  )
}

const Header = ({ siteTitle }) => (
  <header>
    <StyledGridContainer container spacing={1}>
      <Grid item xs={12} sm={5} lg={9}>
        <StyledHeaderNameDiv>
          <StyledNavLinkName to="/">{siteTitle}</StyledNavLinkName>
        </StyledHeaderNameDiv>
      </Grid>

      <Grid item xs={12} sm={7} lg={3}>
        <StyledHeaderDiv>
          <StyledGridHeaderLink
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <NavBar />
          </StyledGridHeaderLink>
        </StyledHeaderDiv>
        {/*
          <StyledMobileHeaderDiv>
            <StyledGridHeaderMobileLink container>
              <NavBarMobile />
            </StyledGridHeaderMobileLink>
          </StyledMobileHeaderDiv>
          */}
      </Grid>
    </StyledGridContainer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledGridContainer = styled(Grid)`
  display: flex;
  justify-content: space-between;
`
const StyledHeaderNameDiv = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`
const StyledGridHeaderLink = styled(Grid)`
  padding-left: 20px;
  padding-right: 20px;

  width: 100%;
  direction: row;
  display: flex;
  justify-content: space-between;
`
const StyledGridHeaderMobileLink = styled(Grid)`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`
const StyledHeaderDiv = styled.div`
  display: inline;
  @media (min-width: 500px) {
    display: inline;
  }
`
const StyledMobileHeaderDiv = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: none;
  }
`

const StyledNavLinkName = styled(Link)`
  color: black;
  display: inline;
  align: left;
  font-size: 0.7em;
  line-height: 1.6em;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  font-family: "Open Sans", sans-serif;
  @media (min-width: 500px) {
    font-size: 1em;
  }
`
const StyledNavLink = styled(Link)`
  font-size: 0.7em;
  display: block;

  text-align: right;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 0.02em;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  font-family: "Open Sans", sans-serif;
  color: #aaa;

  @media (min-width: 500px) {
    font-size: 1em;
  }
`
const StyledEmailLink = styled.a`
  font-size: 0.7em;
  display: block;
  text-align: right;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 0.02em;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  font-family: "Open Sans", sans-serif;
  color: #aaa;

  @media (min-width: 500px) {
    font-size: 1em;
  }
`
