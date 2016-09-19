import { connect } from 'react-redux';
import CommentBox from './commentBoxPresentational'


const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteComment: (id) => {
      dispatch({ type: 'DEL_COMMENT', id });
    }
  }
}

const CommentBoxConnect = connect(null, mapDispatchToProps)(CommentBox);

export default CommentBoxConnect;
