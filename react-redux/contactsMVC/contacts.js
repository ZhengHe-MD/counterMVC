import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
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
      return state.filter( s => s.id !== action.id );
    default:
      return state;
  }
}

// console.log('this is a test...');
const store = createStore(CommentList);

const all_tests = [
    {
      id: 0,
      username: 'haha',
      thumnail: 'eeeee',
      comment: 'test 1',
      type: 'ADD_COMMENT'
    },
    {
      id: 1,
      username: 'hehe',
      thumnail: 'e e e',
      comment: 'test 2',
      type: 'ADD_COMMENT'
    }
  ];
  // const first = CommentList([], {});
  // const second = CommentList([], all_tests[1]);
  // const third = CommentList(second, all_tests[0]);
  // console.log(third);
  // store.dispatch(all_tests[1]);
  // store.dispatch(all_tests[0]);

// class Conversation extends React.Component {
//   render() {
//     return (
//       <div>world</div>
//     );
//   }
// };
injectTapEventPlugin();
const CommentApp = (props) => (
  <MuiThemeProvider>
    <div>
      <Conversation store={props.store}/>
    </div>
  </MuiThemeProvider>
);
// next: show the comments list.
const render = () => {
  ReactDOM.render(
    <CommentApp store={store}/>,
    document.getElementById('contacts')
  );
}

store.subscribe(render);
render();
// // test of CommentList function.
// const testCommentList = () => {
//   const all_tests = [
//     {
//       id: 0,
//       username: 'haha',
//       thumnail: 'eeeee',
//       comment: 'test 1',
//       type: 'ADD_COMMENT'
//     },
//     {
//       id: 1,
//       username: 'hehe',
//       thumnail: 'e e e',
//       comment: 'test 2',
//       type: 'ADD_COMMENT'
//     }
//   ];
//   // const first = CommentList([], {});
//   // const second = CommentList([], all_tests[1]);
//   // const third = CommentList(second, all_tests[0]);
//   // console.log(third);
//   store.dispatch(all_tests[1]);
//   store.dispatch(all_tests[0]);
//   console.log(store.getState());
//   store.dispatch({ type: 'DEL_COMMENT', id: 1});
//   console.log(store.getState());
//   // console.log(all_tests[0]);
//   console.log('passed testCommentList!')
// }
//

//
// testCommentList();
