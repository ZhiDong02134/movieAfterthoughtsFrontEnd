import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Copyright = ({ landing = false }) => {
  return (
    <>
      {landing ? (
        <>
          <p>
            {"Copyright © "}
            Movie Afterthoughts {new Date().getFullYear()}
            &nbsp; &ensp; &nbsp;
            <Link to="/attributions" className="attribution">
              Attributions
            </Link>
          </p>
        </>
      ) : (
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" to="#!">
            Movie Afterthoughts
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      )}
    </>
  );
};

export default Copyright;
