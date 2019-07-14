import React from "react"
import { render } from "react-dom"
import * as d3 from "d3";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.exploreRef = React.createRef()
    this.visualisation = React.createRef();
  }
  handleTitleClick() {
    alert("You Clicked the Title!")
  }
  componentDidMount() {
    d3.select(this.exploreRef.current)
    .append("svg")
    .attr("width", 600)
    .attr("height", 400)
    .style("border", "5px solid black")
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="col-left">
            <h1 className="page__heading">
              Chance Events
            </h1>
            <p>
              Randomness is all around us. Probability theory is the
              mathematical framework that allows us to analyze chance events in
              a logically sound manner. The probability of an event is a number
              indicating how likely that event will occur. This number is always
              between 0 and 1, where 0 indicates impossibility and 1 indicates
              certainty.
            </p>
          </div>
          <div className="col-right">
            <div ref={this.exploreRef} />
          </div>
        </div>
      </div>
    )
  }
}
render(React.createElement(App), document.getElementById("root"))
