import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <div className="btn" onClick={this.props.action}>
        {this.props.text}
      </div>
    )
  }
}

export default Button;