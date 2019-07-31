/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import { Container } from "@material-ui/core"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container maxWidth="lg">
          <Header siteTitle={data.site.siteMetadata.title} />
        </Container>

        <main>
          <Container maxWidth="lg"> {children}</Container>
        </main>
        <footer>
          <Container maxWidth="lg">
            <StyledFooterText>
              © {new Date().getFullYear()}, Developed By Victor Tsay
            </StyledFooterText>
          </Container>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const StyledFooterText = styled.h6`
  margin-top: 20px;
  font-size: 0.8em;
  text-align: left;
  line-height: 1.6em;
  text-transform: capitalize;
  letter-spacing: 0.02em;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  font-family: "Open Sans", sans-serif;
  color: black;
`
