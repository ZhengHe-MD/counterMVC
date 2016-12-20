import React from 'react'

class Counter extends React.Component {
  state = { value: 0 }

  plusOne () {
    this.setState({ value: this.state.value + 1 })
  }

  minusOne () {
    this.setState({ value: this.state.value - 1 })
  }

  render () {
    return (
      <div>
        <button onClick={() => this.minusOne()}>-1</button>
        <span>{this.state.value}</span>
        <button onClick={() => this.plusOne()}>+1</button>
      </div>
    )
  }
}

export default Counter
