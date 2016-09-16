import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import counterStore from './store';

ReactDOM.render(
  <Provider counterStore={counterStore}>
    <Counter />
  </Provider>,
  document.getElementById('app')
);
