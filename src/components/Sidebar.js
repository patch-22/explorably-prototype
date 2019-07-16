import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-left">
        <h1 className="page__heading">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
