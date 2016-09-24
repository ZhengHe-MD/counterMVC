import React from 'react'
import Error from './Error'
import { observer } from 'mobx-react'

const DocumentOverview = observer(({ view, store }) => {
  switch (view.documents.state) {
    case 'pending':
      return <h1>Loading documents...</h1>
    case 'rejected':
      return <Error error={view.documents.value} />
    case 'fulfilled':
      return (
        <div>
          <h1>Document overview</h1>
          <ul>
            {
              view.documents.value.map(
                doc => <li key={doc.id} onClick={() => store.showDocument(doc.id)}>{doc.name}</li>
              )
            }
          </ul>
        </div>
      )
  }
})

export default DocumentOverview
