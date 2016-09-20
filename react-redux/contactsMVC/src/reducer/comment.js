
const CommentList = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: action.id,
          username: action.username,
          thumbnail: action.thumbnail,
          comment: action.comment
        }
      ];
    case 'DEL_COMMENT':
      return state.filter(s => s.id !== action.id);
    default:
      return state;
  }
}

export default CommentList;
