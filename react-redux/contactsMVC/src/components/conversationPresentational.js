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
    this.getRandomUser = this.getRandomUser.bind(this);
    this.onChangeInputValue = this.onChangeInputValue.bind(this);

    this.state = {
      inputValue: '',
      isLoading: false,
    }
  }

  onChangeInputValue (e) {
    this.setState({ inputValue: e.target.value });
  }

  showCurrentComments(currentComments) {
    return (
      <div>
        {
          currentComments.map(
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
    const currentComments = this.props.commentsList;
    return (
        <Card className="sidebar">
          <List>
            <Subheader>Conversation</Subheader>
            {
              currentComments.length > 0 ?
                this.showCurrentComments(currentComments) :
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
            onClick={ this.getRandomUser }
          />
          {
            this.props.isLoading ?
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

  getRandomUser() {
    const thisComment = this.state.inputValue;
    this.setState({
      inputValue: '',
    });
    this.props.addCommentAsync(thisComment);

  }

};

Conversation.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  addCommentAsync: PropTypes.func.isRequired,
};

export default Conversation;
