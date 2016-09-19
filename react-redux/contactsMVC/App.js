import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'

import Conversation from './components/Conversation';


injectTapEventPlugin();
const CommentApp = (props) => (
  <MuiThemeProvider>
    <div>
      <Conversation />
    </div>
  </MuiThemeProvider>
);

export default CommentApp;
