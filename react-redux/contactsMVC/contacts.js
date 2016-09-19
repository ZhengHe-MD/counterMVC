import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import reducer from './src/reducer/comment'
import CommentApp from './App'

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <CommentApp store={store}/>,
    document.getElementById('contacts')
  );
}

store.subscribe(render);
render();
