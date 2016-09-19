import { Card, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import uuid from 'node-uuid';
import request from 'superagent';
import CommentBox from './commentbox'

import promisity from 'superagent-as-promised';
promisity(request);


class Conversation extends Component {
  constructor() {
    super();
    this.onGetRandomUser = this.onGetRandomUser.bind(this);
    this.onChangeInputValue = this.onChangeInputValue.bind(this);

    this.state = {
      inputValue: ''
    }
  }

  onChangeInputValue (e) {
    this.setState({ inputValue: e.target.value });
  }

  getShowComments(showComments) {
    return (
      <div>
        {
          showComments.map(
            commentObject => (
              <CommentBox
                key={commentObject.id}
                commentObject={commentObject}
              />
            )
          )
        }
      </div>
    );
  }

  render() {
    const showComments = this.props.commentsList;
    return (
        <Card className="sidebar">
          <List>
            <Subheader>Conversation</Subheader>
            {
              showComments !== 'undefined' ?
                this.getShowComments(showComments) :
                <div><h1>There is no comment.</h1></div>
            }
          </List>
          <CardText>
            <TextField
              floatingLabelText="Comment"
              value={this.state.inputValue}
              onChange={this.onChangeInputValue}
            />
          </CardText>
          <FlatButton
            label="Save"
            primary={true}
            onClick={ this.onGetRandomUser }
          />
        </Card>
    );
  }

  onGetRandomUser() {
    request
      .get('https://randomuser.me/api/')
      .set('Accept', 'application/json')
      .then(results => {
        const data = JSON.parse(results.text).results[0];

        const thisComment = this.state.inputValue;
        this.setState({
          inputValue: ""
        })
        this.props.onSaveComment(data.login.username, data.picture.thumbnail, thisComment);
      })
      .catch(error => console.error);
  }

};

Conversation.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.object),
  onSaveComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    commentsList: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveComment: (userName, userThumbnail, thisComment) => {
      const nextCommentId = uuid.v4();
      dispatch({
        type: 'ADD_COMMENT',
        id: nextCommentId,
        username: userName,
        thumbnail: userThumbnail,
        comment: thisComment
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
