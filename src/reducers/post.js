import {
  CREATE_POST,
  GET_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  ADD_COMMENT,
  GET_ALL_COMMENTS,
  GET_LIKES,
  POST_ERROR,
  DELETE_POST,
  EDIT_POST,
  DELETE_COMMENT,
} from "../actions/types";

const initialState = {
  posts: [],
  comments: [],
  likes: [],
  error: {},
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_POST:
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === payload.id ? payload : post
        ),
      };
    case LIKE_POST:
    case UNLIKE_POST:
    case GET_LIKES:
      return {
        ...state,
        likes: payload,
      };
    case ADD_COMMENT:
    case GET_ALL_COMMENTS:
      return {
        ...state,
        comments: payload,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== payload),
      };
    default:
      return state;
  }
};

export default postReducer;
