import React from "react"
import SEO from "../components/seo"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: true,
    }
  }

  projectOne() {
    var textStyle = { textAlign: "center" }
    return (
      <div>
        <div style={textStyle}>
          <h2>Web.OS </h2>
          <p>An easy way to access anywhere</p>
        </div>
        <div>
          <a href="https://webos.herokuapp.com">
            <img src={require("../images/webos.png")} />
          </a>
        </div>
      </div>
    )
  }

  projectTwo() {
    var textStyle = { textAlign: "center" }
    return (
      <div>
        <div style={textStyle}>
          <h2>Inventory </h2>
          <p>An easy way to orgnaize </p>
        </div>
        <div>
          <img src={require("../images/inventory.png")} />
        </div>
      </div>
    )
  }

  render() {
    const styles = theme => ({
      root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {},
    })
    const state = this.state
    return (
      <div>
        <SEO title="Projects" />
        <GridList cellHeight="auto" className="projects" cols={2} spacing={50}>
          <div
            onMouseOut={() => this.setState({ hovered: true })}
            onMouseOver={() => this.setState({ hovered: false })}
          >
            {this.projectOne()}
          </div>
          <div
            onMouseOut={() => this.setState({ hovered: true })}
            onMouseOver={() => this.setState({ hovered: false })}
          >
            {this.projectTwo()}
          </div>
        </GridList>
      </div>
    )
  }
}
export default Project
