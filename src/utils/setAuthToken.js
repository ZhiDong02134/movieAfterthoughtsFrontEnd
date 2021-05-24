import user from "../apis/user";

//Set global headers for all axios objects
const setAuthToken = token => {
  if (token) {
    user.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete user.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
