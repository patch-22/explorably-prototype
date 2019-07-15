import React, { Component } from 'react'
import * as d3 from 'd3'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.mainRef = React.createRef()
  }

  componentDidMount() {
    d3.select(this.mainRef.current)
      .append('svg')
      .attr('width', 200)
      .attr('height', 400)
      .style('border', '5px solid red')
  }
  render() {
    return <div ref={this.mainRef} />
  }
}
