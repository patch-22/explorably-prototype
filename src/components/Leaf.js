import React, { Component } from "react";

export default class Leaf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: true
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    this.setState({ color: !this.state.color })
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  }
}
