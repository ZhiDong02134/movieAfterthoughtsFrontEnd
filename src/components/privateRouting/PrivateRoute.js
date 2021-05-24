import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Spinner from "../general/Spinner";
import Navbar from "../Navbars/general/Navbar";
//Pages will only render for the routes in this component if user is authenticated
const PrivateRoute = ({ hide = false, ...rest }) => {
  const { isAuthenticated, loading } = useSelector(state => state.user);

  if (loading) {
    return <Spinner />;
  } else if (isAuthenticated) {
    return hide ? (
      <Route {...rest} />
    ) : (
      <>
        <Navbar />
        <Route {...rest} />
      </>
    );
  }

  return <Redirect to="/" />;
};

export default PrivateRoute;
