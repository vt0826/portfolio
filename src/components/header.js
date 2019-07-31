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

const Header = ({ siteTitle }) => (
  <header>
    <StyledGridContainer container>
      <Grid item xs={12} sm={6} md={8} lg={9}>
        <StyledNavLinkName to="/">{siteTitle}</StyledNavLinkName>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <StyledGridHeaderLink
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <NavBar />
        </StyledGridHeaderLink>
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
  margin-top: 40px;

  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`

const StyledGridHeaderLink = styled(Grid)`
  width: 100%;
  direction: row;
  display: flex;
  justify-content: space-between;
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
  @media (min-width: 600px) {
    font-size: 1em;
  }
`
const StyledNavLink = styled(Link)`
  margin-top: 12px;
  font-size: 0.7em;
  display: block;
  margin-top: 12px;
  text-align: right;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 0.02em;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  font-family: "Open Sans", sans-serif;
  color: #aaa;

  @media (min-width: 600px) {
    font-size: 1em;
    margin-top: 0;
    :hover {
      -webkit-transform: scale(1.1);
    }
  }
`
const StyledEmailLink = styled.a`
  margin-top: 12px;
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

  @media (min-width: 600px) {
    font-size: 1em;
    margin-top: 0;
    :hover {
      -webkit-transform: scale(1.1);
    }
  }
`
