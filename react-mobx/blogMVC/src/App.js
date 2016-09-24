import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import DocumentOverview from './components/DocumentOverview'
import Document from './components/Document'

export const App = observer(({ store }) => (
  <div>
    { renderCurrentView(store) }
    Current user:
    { store.isAuthenticated ? store.currentUser.name : 'guest user' }
  </div>
))

function renderCurrentView(store) {
  const view = store.currentView;
  switch (view.name) {
    case 'overview':
      return <DocumentOverview view={view} store={store} />
    case 'document':
      return <Document view={view} store={store} />
  }
}
