import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Navbars/landing/Navbar";
import CopyRight from "../general/Copyright";

const Landing = () => {
  const { isAuthenticated } = useSelector(state => state.user);

  if (isAuthenticated) {
    return <Redirect to="/discussion" />;
  }

  return (
    <>
      <Navbar />
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1
              className="x-large"
              style={{
                fontFamily: "'Dancing Script', cursive",
              }}>
              Movie Afterthoughts
            </h1>
            <p className="lead">
              "If life were predictable it would cease to be life, and be
              without flavor." -Eleanor Roosevelt
            </p>
            <div className="copyRight">
              <CopyRight landing={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
