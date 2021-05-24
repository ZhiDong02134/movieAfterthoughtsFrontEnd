import user from "../apis/user";
import { successUser, errorUser, postStatus } from "../notifications";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  LOAD_USER,
  AUTH_ERROR,
  DELETE_USER,
  DELETE_USER_FAIL,
} from "./types";

export const loadUser = () => async dispatch => {
  try {
    const { data } = await user.get("/authorize");

    dispatch({
      type: LOAD_USER,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const loginUser = formValues => async dispatch => {
  try {
    const { data } = await user.post("/users/login", formValues);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    successUser("Successfully logged in");
  } catch (err) {
    console.error(err);

    errorUser("Invalid Credentials");

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const deleteUser = id => async dispatch => {
  try {
    await user.delete(`/users/${id}`);

    dispatch({
      type: DELETE_USER,
    });

    postStatus("Account successfully deleted");
  } catch (error) {
    console.error(error);

    dispatch({
      type: DELETE_USER_FAIL,
    });

    error.response.status === 400
      ? errorUser(error.response.data.error)
      : errorUser("Unable to delete user");
  }
};

export const registerUser = values => async dispatch => {
  try {
    const { data } = await user.post("/users/register", values);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });

    successUser("Registration completed!", 5000);
    successUser(`Welcome to Movie Afterthoughts ${data.firstName}!`, 5000);
  } catch (error) {
    console.error(error);

    dispatch({
      type: REGISTER_FAIL,
    });

    error.response.status === 401
      ? errorUser(error.response.data.error)
      : errorUser("Unable to register user, please try again");
  }
};

export const logOut = () => ({
  type: LOG_OUT,
});
