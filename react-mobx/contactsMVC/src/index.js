import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {deepOrange500} from 'material-ui/styles/colors'
import { CommentStore } from './stores/comment'
import Conversation from './components/Conversation'
import { useStrict } from 'mobx'

// useStrict(true)

injectTapEventPlugin()
const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	}
});

const commentStore = new CommentStore()

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Conversation commentStore={commentStore} />
  </MuiThemeProvider>,
  document.getElementById('app')
)
