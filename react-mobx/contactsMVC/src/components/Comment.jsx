import React from 'react'
import { observer } from 'mobx-react'
import { observable, action, computed } from 'mobx'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton'

@observer
class Comment extends React.Component {
  @observable username
  @observable thumbnail
  @observable comment

  componentWillMount() {
    this.resetComment(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.resetComment(nextProps)
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
    return (
      <ListItem>
        <div style={style}>
          <div>
            <Avatar src={this.thumbnail} className='avatar' />
            {this.username}
            <div>{this.comment}</div>
          </div>
          <FlatButton
            label="Delete"
            secondary={true}
            onClick={this.onDelete}
          />
        </div>
      </ListItem>
    )
  }

  @action resetComment(props) {
    const { username, thumbnail, comment } = props.comment
    this.username = username
    this.thumbnail = thumbnail
    this.comment = comment
  }

  @action onDelete = () => {
    this.props.comment.delete()
  }
}

export default Comment