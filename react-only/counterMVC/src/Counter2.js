import React from 'react'

const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state
  }
}

class Counter extends React.Component {
  state = counter(undefined, {})

  dispatch (action) {
    this.setState(prevState => counter(prevState, action))
  }

  plusOne = () => {
    this.dispatch({ type: 'INCREMENT' })
  }

  minusOne = () => {
    this.dispatch({ type: 'DECREMENT' })
  }

  render () {
    return (
      <div>
        <button onClick={this.minusOne}>-1</button>
        <span>{this.state.value}</span>
        <button onClick={this.plusOne}>+1</button>
      </div>
    )
  }
}

export default Counter
