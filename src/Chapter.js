import React from 'react'
import Prologue from './Prologue'
import Leaf from './Leaf'
import Epilogue from './Epilogue'
import Sidebar from './Sidebar'
import Content from './Content'

export default class Chapter extends React.Component {
  render() {
    return (
      <>
        <Prologue />
        <Leaf>
          <Sidebar />
          <Content />
        </Leaf>
        <Epilogue />
      </>
    )
  }
}