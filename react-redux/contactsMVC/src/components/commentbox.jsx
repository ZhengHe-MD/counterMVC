import { connect } from 'react-redux';
import { delComment } from '../reducer/action';
import CommentBox from './commentBoxPresentational';

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteComment: (id) => {
//       dispatch(delComment(id));
//     }
//   }
// }

const mapDispatchToProps = { onDeleteComment: delComment };

const CommentBoxConnect = connect(null, mapDispatchToProps)(CommentBox);

export default CommentBoxConnect;
