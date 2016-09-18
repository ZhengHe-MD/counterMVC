import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import request from 'superagent';
import promisity from 'superagent-as-promised';
promisity(request);

import CommentBox from './commentbox'

let nextCommentId = 0;
class Conversation extends React.Component {
  constructor() {
    super();
    this.onSaveComment = this.onSaveComment.bind(this);
    this.getRandomUser = this.getRandomUser.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    // this.inputValue = this.inputValue.bind(this);
    this.state = {
      inputValue: ''
    }
    // this.inputValue = '';
    // this.inputValue = this.inputValue.bind(this);
  }

  changeInputValue (e) {
    this.setState({ inputValue: e.target.value });
  }

  getShowComments(showComments) {
    return (
      <div>
        {
          showComments.map(commentObject => (
            <CommentBox key={commentObject.id} commentObject={commentObject} store={this.props.store} />
          ))
        }
      </div>
    );
  }

  render() {
    const show_comments = this.props.store.getState();
    console.log('render');
    return (
        <Card className="sidebar">
          <List>
            <Subheader>Conversation</Subheader>
            {
              show_comments.length > 0 ? this.getShowComments(show_comments) : <div><h1>There is no comment.</h1></div>
            }
          </List>
          <CardText>
            <TextField
              floatingLabelText="Comment"
              value={this.state.inputValue}
              onChange={this.changeInputValue}
            />
          </CardText>
          <FlatButton
            label="Save"
            primary={true}
            onClick={ this.getRandomUser }
          />
        </Card>
    );
  }

  getRandomUser() {
    request
      .get('https://randomuser.me/api/')
      .set('Accept', 'application/json')
      .then(results => {
        const data = JSON.parse(results.text).results[0];
        // console.log(data.login.username);
        this.onSaveComment(data.login.username, data.picture.thumbnail);
      }).catch(error => console.error);
  }

  onSaveComment(
    userName,
    userThumbnail,
  ) {
    console.log(this.state.inputValue);
    // let remoteUserName = '';

    console.log(userName);
    console.log(userThumbnail);
    this.props.store.dispatch({
      type: 'ADD_COMMENT',
      id: nextCommentId++,
      username: userName,
      thumbnail: userThumbnail,
      comment: this.state.inputValue
    });
    this.setState({ inputValue: ''});
    // this.input.value = '';
  }
};

Conversation.propTypes = {
  store: PropTypes.object,
};

export default Conversation;
