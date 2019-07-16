import React, { Component } from "react";

export default class Leaf extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  }
}
