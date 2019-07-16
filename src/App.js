import React from 'react'
import { render } from 'react-dom'
import './App.css'
import ThreeDemo from './ThreeDemo'
import Button from './Button';

class App extends React.Component {
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
      <div>
        <div className="wrapper">
          <div className="col-left">
            <h1 className="page__heading">Behold true art</h1>
            <p>
              Cubes are beautiful. You may change the colour in order to further your admiration of this platonic form.
            </p>
            <Button text="Change me father" action={this.changeColor} />
          </div>
          <div className="col-right">
            <ThreeDemo color={this.state.color}>
              <Button text="Change me father" action={this.changeColor} />
            </ThreeDemo>
          </div>
        </div>
      </div>
    )
  }
}
render(React.createElement(App), document.getElementById('root'))
