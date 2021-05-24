import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { useStyles } from "./navbarStyles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link to="/" className={classes.appName}>
              Movie Afterthoughts
            </Link>
          </Typography>
          <Button
            className={classes.btn}
            component={Link}
            to={"/register"}
            color="inherit">
            Register
          </Button>
          <Button
            className={classes.btn}
            component={Link}
            to={"/login"}
            color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
