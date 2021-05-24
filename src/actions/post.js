import user from "../apis/user";
import { postStatus, commentStatus } from "../notifications";
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
} from "./types";

export const createPost = values => async dispatch => {
  try {
    const { data } = await user.post("/posts", values);

    dispatch({
      type: CREATE_POST,
      payload: data,
    });

    postStatus("Post Created Successfully", 2000);
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        message: error.response.data.errors,
        status: error.response.status,
      },
    });

    postStatus("Error creating post", 2000, true);
  }
};

export const editPost =
  ({ values, postId }) =>
  async dispatch => {
    try {
      const { data } = await user.post(`/posts/${postId}`, values);

      dispatch({
        type: EDIT_POST,
        payload: data,
      });

      postStatus("Post edited successfully", 2000);
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: {
          message: error.response.data.errors,
          status: error.response.status,
        },
      });

      postStatus("Error editing post", 2000, true);
    }
  };

export const getPosts = () => async dispatch => {
  try {
    const { data } = await user.get("/posts");

    dispatch({
      type: GET_POSTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        message: error.response.data.errors,
        status: error.response.status,
      },
    });
  }
};

export const likePost = postId => async dispatch => {
  try {
    const { data } = await user.post(`/posts/like/${postId}`);

    dispatch({
      type: LIKE_POST,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        message: error.response.data.errors,
        status: error.response.status,
      },
    });
  }
};

export const unlikePost = postId => async dispatch => {
  try {
    const { data } = await user.delete(`/posts/unlike/${postId}`);

    dispatch({
      type: UNLIKE_POST,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        message: error.response.data.errors,
        status: error.response.status,
      },
    });
  }
};

export const deletePost = postId => async dispatch => {
  try {
    await user.delete(`/posts/${postId}`);

    dispatch({
      type: DELETE_POST,
      payload: postId,
    });

    postStatus("Post deleted successfully");
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        message: error.response.data.errors,
        status: error.response.status,
      },
    });

    error.response.status === 400
      ? postStatus(error.response.data.errors, null, true)
      : postStatus("Unable to delete post", null, true);
  }
};

export const addComment = values => async dispatch => {
  try {
    const { data } = await user.post(`/comments`, values);

    dispatch({
      type: ADD_COMMENT,
      payload: data,
    });

    commentStatus("Comment added successfully", 2000);
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        message: error.response.data.errors,
        status: error.response.status,
      },
    });

    error.response.data.errors.forEach(e =>
      commentStatus(e.message, 2000, true)
    );
  }
};

export const getAllComments = () => async dispatch => {
  try {
    const { data } = await user.get("/comments");

    dispatch({
      type: GET_ALL_COMMENTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        message: error.response.data.errors,
        status: error.response.status,
      },
    });
  }
};

export const getLikes = () => async dispatch => {
  try {
    const { data } = await user.get("/posts/likes");

    dispatch({
      type: GET_LIKES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        message: error.response.data.errors,
        status: error.response.status,
      },
    });
  }
};
