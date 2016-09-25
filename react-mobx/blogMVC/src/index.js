import React from 'react'
import ReactDOM from 'react-dom'
import ViewStore from './store/ViewStore'
import { simpleFetch } from './store/fetch'
import { startRouter } from './store/router'
import { App } from './App';

const viewStore = new ViewStore(simpleFetch)
startRouter(viewStore)

ReactDOM.render(
  <App store={viewStore} />,
  document.getElementById('app')
)
