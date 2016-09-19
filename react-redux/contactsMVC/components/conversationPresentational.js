import { Card, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import request from 'superagent';
import CommentBoxConnect from './commentbox'

import promisity from 'superagent-as-promised';
promisity(request);


class Conversation extends Component {
  constructor() {
    super();
    this.onGetRandomUser = this.onGetRandomUser.bind(this);
    this.onChangeInputValue = this.onChangeInputValue.bind(this);

    this.state = {
      inputValue: '',
      isLoading: false,
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
              <CommentBoxConnect
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
              showComments.length > 0 ?
                this.getShowComments(showComments) :
                null
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
          {
            this.state.isLoading ?
              <RefreshIndicator
              size={40}
              left={10}
              top={0}
              status="loading"
            /> : null
          }
        </Card>
    );
  }

  onGetRandomUser() {
    this.setState({
      isLoading: true,
    })
    this.render();
    request
      .get('https://randomuser.me/api/')
      .set('Accept', 'application/json')
      .then(results => {
        const data = JSON.parse(results.text).results[0];

        const thisComment = this.state.inputValue;
        this.setState({
          inputValue: "",
          isLoading: false,
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

export default Conversation;
