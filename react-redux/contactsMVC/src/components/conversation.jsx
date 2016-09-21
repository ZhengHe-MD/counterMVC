import { connect } from 'react-redux';
import { addComment, addCommentAsync } from '../reducer/action';
import uuid from 'node-uuid';
import Conversation from './conversationPresentational';


const mapStateToProps = state => ({
    commentsList: state.comment,
    isLoading: state.loading,
});

const mapDispatchToProps = {
  addCommentAsync,
};

const ConversationConnect = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationConnect;
