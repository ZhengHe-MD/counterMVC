import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'

import ConversationConnect from './components/conversation';


injectTapEventPlugin();
const CommentApp = (props) => (
  <MuiThemeProvider>
    <div>
      <ConversationConnect />
    </div>
  </MuiThemeProvider>
);

export default CommentApp;
