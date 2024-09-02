import React, { Component } from 'react'

export default class RCC extends Component {
  constructor(props){
    super(props)
    this.state = {count:0};
  }

  increment = () => {
    this.setState({count :this.state.count + 1})
  }

  render() {
  return (
    <div className='box1'>
      <h1>ClassCom</h1>
      <h1>{this.state.count}</h1>
    
      <button onClick={this.increment}>Click</button>
    </div>
  )
}
}
