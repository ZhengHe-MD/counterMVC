import React from 'react'

const createStore = (reducer, initialState = {}) => {
  let state = initialState
  let listeners = []

  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
    return state
  }

  const subscribe = listener => {
    listeners.push(listener)

    // Allow listeners to unsubscribe
    return () => {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  const getState = () => state

  return {
    dispatch,
    subscribe,
    getState
  }
}

const connect = (Component, store) => {
  class Connect extends React.Component {
    constructor () {
      super()
      this.store = store
      this.state = this.store.getState()
    }

    componentDidMount () {
      this.store.subscribe(this.handleChange)
    }

    handleChange = () => {
      this.setState(this.store.getState())
    }

    render () {
      return (
        <Component
          dispatch={this.store.dispatch}
          value={this.state.value}
        />
      )
    }
  }
  return Connect
}

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

const store = createStore(counter, { value: 0 })

class Counter extends React.Component {
  plusOne = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  minusOne = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  render () {
    return (
      <div>
        <button onClick={this.minusOne}>-1</button>
        <span>{this.props.value}</span>
        <button onClick={this.plusOne}>+1</button>
      </div>
    )
  }
}

export default connect(Counter, store)
