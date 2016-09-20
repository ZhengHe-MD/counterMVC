import { connect } from 'react-redux';
import { addComment, onGetRandomUserAndDispatch } from '../reducer/action';
import uuid from 'node-uuid';
import Conversation from './conversationPresentational';


const mapStateToProps = state => ({
    commentsList: state.comment,
    isLoading: state.loading,
});

const mapDispatchToProps = {
  onSaveComment: addComment,
  onSaveDispatch: onGetRandomUserAndDispatch,
};

const ConversationConnect = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationConnect;
