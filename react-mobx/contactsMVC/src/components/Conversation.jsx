import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import { Card, CardText } from 'material-ui/Card'
import { List } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Comment from './Comment'

// import DevTools from 'mobx-react-devtools';

@observer
class Conversation extends React.Component {
  @observable newComment = ''

  @computed get existingComments() {
    return this.props.commentStore.comments.slice()
  }

  @action onSaveComment = () => {
    const { commentStore } = this.props
    console.log(commentStore)
    commentStore.createRandomComment(this.newComment)
    this.newComment = ''
  }

  @action onChangeNewComment = e => {
    this.newComment = e.target.value
  }

  render() {
    return (
      <Card className="sidebar">
        <List>
          <Subheader>Conversation</Subheader>
          {
            this.existingComments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))
          }
        </List>
        <CardText>
          <TextField
            floatingLabelText="Comment"
            value={this.newComment}
            onChange={this.onChangeNewComment}
          />
        </CardText>
        <FlatButton
          label="Save"
          primary={true}
          onClick={this.onSaveComment}
        />
        {
          this.props.commentStore.isLoading ?
            <RefreshIndicator
              size={40}
              left={10}
              top={0}
              status="loading"
            /> : null
        }
      </Card>
    )
  }
}

export default Conversation

