import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'

import Conversation from './components/Conversation';


injectTapEventPlugin();
const CommentApp = (props) => (
  <MuiThemeProvider>
    <div>
      <Conversation store={props.store}/>
    </div>
  </MuiThemeProvider>
);

export default CommentApp;
