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
        <StyledFooterDiv>
          <Header siteTitle={data.site.siteMetadata.title} />
        </StyledFooterDiv>
        <main>
          <StyledContainer>{children}</StyledContainer>
        </main>
        <footer>
          <StyledContainer>
            <StyledFooterDiv>
              © {new Date().getFullYear()}, Develop By Victor Tsay
            </StyledFooterDiv>
          </StyledContainer>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const StyledContainer = styled.div`
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1728px;
  padding: 1.45rem 1.0875rem;
`
const StyledFooterDiv = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`
