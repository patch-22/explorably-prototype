import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <div className="col-right">
        {this.props.children}
      </div>
    )
  }
}
