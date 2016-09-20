import { connect } from 'react-redux';
import uuid from 'node-uuid';
import Conversation from './conversationPresentational'



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

const ConversationConnect = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationConnect;
