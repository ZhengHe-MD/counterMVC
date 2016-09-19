import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import reducer from './src/reducer/comment'
import CommentApp from './App'

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CommentApp store={store} />
    </Provider>,
    document.getElementById('contacts')
  );
}

store.subscribe(render);
render();
