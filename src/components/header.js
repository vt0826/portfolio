import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyle = {
  margin: `0 0 0 25px`,
  fontSize: `14px`,
  textTransform: `none`,
  textDecoration: `none`,
  letterSpacing: `.02em`,
  fontWeight: 400,
  fontStyle: `normal`,
  lineHeight: `1em`,
  color: `black`,
}
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1728,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            display: `inline`,
            alignItems: `left`,
            fontSize: `24px`,
            lineHeight: `1.2em`,
            textTransform: `capitalize`,
            letterSpacing: `0em`,
            textDecoration: `none`,
            fontWeight: 400,
            fontStyle: `normal`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <Link to="/" style={linkStyle}>
          Projects
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <a style={linkStyle} href="mailto:vt0826@gmail.com">
          Contact
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
