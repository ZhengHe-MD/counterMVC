import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.map(l => l());
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners.filter(l !== listener);
    }
  }
  dispatch({});
  return {getState, dispatch, subscribe};
}

const store = createStore(counter);
const render = () => {
  ReactDOM.render(
    <div>
     <button onClick={ () => store.dispatch({ type: 'INCREMENT'})}>+</button>
       {store.getState()}
     <button onClick={ () => store.dispatch({ type: 'DECREMENT'})}>-</button>
    </div>,
    document.getElementById('redux')
  )
}
store.subscribe(render)
render()
