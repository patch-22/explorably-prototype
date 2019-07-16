import React from 'react'
import Prologue from './Prologue'
import Leaf from './Leaf'
import Epilogue from './Epilogue'
import Sidebar from './Sidebar'
import Content from './Content'
import Button from './Button'
import ThreeDemo from './ThreeDemo'
import More from './More'

export default class Chapter extends React.Component {
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
      <>
        <Prologue />
        <Leaf>
          <Sidebar title="Behold True Art">
            <p>
              Cubes are beautiful. You may change the colour in order to further your admiration of this platonic form. <More>A platonic form is a form for which you hold a lot of love.</More>
            </p>
            <Button text="Change me father" action={this.changeColor} />
          </Sidebar>
          <Content>
            <Button text="Change me father" action={this.changeColor} />
            <ThreeDemo color={this.state.color} />
            <Button text="Change me father" action={this.changeColor} />
          </Content>
        </Leaf>
        <Epilogue />
      </>
    )
  }
}