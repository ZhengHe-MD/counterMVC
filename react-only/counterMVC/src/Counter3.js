import React from 'react'
import ReactDOM from 'react-dom'

const createStore = (reducer, initialState) => {
  let state = reducer(initialState, {})
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

const render = () => {
  ReactDOM.render(
    <div>
      <button
        onClick={() => store.dispatch({type: 'INCREMENT'})}
      >
        +
      </button>
      {store.getState().value}
      <button
        onClick={() => store.dispatch({type: 'DECREMENT'})}
      >
        -
      </button>
    </div>,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()
