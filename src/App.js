import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Landing from "./components/pages/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import { loadUser } from "./actions/user";
import Discussions from "./components/pages/Discussions";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/privateRouting/PrivateRoute";
import CreatePost from "./components/pages/CreatePost";
import Setting from "./components/pages/setting/Setting";
import MyPosts from "./components/pages/setting/MyPosts";
import LikedPosts from "./components/pages/setting/LikedPosts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setAuthToken(localStorage.token);

    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/discussion" exact component={Discussions} />
          <PrivateRoute
            hide={true}
            path="/create"
            exact
            component={CreatePost}
          />
          <PrivateRoute path="/setting" exact component={Setting} />
          <PrivateRoute path="/myposts" exact component={MyPosts} />
          <PrivateRoute path="/likedposts" exact component={LikedPosts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
