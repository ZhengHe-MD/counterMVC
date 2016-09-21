import uuid from 'node-uuid';
import request from 'superagent';
import promisity from 'superagent-as-promised';
promisity(request);

export const ADD_COMMENT = 'ADD_COMMENT';
export const DEL_COMMENT = 'DEL_COMMENT';

export function addComment(username, thumbnail, comment) {
  return {
    username,
    thumbnail,
    comment,
    id: uuid.v4(),
    type: ADD_COMMENT,
  };
}

export function delComment(id) {
  return {
    id,
    type: DEL_COMMENT,
  };
}

function Loading() {
  return {
    type: 'START_LOADING',
    loading: true,
  };
}

function noLoading() {
  return {
    type: 'END_LOADING',
    loading: false,
  }
}

export function addCommentAsync(thisComment) {
  return (dispatch) => {
    dispatch(Loading())
    request
      .get('https://randomuser.me/api/')
      .set('Accept', 'application/json')
      .then(results => {
        const data = JSON.parse(results.text).results[0];
        dispatch(addComment(data.login.username, data.picture.thumbnail, thisComment));
        dispatch(noLoading());
      })
      .catch(error => console.error(error));
  }
}
