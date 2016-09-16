import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';

@inject('counterStore')
@observer
class Counter extends Component {

  constructor() {
    super();
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }

  plusOne() {
    this.props.counterStore.plusOne();
  }

  minusOne() {
    this.props.counterStore.minusOne();
  }

  render() {
    return (
      <div>
        <button onClick={this.minusOne}>{'-1'}</button>
        <span>{this.props.counterStore.count}</span>
        <button onClick={this.plusOne}>{'+1'}</button>
      </div>
    )
  }

}

export default Counter;
