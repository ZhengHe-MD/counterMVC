import React, { Component, PropTypes } from 'react';

const APP_PREFIX = 'REACT-LOCALSTORAGE-COUNTERMVC.'

class Counter extends Component {

  constructor() {
    super();
    this.localStorage = window.localStorage;
    this.countKey = `${APP_PREFIX}-value`;
    this.localStorage.setItem(this.countKey, '0');
    this.onClickPlus = this.onClickPlus.bind(this);
    this.onClickMinus = this.onClickMinus.bind(this);
  }

  onClickPlus() {
    const currentValue = parseInt(this.localStorage.getItem(this.countKey), 10);
    this.localStorage.setItem(this.countKey, currentValue + 1);
    this.forceUpdate();
  }

  onClickMinus() {
    const currentValue = parseInt(this.localStorage.getItem(this.countKey), 10);
    this.localStorage.setItem(this.countKey, currentValue - 1);
    this.forceUpdate();
  }

  render() {
    const count = this.localStorage.getItem(this.countKey);
    return (
      <div>
        <button onClick={this.onClickMinus}>-1</button>
        <span>{count}</span>
        <button onClick={this.onClickPlus}>+1</button>
      </div>
    )
  }

}

export default Counter;
