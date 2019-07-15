import React from 'react'
import { render } from 'react-dom'
import './App.css'
import Demo from './Demo'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="col-left">
            <h1 className="page__heading">Page title</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-right">
            <Demo />
          </div>
        </div>
      </div>
    )
  }
}
render(React.createElement(App), document.getElementById('root'))
