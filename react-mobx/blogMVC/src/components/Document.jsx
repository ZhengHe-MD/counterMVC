import React from 'react'
import Error from './Error'
import Login from './Login'
import { observer } from 'mobx-react'

const Document = observer(({ view, store }) => {
    if (!store.isAuthenticated)
      return <Login store={store} afterLogin={() => store.showDocument(view.documentId)} />
    switch (view.document.state) {
      case "pending":
        return <h1>Loading document.. { view.documentId }</h1>
      case "rejected":
        return <Error error={view.document.value} />
      case "fulfilled":
        return (
          <div>
            <h1>{ view.document.value.name }</h1>
            <p> { view.document.value.text }</p>
            <button onClick={() => store.showOverview()}>Back to documents</button>
          </div>
        )
    }
})

export default Document
