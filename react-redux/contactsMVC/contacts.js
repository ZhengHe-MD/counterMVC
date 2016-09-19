import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin'

import Conversation from './components/Conversation';

const CommentList = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: action.id,
          username: action.username,
          thumbnail: action.thumbnail,
          comment: action.comment
        }
      ];
    case 'DEL_COMMENT':
      return state.filter(s => s.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(CommentList);

injectTapEventPlugin();
const CommentApp = (props) => (
  <MuiThemeProvider>
    <div>
      <Conversation store={props.store}/>
    </div>
  </MuiThemeProvider>
);

const render = () => {
  ReactDOM.render(
    <CommentApp store={store}/>,
    document.getElementById('contacts')
  );
}

store.subscribe(render);
render();
