import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Image from "../components/image"
import ImageContentHover from "react-image-hover"

const styles = theme => ({
  root: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `space-around`,
    overflow: `hidden`,
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 10,
    height: 10,
  },
})

const textStyle = {
  fontSize: `16px`,
  lineHeight: `1.8em`,
  letterSpacing: `.02em`,
  fontWeight: 400,
  fontStyle: `normal`,
  textRendering: `optimizeLegibility`,
  listStyle: `none`,
  margin: `0`,
}

const aboutMe = () => {
  return (
    <div
      style={{
        display: `inline-block`,
        width: `50%`,
        height: `500px`,
        float: `right`,
      }}
    >
      <p style={textStyle}>
        I’ve always sought out opportunities and challenges that are meaningful
        to me. Although my professional path has taken many twists and turns
        I've never stopped engaging my passion to help others and solve
        problems. As a web developer, I enjoy using my obsessive attention to
        detail, my unequivocal love for making things, and my mission-driven
        work ethic to literally change the world. That's why I’m excited to make
        a big impact at a high growth company.
      </p>
    </div>
  )
}

const skills = () => {
  return (
    <div style={{ display: `inline-block`, width: `50%` }}>
      <h6
        style={{
          lineHeight: `1.6em`,
          textTransform: `uppercase`,
          letterSpacing: `.2em`,
          textDecoration: `none`,
          fontWeight: 400,
          fontStyle: `normal`,
          color: `#333`,
        }}
      >
        Skillsets
      </h6>
      <ul style={textStyle}>
        <li>HTML / CSS</li>
        <li>JQuery</li>
        <li>JavaScripts</li>
        <li>Node.js</li>
        <li>React.js</li>
        <li>Redux.js</li>
        <li>Ruby On Rails</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  )
}
const About = props => (
  <Layout>
    <SEO title="Projects" />
    <div
      style={{
        width: `1308px`,
        display: `table`,
        margin: `0 auto`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <img
        style={{ width: `1308px`, height: `867px` }}
        src={require("../images/aboutme.jpg")}
      />
      <div style={{ width: `100%`, height: `50px` }} />
      <div>
        {skills()}
        {aboutMe()}
      </div>
    </div>
  </Layout>
)
export default About
