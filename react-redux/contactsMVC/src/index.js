import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import createLogger from 'redux-logger';

import thunk from 'redux-thunk';

import { CommentList, LoadingStatus } from './reducer/comment';
import CommentApp from './views/App';

const logger = createLogger();
const middleWares = [thunk, logger];

const reducer = combineReducers({
  comment: CommentList,
  loading: LoadingStatus,
});
const store = createStore(reducer, applyMiddleware(...middleWares));

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CommentApp />
    </Provider>,
    document.getElementById('contacts')
  );
}

store.subscribe(render);
render();
