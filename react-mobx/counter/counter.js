import { observer } from 'mobx-react';
import React, { Component } from 'react';
import counterState from './state';

@observer
class Counter extends Component {

  constructor() {
    super();
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }

  plusOne() {
    counterState.plusOne();
  }

  minusOne() {
    counterState.minusOne();
  }

  render() {
    return (
      <div>
        <button onClick={this.minusOne}>{'-1'}</button>
        <span>{counterState.count}</span>
        <button onClick={this.plusOne}>{'+1'}</button>
      </div>
    )
  }

}

export default Counter;
